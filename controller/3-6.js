const takeMedian2 = (req, res) => {
  try {
    let array1 = req.body.array1;
    let array2 = req.body.array2;
    let result;
    let array = [...array1, ...array2];
    let sortedArray = array.sort(function (a, b) {
      return a - b;
    });
    if (sortedArray.length % 2 != 0) {
      let medianIndex = (sortedArray.length - (sortedArray.length % 2)) / 2;
      result = sortedArray[medianIndex];
    } else {
      let median =
        (sortedArray[sortedArray.length / 2 - 1] +
          sortedArray[sortedArray.length / 2]) /
        2;
      result = median;
    }
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeMedian2;
