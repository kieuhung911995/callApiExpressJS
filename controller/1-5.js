const takeShortest = (req, res) => {
  try {
    let array = req.body.array;
    let shortestLength = +Infinity;
    let shortestString = [];
    for (const string of array) {
      if (string.length == shortestLength) {
        shortestString.push(string);
      }
      if (string.length < shortestLength) {
        shortestString = [];
        shortestLength = string.length;
        shortestString.push(string);
      }
    }
    let result = shortestString;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeShortest;
