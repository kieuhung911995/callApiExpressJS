const trimString = (req, res) => {
  try {
    let string = req.body.string;
    let trimLeftRight = string.trim();
    let trimCenter = trimLeftRight.replace(/\s+/g, " ");
    let result = trimCenter;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = trimString;
