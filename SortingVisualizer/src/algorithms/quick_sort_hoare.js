'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Recursive function
export async function quickSortH(arr, start, end) {
    const delay = 4 + (1.2**(-(arr.length-40)));

    //Base case
    if (start >= end) {
        for (let i = 0; i <= end; i++) {
            arr[i][1] = "lightblue";
        }
        return;
    }

    //Partition the array and return index of pivot value
    let index = await partition(arr, start, end, delay);

    //Recursively quick sort both partitions with new pivot values
    await quickSortH(arr, start, index);
    await quickSortH(arr, index + 1, end);

    //Return sorted array at the end
    clear();
    return arr;
}

//Partition function
async function partition(arr, start, end, delay) {
    let pivotIndex = Math.floor((start + end) / 2)
    let pivotValue = arr[pivotIndex][0];
    let i = start - 1;
    let j = end + 1;

    arr[Math.floor((start + end) / 2)][1] = "green";

    while (true) {
        do {
            if (i > -1 && i != pivotIndex) arr[i][1] = "gray";
            i += 1;
            arr[i][1] = "red";
            clear();
            displayArray(arr);
            await sleep(delay);
        }
        while (arr[i][0] < pivotValue);

        arr[i][1] = "yellow";
        clear();
        displayArray(arr);
        await sleep(delay);

        do {
            if (j < arr.length && j != pivotIndex) arr[j][1] = "gray";
            j -= 1;
            arr[j][1] = "red";
            clear();
            displayArray(arr);
            await sleep(delay);
        }
        while (arr[j][0] > pivotValue);

        arr[j][1] = "yellow";
        clear();
        displayArray(arr);
        await sleep(delay);

        if (i >= j) {
            arr[pivotIndex][1] = "gray";
            return j;
        } 

        if (i == pivotIndex) {
            swap(arr, i, j);
            pivotIndex = j;
            arr[j][1] = "green";
        }
        else if (j == pivotIndex) {
            swap(arr, i, j);
            pivotIndex = i;
            arr[i][1] = "green";
        }
        else swap(arr, i, j);
        
        clear();
        displayArray(arr);
        await sleep(delay);
    }
}

//Swap function
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
