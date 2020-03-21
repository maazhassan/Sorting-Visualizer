'use strict';
import { randomArray } from "../app.js";

//Generate array
let a = randomArray(50, 5, 500);
console.log(a);

//Recursive function
function quickSort(arr, start, end) {
    //Base case
    if (start >= end) return;

    //Partition the array and return index of pivot value
    let index = partition(arr, start, end);

    //Recursively quick sort both partitions with new pivot values
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);

    //Return sorted array at the end
    return arr;
}

//Partition function
function partition(arr, start, end) {
    //Get pivot index and value. Index is always the start, value is always the end.
    let pivotIndex = start;
    let pivotValue = arr[end];

    /*
    Loop through the array. If the value is less than the
    pivot value, swap it and the value at the pivot index.
    Then, move the pivot index forward one. The pivot index
    is where the pivot value will eventually end up.
    */
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

//Swap function
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.time("sort");
console.log(quickSort(a, 0, a.length - 1));
console.timeEnd("sort");