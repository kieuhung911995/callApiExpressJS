const postfix = (req, res) => {
  try {
    let input = req.body.input;
    const checkPriority = (x) => {
      if (x === "^") {
        return 3;
      }
      if (x === "*" || x === "/") {
        return 2;
      }
      if (x === "+" || x === "-") {
        return 1;
      }
      if (x === "(") {
        return 0;
      }
    };
    let expression = input.replace(/\s/g, "");
    let postfix = [];
    let stack = [];
    for (let i = 0; i < expression.length; i++) {
      if (!isNaN(expression[i])) {
        let stringNumb = "";
        while (!isNaN(expression[i])) {
          stringNumb = stringNumb.concat("", expression[i]);
          i++;
        }
        i--;
        postfix.push(stringNumb);
      }
      if (expression[i] === "(") {
        stack.push(expression[i]);
      }
      if (expression[i] === ")") {
        while (stack[stack.length - 1] !== "(") {
          postfix.push(stack.pop());
        }
        stack.pop();
      }
      if (
        isNaN(expression[i]) &&
        expression[i] !== "(" &&
        expression[i] !== ")"
      ) {
        while (
          stack.length != 0 &&
          checkPriority(expression[i]) <= checkPriority(stack[stack.length - 1])
        ) {
          postfix.push(stack.pop());
        }
        stack.push(expression[i]);
      }
    }
    while (stack.length != 0) {
      postfix.push(stack.pop());
    }
    let result = postfix;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = postfix;
