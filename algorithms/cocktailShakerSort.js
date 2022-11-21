/*
* Cocktail shaker sort is a slight variation of bubble sort.[1] It differs in that instead of repeatedly passing through
* the list from bottom to top, it passes alternately from bottom to top and then from top to bottom. It can achieve
* slightly better performance than a standard bubble sort. The reason for this is that bubble sort only passes through
* the list in one direction and therefore can only move items backward one step each iteration.
*
* An example of a list that proves this point is the list (2,3,4,5,1), which would only need to go through one pass of
* cocktail sort to become sorted, but if using an ascending bubble sort would take four passes. However one cocktail
* sort pass should be counted as two bubble sort passes. Typically cocktail sort is less than two times faster than
* bubble sort.
*
* Another optimization can be that the algorithm remembers where the last actual swap has been done. In the next
* iteration, there will be no swaps beyond this limit and the algorithm has shorter passes. As the cocktail shaker sort
* goes bidirectionally, the range of possible swaps, which is the range to be tested, will reduce per pass, thus
* reducing the overall running time slightly.
*
* https://en.wikipedia.org/wiki/Cocktail_shaker_sort
*/

const cocktailShakerSort = (arr) => {
  if (arr.some((x) => isNaN(x))) {
    throw new Error ('This method sorts only numbers');
  }

  if (arr.length < 2) {
    return arr;
  }

  const items = [...arr];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]]
      }
    }

    for (let j = items.length - 1; j > i; j--) {
      if (items[j] < items[j - 1]) {
        [items[j], items[j - 1]] = [items[j - 1], items[j]]
      }
    }
  }

  return items;
};

const digits = [0, -23, -4, 11, -88, 45, 5, 0, 28, 23, -86];
const notOnlyDigits = [0, -23, -4, 11, -88, 45, 5, 'hello', 0, 23, 23, -88];

console.log(cocktailShakerSort(digits)); // [-88, -86, -23, -4, 0, 0, 5, 11, 23, 28, 45]
console.log(cocktailShakerSort(notOnlyDigits)); // Error: This method sorts only numbers
