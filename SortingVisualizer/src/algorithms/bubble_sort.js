'use strict';
import { randomArray } from "../app.js";

//Generate array
let a = randomArray(50, 5, 500);
console.log(a);

//Bubble sort algorithm
const bubbleSort = (arr) => {
    let n = arr.length - 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(a));