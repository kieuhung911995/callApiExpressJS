const takeSumDivisible3and5 = (req, res) => {
  try {
    let array = req.body.array;
    let result = 0;
    for (const numb of array) {
      if (numb % 15 == 0) {
        result = result + numb;
      }
    }
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeSumDivisible3and5;
