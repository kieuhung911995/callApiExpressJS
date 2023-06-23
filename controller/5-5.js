const groupBy = (req, res) => {
  try {
    let array = req.body.array;
    let collect = req.body.collect;
    let A = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (array.length === 1) {
        break;
      }
      let B = [];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j][collect] === array[i][collect]) {
          B.push(array[i]);
          let n = j;
          while (n < array.length) {
            if (array[n][collect] === array[i][collect]) {
              B.push(array[n]);
              array.splice(n, 1);
              n--;
            }
            n++;
          }
          array.splice(i, 1);
          j--;
          A.push(B);
        }
        if (array[j][collect] !== array[i][collect]) {
          B = [];
          if (j == array.length - 1) {
            B.push(array[i]);
            A.push(B);
            array.splice(i, 1);
            j--;
          }
        }
        if (array.length === 1) {
          B = [];
          B.push(array[0]);
          A.push(B);
          break;
        }
      }
    }
    let result = A;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = groupBy;
