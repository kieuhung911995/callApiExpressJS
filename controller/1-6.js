const sortAsc = (req, res) => {
  try {
    let array = req.body.array;
    let sortResult = array.sort(function (a, b) {
      return a - b;
    });
    res.status(200).send(JSON.stringify(sortResult));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = sortAsc;
