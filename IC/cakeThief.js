/*

Each type of cake has a weight and a value, stored in an object with two properties:
1. weight: the weight of the cake in kilograms
2. value: the monetary value of the cake in British pounds
For example:
// weighs 7 kilograms and has a value of 160 pounds
{weight: 7, value: 160}
// weighs 3 kilograms and has a value of 90 pounds
{weight: 3, value: 90}

Write a function maxDuffelBagValue() that takes an array of cake type objects and a
weight capacity, and returns the maximum monetary value the duffel bag can hold.

var cakeTypes = [
{weight: 7, value: 160},
{weight: 3, value: 90},
{weight: 2, value: 15},
];
var capacity = 20;
maxDuffelBagValue(cakeTypes, capacity);

returns 555 (6 of the middle type of cake and 1 of the last type of cake)
*/

let cakeTypes = [
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
];

const maxDuffelBagValue = (cakeTypes, capacity) => {
    //initialize the max
    //create recursive function that checks for capacity left and value
        //base case to stop the loop4
            //set max to this new value with its bigger than the current max
        //create a loop into cakeTypes
    //return the max
}

console.log(maxDuffelBagValue(cakeTypes, 20));