/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

const greatestCommonDivisor = (num1, num2) => {
    //storage of what gets divisible by num1; Only need to check to sqrt of bigger number;
    //init GCD
    let gcd = -Infinity;
    //loop into Math.sqrt of bigger number
    for (let i = 0; i < Math.max(num1, num2); i ++) {
        if (num1 % i === 0 && num2 % i === 0 ) {
            gcd = Math.max(gcd, i);
        }
    }
        //check who
    //return GCD
    return gcd;
}

const greatestCommonDivisorRecurse = (num1, num2) => {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    if (max % min === 0 ) {
        return min;
    } else {
        return greatestCommonDivisorRecurse(min, max % min);
    }
}

console.log(greatestCommonDivisorRecurse(40, 15));

// 36
// 1: 36
// 2: 18
// 3: 12
// 4: 9
// 6: 6
