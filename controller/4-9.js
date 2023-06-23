const takeLongestIncreasing = (req, res) => {
  try {
    let array = req.body.array;
    let longestIcreasing = 1;
    for (let i = 0; i < array.length; i++) {
      let count = 1;
      if (array[i + 1] === array[i] + 1) {
        count++;
        let j = i + 1;
        while (array[j + 1] === array[j] + 1 && j < array.length - 1) {
          count++;
          j++;
        }
        if (longestIcreasing < count) {
          longestIcreasing = count;
        }
        if (j == array.length - 1) {
          break;
        }
      }
    }
    let result = longestIcreasing;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeLongestIncreasing;
