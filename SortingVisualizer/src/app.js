'use strict';
import {bubbleSort} from "./algorithms/bubble_sort.js";
import {heapSort} from "./algorithms/heap_sort.js";
import {insertionSort} from "./algorithms/insertion_sort.js";
import {mergeSort} from "./algorithms/merge_sort.js";
import {quickSortH} from "./algorithms/quick_sort_hoare.js";
import {quickSortL} from "./algorithms/quick_sort_lomuto.js";
import {selectionSort} from "./algorithms/selection_sort.js";

//Generate a random number in a range
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Generate a random array
function randomArray(size, min, max) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(randomRange(min, max));
    }
    return array;
}

let arr = randomArray(50, 5, 500);

console.log(bubbleSort(arr));
console.log(heapSort(arr));
console.log(insertionSort(arr));
console.log(mergeSort(arr));
console.log(quickSortH(arr, 0, arr.length-1));
console.log(quickSortL(arr, 0, arr.length-1));
console.log(selectionSort(arr));