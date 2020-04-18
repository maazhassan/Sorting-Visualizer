'use strict';
import { randomArray } from "../app.js";

//Generate array
let a = randomArray(50, 5, 500);
console.log(a);

//Heap sort main function
//Adapted from https://levelup.gitconnected.com/heapsort-for-javascript-newbies-598d25477d55
function heapSort(arr) {
    //Information about array
    let len = arr.length;
    //This formula always gives the index of the last parent
    let i = Math.floor(len / 2 - 1);
    let k = len - 1;    //Index of the last element

    //Initial heapify
    while (i >= 0) {
        heapify(arr, len, i);
        i--;
    }

    //Switch first (largest) element with last
    //Then heapify again, excluding the last element
    while (k >= 0) {
        [arr[0], arr[k]] = [arr[k], arr[0]];
        heapify(arr, k, 0);
        k--;
    }
    return arr;
}

//Recursive heapify function
//i is the index of the parent we are heapifying
function heapify(arr, len, i) {
    //Initially assume the parent is the largest
    let largest = i;
    //This formula always gives the index of the left element
    let left = i * 2 + 1;
    let right = left + 1;

    //Check if the left element is bigger than the parent
    if (left < len && arr[left] > arr[largest]) largest = left;

    //Check if the right element is bigger than the parent
    if (right < len && arr[right] > arr[largest]) largest = right;

    //If the largest element is not the parent, switch the parent and largest element
    //Then call heapify again to ensure the rest of the array is still in order
    //largest refers to the index of largest element BEFORE it was switched
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, len, largest);
    }
    return arr;
}

console.time("sort");
console.log(heapSort(a));
console.timeEnd("sort");