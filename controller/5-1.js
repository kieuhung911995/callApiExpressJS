const reverseArray = (req, res) => {
  try {
    let array = req.body.array;
    let result = array.reduce(
      (reversedArr, currentElement) => [currentElement, ...reversedArr],
      []
    );
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = reverseArray;
