/*
In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity,
which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort
is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations,
particularly where auxiliary memory is limited.

https://en.wikipedia.org/wiki/Selection_sort
*/

const selectionSort = (arr) => {
  let min;
  let tempArray = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(tempArray[i])) {
      throw new Error ('This method sorts only numbers');
    }

    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (tempArray[min] >= tempArray[j]) {
        min = j;
      }
    }

    [tempArray[min], tempArray[i]] = [tempArray[i], tempArray[min]];
  }

  return tempArray;
};

const digits = [0, -23, -4, 11, -88, 45, 5, 0, 23, 23, -88];
const notOnlyDigits = [0, -23, -4, 11, -88, 45, 5, 'hello', 0, 23, 23, -88];

console.log(selectionSort(digits)); // [-88,-88,-23,-4,0,0,5,11,23,23,45]
console.log(selectionSort(notOnlyDigits)); // Error: This method sorts only numbers
