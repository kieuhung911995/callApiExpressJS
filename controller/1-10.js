const takeNumbOfString = (req, res) => {
  try {
    let array = req.body.array;
    let count = 0;
    for (const string of array) {
      if (string.includes("a")) {
        count++;
      }
    }
    let result = count;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeNumbOfString;
