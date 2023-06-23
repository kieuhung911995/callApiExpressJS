function maximumProduct(req, res) {
  try {
    let array = req.body.array;
    let max = -Infinity;
    for (let i = 0; i < array.length - 2; i++) {
      for (let j = i + 1; j < array.length - 1; j++) {
        for (let k = j + 1; k < array.length; k++) {
          let result = array[i] * array[j] * array[k];
          if (max < result) {
            max = result;
          }
        }
      }
    }
    let result = max;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
module.exports = maximumProduct;
