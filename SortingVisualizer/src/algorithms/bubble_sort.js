'use strict';
import {displayArray} from "../app.js";
import {clear} from "../app.js";
import {sleep} from "../app.js";

//Bubble sort algorithm
export async function bubbleSort(arr) {
    const n = arr.length - 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            if (arr[j] > arr[j+1]) {
                await sleep(10);
                clear();
                displayArray(arr);
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    clear();
    return arr;
}
