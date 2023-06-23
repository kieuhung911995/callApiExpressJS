const takeChunk = (req, res) => {
  try {
    let array = req.body.array;
    let chunk = req.body.chunk;
    if (chunk > array.length) {
      return "chunk must less than or equal to array's length";
    }
    let j = 0;
    let newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      j = j + chunk;
      newArray.push(array.slice(i, j));
    }
    let result = newArray;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeChunk;
