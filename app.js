const excelToJson = require("convert-excel-to-json");
const { json } = require("express");

const result = excelToJson({
  sourceFile: "/home/it/Downloads/PCS Information by Market (4).xlsx",
  columnToKey: {
    A: "premiumCricketMarketId",
    B: "friendlyMarketName",
    C: "Type(Line/Win/Handicap)",
    D: "exampleName",
    E: "runners",
    F: "multipleWinners",
    G: "marketpriority(suggested display order)",
    H: "relatedMarketIDs",
    I: "defaultMargin",
    J: "marketGroup",
    K: "mainMarket",
    L: "ufHomeMarketId",
    M: "ufAwayMarketId",
    N: "ufMarketId",
    O: "ufHomeMarketName",
    P: "ufAwayMarketName",
    Q: "ufMarketName",
    R: "suggestedMarketName",
    S: "pre-Match",
    T: "live",
    U: "integratedtoUoF",
    V: "specifiers",
    W: "extendedSpecifiers",
  },
});
for (let i = 1; i <= result.Sheet1.length - 1; i++) {
    result.Sheet1[i].relatedMarketIDs = [];
  if (
    isNaN(result.Sheet1[i].relatedMarketIDs) &&
    result.Sheet1[i].relatedMarketIDs
  ) {
    result.Sheet1[i].relatedMarketIDs =
      result.Sheet1[i].relatedMarketIDs.split(",");
  } else if (!isNaN(result.Sheet1[i].relatedMarketIDs)) {
    result.Sheet1[i].relatedMarketIDs = [
      result.Sheet1[i].relatedMarketIDs.toString(),
    ];
  }

  result.Sheet1[i].relatedMarketIDs = [result.Sheet1[i].relatedMarketIDs];
}

console.log(JSON.stringify(result));