const takeNumbOfWords = (req, res) => {
  try {
    let string = req.body.string;
    let result;
    let trimLeftRight = string.trim();
    let trimCenter = trimLeftRight.replace(/\s+/g, " ");
    let count = 1;
    if (!trimCenter) {
      result = 0;
    }
    for (const word of trimCenter) {
      if (word === " ") {
        count++;
      }
    }
    result = count;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeNumbOfWords;
