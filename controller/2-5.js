const maxSubArraySum = (req, res) => {
  try {
    let array = req.body.array;
    let currentSum = 0;
    let maxSum = -Infinity;
    for (const numb of array) {
      currentSum = currentSum + numb;
      if (maxSum < currentSum) {
        maxSum = currentSum;
      }
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    let result = maxSum;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = maxSubArraySum;
