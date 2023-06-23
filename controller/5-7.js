const mapKey = (req, res) => {
  try {
    let array = req.body.array;
    let keys = req.body.keys;
    let A = [];
    array.map((element) => {
      let obj = {};
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let singleValue = element[keys[i]];
        let singleObj = { singleKey: singleValue };
        singleObj[key] = singleObj["singleKey"];
        delete singleObj["singleKey"];
        obj = Object.assign(obj, singleObj);
      }
      A.push(obj);
    });
    let result = A;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = mapKey;
