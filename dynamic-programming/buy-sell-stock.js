/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let sell = prices[i];
    if (sell > buy) {
      profit = Math.max(profit, sell - buy);
    } else {
      buy = sell;
    }
  }
  return profit;
};
