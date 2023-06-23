const takeLength = (req, res) => {
  try {
    let string = req.body.string;
    let result = string.length;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {}
  console.log(error);
  res.status(500).send(error);
};
module.exports = takeLength;
