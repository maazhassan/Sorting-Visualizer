'use strict';

//Insertion sort algorithm
export const insertionSort = (arr) => {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = temp;
      }
      return arr;
}
