'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Selection sort algorithm
export async function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                await sleep(10);
                clear();
                displayArray(arr);
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            await sleep(10);
            clear();
            displayArray(arr);
            arr[i] = arr[min];
            await sleep(10);
            clear();
            displayArray(arr);
            arr[min] = temp;
        }
    }
    clear();
    return arr;
}

