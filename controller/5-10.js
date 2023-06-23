const showDataFile = (req, res, next) => {
  try {
    const fs = require("fs");
    let result;
    let param = req.query;
    let file = req.file;
    let filePath = file.path;
    let nameOfFile = file.originalname;
    if (nameOfFile.includes(".txt")) {
      const data = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
      let replace = data.replace("{{name}}", param.name);
      fs.appendFileSync("documents/result.txt", "");
      fs.writeFileSync("./documents/result.txt", replace);
      const newData = fs.readFileSync("./documents/result.txt", {
        encoding: "utf8",
        flag: "r",
      });
      result = newData;
    }
    if (nameOfFile.includes(".html")) {
      const data = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
      let replaceObj = {
        "{{title}}": param.title,
        "{{pageTitle}}": param.pageTitle,
        "{{content}}": param.content,
      };
      let replace = data.replace(
        /{{title}}|{{pageTitle}}|{{content}}/gi,
        function (matched) {
          return replaceObj[matched];
        }
      );
      fs.appendFileSync("documents/result.html", "");
      fs.writeFileSync("./documents/result.html", replace);
      const newData = fs.readFileSync("./documents/result.html", {
        encoding: "utf8",
        flag: "r",
      });
      result = newData;
    }
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = showDataFile;
