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
    { weight: 2, value: 400}
];

const maxDuffelBagValue = (cakeTypes, capacity) => {
    //initialize the max
    let max = -Infinity;
    let smallest = Math.min(...cakeTypes.map(cake => {
        return cake.weight
    }));
    // console.log('small', smallest);
    //create recursive function that checks for capacity left and value
    const checkForMax = (capacityLeft, value) => {
        //base case to stop the loop
        if (smallest > capacityLeft) {
            //set max to this new value with its bigger than the current max
            max = Math.max(max, value);
        }
        //create a loop into cakeTypes
        for (let i = 0; i < cakeTypes.length; i++) {
            if (capacityLeft >= cakeTypes[i].weight) {
                checkForMax(capacityLeft - cakeTypes[i].weight, value + cakeTypes[i].value);
            }
        }

    }
    //return the max
    checkForMax(capacity, 0);
    return max;
}

console.log(maxDuffelBagValue(cakeTypes, 20));