const takeLongestCommonSubsequence = (req, res) => {
  try {
    let array = req.body.array;
    let str1 = array[0];
    let str2 = array[1];
    if (str1 === "" || str2 === "") {
      return "No longest common subsequence found";
    }
    let C = [];
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          let D = "";
          let m = i;
          let n = j;
          while (str1[m] === str2[n] && n < str2.length) {
            D = D.concat("", str1[m]);
            m++;
            n++;
          }
          C.push(D);
        }
      }
    }
    let lengthtArray = C.map((element) => element.length);
    let longestLenght = Math.max(...lengthtArray);
    let longestElement = C.find((element) => element.length == longestLenght);
    let result = longestElement;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = takeLongestCommonSubsequence;
