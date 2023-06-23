const calculatePostfix = (req, res) => {
  try {
    let postfix = req.body.postfix;
    const calculator = (x, a, b) => {
      if (x === "^") {
        return b ** a;
      }
      if (x === "*") {
        return b * a;
      }
      if (x === "/") {
        return b / a;
      }
      if (x === "+") {
        return b + a;
      }
      if (x === "-") {
        return b - a;
      }
    };
    let stack = [];
    for (let i = 0; i < postfix.length; i++) {
      if (!isNaN(postfix[i])) {
        stack.push(Number(postfix[i]));
      }
      if (isNaN(postfix[i])) {
        let a = stack.pop();
        let b = stack.pop();
        let c = calculator(postfix[i], a, b);
        stack.push(c);
      }
    }
    let result = stack[0];
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = calculatePostfix;
