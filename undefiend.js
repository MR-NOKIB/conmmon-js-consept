/* 
    8 Ways to get undefiend
    1. Variable that is not initialized
    2. function with no return
    3. parameter that is not passed
*/

const months = ['January', 'Fabruary', 'March', 'April', 'May'];
months.splice();
console.log(months);