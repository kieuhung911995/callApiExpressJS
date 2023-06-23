const takeUniq = (req, res) => {
  try {
    let array = req.body.array;
    let uniqArray = Array.from(new Set(array));
    let result = uniqArray;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeUniq;
