/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    let m = num % 2;
    if (m > 0) return 1 + numberOfSteps(num - 1);
    else return 1 + numberOfSteps(num / 2);
}
const a =  numberOfSteps(10);



