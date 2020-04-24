'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Heap sort main function
//Adapted from https://levelup.gitconnected.com/heapsort-for-javascript-newbies-598d25477d55
export async function heapSort(arr) {
    //Information about array
    let len = arr.length;
    const delay = 4 + (1.2**(-(len-40)));

    //This formula always gives the index of the last parent
    let i = Math.floor(len / 2 - 1);
    let k = len - 1;    //Index of the last element

    //Initial heapify
    while (i >= 0) {
        await heapify(arr, len, i, delay);
        i--;
    }

    //Switch first (largest) element with last
    //Then heapify again, excluding the last element
    while (k >= 0) {
        arr[0][1] = "red";
        arr[k][1] = "red";
        clear();
        displayArray(arr);
        await sleep(delay);

        [arr[0], arr[k]] = [arr[k], arr[0]];
        clear()
        displayArray(arr);
        await sleep(delay);

        arr[0][1] = "gray";
        arr[k][1] = "lightblue";

        await heapify(arr, k, 0, delay);
        k--;
    }
    clear();
    return arr;
}

//Recursive heapify function
//i is the index of the parent we are heapifying
async function heapify(arr, len, i, delay) {
    //Initially assume the parent is the largest
    let largest = i;
    //This formula always gives the index of the left element
    let left = i * 2 + 1;
    let right = left + 1;

    arr[i][1] = "green";
    if (left < len) arr[left][1] = "green";
    if (right < len) arr[right][1] = "green";

    clear();
    displayArray(arr);
    await sleep(delay);

    //Check if the left element is bigger than the parent
    if (left < len && arr[left][0] > arr[largest][0]) largest = left;

    //Check if the right element is bigger than the parent
    if (right < len && arr[right][0] > arr[largest][0]) largest = right;

    //If the largest element is not the parent, switch the parent and largest element
    //Then call heapify again to ensure the rest of the array is still in order
    //largest refers to the index of largest element BEFORE it was switched
    if (largest != i) {
        arr[largest][1] = "red";
        arr[i][1] = "red";
        clear();
        displayArray(arr);
        await sleep(delay);

        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        clear();
        displayArray(arr);
        await sleep(delay);

        arr[largest][1] = "green";
        arr[i][1] = "green";
        clear();
        displayArray(arr);
        await sleep(delay);

        arr[i][1] = "gray";
        if (left < len) arr[left][1] = "gray";
        if (right < len) arr[right][1] = "gray";

        await heapify(arr, len, largest, delay);
    }

    arr[i][1] = "gray";
    if (left < len) arr[left][1] = "gray";
    if (right < len) arr[right][1] = "gray";

    return arr;
}
