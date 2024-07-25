/**
 * 1342.将数字变成0的操作次数
 * @param {*} num 
 * @returns 
 */
 const numberOfSteps = (num) => {
    if (num === 0) return 0;
    if (num === 1) return 1;
    let m = num % 2;
    if (m > 0) return 1 + numberOfSteps(num - 1);
    else return 1 + numberOfSteps(num / 2);
}

/**
 * 1672.最富有客户的资产总量
 * @param {*} accounts 
 * @returns 
 */
 const maximumWealth = function (accounts) {
    return accounts.reduce((a, b) => {
        const h2 = b.reduce((m, n) => m + n, 0)
        return a > h2 ? a : h2
    },accounts[0].reduce((m, n) => m + n, 0))
};

module.exports = {
    numberOfSteps,
    maximumWealth
}