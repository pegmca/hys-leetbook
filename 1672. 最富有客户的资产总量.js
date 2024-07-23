var maximumWealth = function (accounts) {
    return accounts.reduce((a, b) => {
        const h2 = b.reduce((m, n) => m + n, 0)
        return a > h2 ? a : h2
    },accounts[0].reduce((m, n) => m + n, 0))
};


console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));

console.log(Number.MAX_VALUE);
