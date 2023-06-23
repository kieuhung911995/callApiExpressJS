const takeSquare = (req, res) => {
  try {
    let number = req.body.number;
    let result = Math.pow(number, 2);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeSquare;
