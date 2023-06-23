const takeSum = (req, res) => {
  try {
    let a = req.body.a;
    let b = req.body.b;
    let result = a + b;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = takeSum;
