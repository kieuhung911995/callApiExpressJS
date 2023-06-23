const takeLongestSubString = (req, res) => {
  try {
    let array = req.body.array;
    let A = [];
    for (let i = 0; i < array[0].length; i++) {
      for (let j = 0; j < array[1].length; j++) {
        if (array[1][j] === array[0][i]) {
          let m = i;
          let n = j;
          let B = "";
          while (array[1][n] === array[0][m] && n < array[1].length) {
            B = B.concat("", array[1][n]);
            A.push(B);
            m++;
            n++;
          }
        }
      }
    }
    let subStringArray = Array.from(new Set(A));
    for (let i = 2; i < array.length; i++) {
      for (let j = 0; j < subStringArray.length; j++) {
        if (!array[i].includes(subStringArray[j])) {
          subStringArray.splice(j, 1);
          j--;
        }
      }
    }
    let longestSubString = 0;
    for (let i = 0; i < subStringArray.length; i++) {
      if (longestSubString < subStringArray[i].length) {
        longestSubString = subStringArray[i].length;
      }
    }
    let result = longestSubString;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeLongestSubString;
