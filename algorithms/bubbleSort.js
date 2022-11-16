/*
* Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the
* input list element by element, comparing the current element with the one after it, swapping their values if needed.
* These passes through the list are repeated until no swaps had to be performed during a pass, meaning that the list has
* become fully sorted. The algorithm, which is a comparison sort, is named for the way the larger elements "bubble" up
* to the top of the list.
*
* https://en.wikipedia.org/wiki/Bubble_sort
*
First Pass
( 5 1 4 2 8 ) → ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
( 1 5 4 2 8 ) → ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) → ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) → ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
Second Pass
( 1 4 2 5 8 ) → ( 1 4 2 5 8 )
( 1 4 2 5 8 ) → ( 1 2 4 5 8 ), Swap since 4 > 2
( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
Now, the array is already sorted, but the algorithm does not know if it is completed. The algorithm needs one additional
whole pass without any swap to know it is sorted.

Third Pass
( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
( 1 2 4 5 8 ) → ( 1 2 4 5 8 )
*  */

const bubbleSort = (arr) => {
  if (arr.some((x) => isNaN(x))) {
    throw new Error ('This method sorts only numbers');
  }

  if (arr.length < 2) {
    return arr;
  }

  const tempArray = [...arr];
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < tempArray.length - 1; i++) {
      if (tempArray[i] > tempArray[i + 1]) {
        [tempArray[i], tempArray[i + 1]] = [tempArray[i + 1], tempArray[i]]
        swapped = true;
      }
    }
  }

  return tempArray;
}

const digits = [0, -23, -4, 11, -88, 45, 5, 0, 23, 23, -88];
const notOnlyDigits = [0, -23, -4, 11, -88, 45, 5, 'hello', 0, 23, 23, -88];

console.log(bubbleSort(digits)); // [-88, -88, -23, -4, 0, 0, 5, 11, 23, 23, 45]
console.log(bubbleSort(notOnlyDigits)); // Error: This method sorts only numbers
