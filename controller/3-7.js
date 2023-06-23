const findLongestPalidrome = (req, res) => {
  try {
    let string = req.body.string;
    let convertString = string.replace(/\s/g, "");
    let longestPalindrome = 0;
    for (let i = 0; i < convertString.length; i++) {
      for (let j = convertString.length - 1; j > i; j--) {
        if (convertString[j] === convertString[i]) {
          let n = j;
          let m = i;
          let A = [];
          let B = [];
          while (convertString[n] === convertString[m]) {
            A.push(convertString[m]);
            B.unshift(convertString[n]);
            m++;
            n--;
            if (n == m) {
              A.push(convertString[m]);
              let palindrome = [...A, ...B];
              if (longestPalindrome < palindrome.length) {
                longestPalindrome = palindrome.length;
              }
              break;
            }
            if (n < m) {
              let palindrome = [...A, ...B];
              if (longestPalindrome < palindrome.length) {
                longestPalindrome = palindrome.length;
              }
              break;
            }
          }
        }
      }
    }
    let result = longestPalindrome;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
module.exports = findLongestPalidrome;
