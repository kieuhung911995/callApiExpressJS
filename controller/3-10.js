const sortString = (req, res) => {
  try {
    let array = req.body.array;
    let result = [];
    let lengthArray = array.map((element) => element.length);
    let sortLengthArray = lengthArray.sort(function (a, b) {
      return a - b;
    });
    for (const numb of sortLengthArray) {
      let findIndex = array.findIndex((element) => element.length == numb);
      result.push(array[findIndex]);
      array.splice(findIndex, 1);
    }
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = sortString;
