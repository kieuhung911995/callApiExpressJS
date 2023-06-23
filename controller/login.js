const login = (req, res) => {
  const jwt = require("jsonwebtoken");
  try {
    let { email, password } = req.body;
    const emailDB = "kieuhung@gmail";
    const passwordDB = "123456";
    const roleDB = "admin";
    if (email !== emailDB || password !== passwordDB) {
      res.status(401).send("user is not authenticate");
    } else {
      let role = roleDB;
      let privateKey = "asdasjda";
      jwt.sign(
        { email: email, password: password },
        privateKey,
        function (err, token) {
          if (err) {
            throw err;
          }
          console.log(token);
        }
      );
      if (role !== roleDB) {
        res.status(403).send("user does not have permission");
      } else {
        res.status(200).send("login success");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = login;
