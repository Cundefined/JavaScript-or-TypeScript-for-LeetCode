function maxProfit(prices: number[]): number {
    if (prices.length === 0) {
        return 0;
    }

    let minPrice: number = prices[0];
    let maxProfit: number = 0;

    for (let i: number = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};