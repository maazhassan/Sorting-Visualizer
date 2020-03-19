'use strict';
import { randomArray } from "./bubble_sort"

let a = randomArray(50, 5, 500);
console.log(a);

//Bubble sort algorithm
function bubbleSort(arr) {
    let n = arr.length - 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            if (arr[j] > arr[j+1]) {
                let num = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = num;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(a));