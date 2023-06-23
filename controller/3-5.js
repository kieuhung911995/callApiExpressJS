const findSmallest = (req, res) => {
  try {
    let array = req.body.array;
    let sortArray = array.sort(function (a, b) {
      return a - b;
    });
    let rest = 1;
    for (let i = 0; i < sortArray.length && sortArray[i] <= rest; i++) {
      rest = rest + sortArray[i];
    }
    let result = rest;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = findSmallest;
