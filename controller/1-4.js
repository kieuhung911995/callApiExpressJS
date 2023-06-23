const takeMax = (req, res) => {
  try {
    let list = req.body.list;
    let result = Math.max(...list);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeMax;
