const take2ndLargest = (req, res) => {
  try {
    let array = req.body.array;
    let result;
    if (array.length <= 1) {
      result = "array's length input must greater than or equal to 2";
    }
    let descArray = array.sort(function (a, b) {
      return b - a;
    });
    for (let i = 1; i < descArray.length; i++) {
      if (descArray[i] != descArray[0]) {
        result = descArray[i];
        break;
      }
      if (i === descArray.length - 1) {
        result = "array hasn't second largest number";
        break;
      }
    }
    console.log(result);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = take2ndLargest;
