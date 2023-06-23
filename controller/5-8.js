const switchOrder = (req, res) => {
  try {
    let arr = req.body.array;
    let switchId = req.body.switchId;
    let switchOrder = req.body.switchOrder;
    let t;
    for (const obj of arr) {
      if (obj.id === switchId) {
        t = obj.order;
        for (const obj of arr) {
          if (obj.order === switchOrder) {
            obj.order = t;
            break;
          }
        }
        obj.order = switchOrder;
        break;
      }
    }
    let result = arr;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = switchOrder;
