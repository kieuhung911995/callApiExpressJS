const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const takeSum = require("../controller/1-1.js");
const takeLength = require("../controller/1-2.js");
const takeSquare = require("../controller/1-3.js");
const takeMax = require("../controller/1-4.js");
const takeShortest = require("../controller/1-5.js");
const sortAsc = require("../controller/1-6.js");
const sortAlphB = require("../controller/1-7.js");
const takeMedian = require("../controller/1-8.js");
const takeNumbOfWords = require("../controller/1-9.js");
const takeNumbOfString = require("../controller/1-10.js");
const take2ndLargest = require("../controller/2-1.js");
const takeLongestWord = require("../controller/2-2.js");
const takeLongestCommonSubsequence = require("../controller/2-3.js");
const takeSumDivisible3and5 = require("../controller/2-4.js");
const maxSubArraySum = require("../controller/2-5.js");
const take2ndSmallest = require("../controller/3-1.js");
const takeMaximumDifference = require("../controller/3-2.js");
const takeLongestSubsequence = require("../controller/3-3.js");
const findLargestOverlap = require("../controller/3-4.js");
const findSmallest = require("../controller/3-5.js");
const takeMedian2 = require("../controller/3-6.js");
const findLongestPalidrome = require("../controller/3-7.js");
const sortString = require("../controller/3-10.js");
const bubbleSort = require("../controller/4-1.js");
const countDistinctSubsequences = require("../controller/4-2.js");
const takeLongestSubString = require("../controller/4-3.js");
const maximumProduct = require("../controller/4-6.js");
const sortString2 = require("../controller/4-7.js");
const takeLongestIncreasing = require("../controller/4-9.js");
const findLargestOverlap2 = require("../controller/4-10.js");
const reverseArray = require("../controller/5-1.js");
const takeChunk = require("../controller/5-2.js");
const takeUniq = require("../controller/5-3.js");
const takeUniq2 = require("../controller/5-4.js");
const groupBy = require("../controller/5-5.js");
const trimString = require("../controller/5-6.js");
const mapKey = require("../controller/5-7.js");
const switchOrder = require("../controller/5-8.js");
const takeSumOfKey = require("../controller/5-9.js");
const showDataFile = require("../controller/5-10.js");
const postfix = require("../controller/postfix.js");
const calculatePostfix = require("../controller/calculatePostfix.js");
const analyst = require("../controller/analyst.js");
const login = require("../controller/login.js");

router.post("/login", login);
router.post("/1-1", takeSum);
router.post("/1-2", takeLength);
router.post("/1-3", takeSquare);
router.post("/1-4", takeMax);
router.post("/1-5", takeShortest);
router.post("/1-6", sortAsc);
router.post("/1-7", sortAlphB);
router.post("/1-8", takeMedian);
router.post("/1-9", takeNumbOfWords);
router.post("/1-10", takeNumbOfString);
router.post("/2-1", take2ndLargest);
router.post("/2-2", takeLongestWord);
router.post("/2-3", takeLongestCommonSubsequence);
router.post("/2-4", takeSumDivisible3and5);
router.post("/2-5", maxSubArraySum);
router.post("/3-1", take2ndSmallest);
router.post("/3-2", takeMaximumDifference);
router.post("/3-3", takeLongestSubsequence);
router.post("/3-4", findLargestOverlap);
router.post("/3-5", findSmallest);
router.post("/3-6", takeMedian2);
router.post("/3-7", findLongestPalidrome);
router.post("/3-10", sortString);
router.post("/4-1", bubbleSort);
router.post("/4-2", countDistinctSubsequences);
router.post("/4-3", takeLongestSubString);
router.post("/4-6", maximumProduct);
router.post("/4-7", sortString2);
router.post("/4-9", takeLongestIncreasing);
router.post("/4-10", findLargestOverlap2);
router.post("/5-1", reverseArray);
router.post("/5-2", takeChunk);
router.post("/5-3", takeUniq);
router.post("/5-4", takeUniq2);
router.post("/5-5", groupBy);
router.post("/5-6", trimString);
router.post("/5-7", mapKey);
router.post("/5-8", switchOrder);
router.post("/5-9", takeSumOfKey);
router.post("/5-10", upload.single("template"), showDataFile);
router.post("/postfix", postfix);
router.post("/calculatePostfix", calculatePostfix);
router.post("/analyst", upload.single("BangCong"), analyst);

module.exports = router;
