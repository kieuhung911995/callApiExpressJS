function findLargestOverlap2(req, res) {
  try {
    let arr = req.body.array;
    let k = req.body.k;
    const arrSet = arr.map((element) => new Set(element.split("")));
    const convertArrSet = arrSet.map((element) => Array.from(element));
    let result;
    let resultArray = [];
    let maxSameChar = 0;
    let atLeastSameChar = k;
    for (let i = 0; i < convertArrSet.length - 1; i++) {
      for (let j = i + 1; j < convertArrSet.length; j++) {
        let countSameChar = 0;
        for (const element of convertArrSet[j]) {
          if (convertArrSet[i].includes(element)) {
            countSameChar++;
          }
        }
        if (maxSameChar == countSameChar && countSameChar >= atLeastSameChar) {
          result = [arr[i], arr[j]];
          resultArray.push(result);
        }
        if (maxSameChar < countSameChar && countSameChar >= atLeastSameChar) {
          resultArray = [];
          result = [arr[i], arr[j]];
          resultArray.push(result);
          maxSameChar = countSameChar;
        }
      }
    }
    if (resultArray.length != 0) {
      result = resultArray;
    } else {
      result = "no result";
    }
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
module.exports = findLargestOverlap2;
