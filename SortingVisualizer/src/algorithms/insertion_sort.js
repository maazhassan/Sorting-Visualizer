'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Insertion sort algorithm
export async function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
          await sleep(10);
          clear()
          displayArray(arr);
          arr[j + 1] = arr[j];
          j--;
        }
        await sleep(10);
        clear()
        displayArray(arr);
        arr[j + 1] = temp;
      }
      clear();
      return arr;
}
