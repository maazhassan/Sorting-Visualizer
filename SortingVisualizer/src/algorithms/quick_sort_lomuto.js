'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Recursive function
export async function quickSortL(arr, start, end, ogLen) {
    const delay = 10 + (1.2**(-(ogLen-40)));

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
    await quickSortL(arr, start, index - 1, ogLen);
    await quickSortL(arr, index + 1, end, ogLen);

    //Return sorted array at the end
    clear();
    displayArray(arr);
    return arr;
}

//Partition function
async function partition(arr, start, end, delay) {
    //Get pivot index and value. Index is always the start, value is always the end.
    let pivotIndex = start;
    let pivotValue = arr[end][0];

    arr[end][1] = "green";
    arr[pivotIndex][1] = "yellow";
    clear();
    displayArray(arr);
    await sleep(delay);

    /*
    Loop through the array. If the value is less than the
    pivot value, swap it and the value at the pivot index.
    Then, move the pivot index forward one. The pivot index
    is where the pivot value will eventually end up.
    */
    for (let i = start; i < end; i++) {
        arr[i][1] = "red";
        clear();
        displayArray(arr);
        if (i === pivotIndex) {
            await sleep(delay/2);
            arr[i][1] = "yellow";
            clear();
            displayArray(arr);
            await sleep(delay/2);
        }
        else await sleep(delay);

        if (arr[i][0] < pivotValue) {
            swap(arr, i, pivotIndex);
            arr[pivotIndex][1] = "gray";
            pivotIndex++;
        }
        
        arr[pivotIndex][1] = "yellow";
        if (i != pivotIndex) arr[i][1] = "gray";
    }

    swap(arr, pivotIndex, end);

    arr[pivotIndex][1] = "lightblue";
    arr[end][1] = "gray";
    clear();
    displayArray(arr);
    await sleep(delay);

    return pivotIndex;
}

//Swap function
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
