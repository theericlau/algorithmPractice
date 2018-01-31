/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

const bubbleSort = array => {
  //loop each index to see if it's sorted
  for (let i = 0; array[i] < array[i + 1]; i++) {
    //if it's sorted
    if (i + 1 === array.length - 1) {
      return array;
    }
  }
  //loop each index to sort again
  for (let i = 0; i < array.length - 1; i++) {
    //at each index check if current is greater than next
    if (array[i] > array[i + 1]) {
      //if true swap the index
      let current = array[i];
      array[i] = array[i + 1];
      array[i + 1] = current;
    }
  }
  return bubbleSort(array);
}

const array1 = [5,3,8,2];
const array2 = [10, 5, 200, 30, 70, 20]
console.log(bubbleSort(array2));

//Time Complexity is 2n but since it's recursive it'll be n^2