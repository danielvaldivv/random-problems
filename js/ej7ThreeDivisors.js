"use strict";
// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.
var isThree = function (n) {
    let divisors = [];
    for (let i = 0; i <= n; i++) {
        let div = n / i;
        if (div - Math.floor(div) == 0) {
            divisors.push(div);
        }
    }
    if (divisors.length == 3) {
        console.log('true');
    }
    else {
        console.log('false');
    }
    console.log(`The divisors are ${divisors}`);
};
isThree(8);
