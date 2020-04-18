'use strict';

//Recursive function
export function quickSortH(arr, start, end) {
    //Base case
    if (start >= end) return;

    //Partition the array and return index of pivot value
    let index = partition(arr, start, end);

    //Recursively quick sort both partitions with new pivot values
    quickSortH(arr, start, index);
    quickSortH(arr, index + 1, end);

    //Return sorted array at the end
    return arr;
}

//Partition function
function partition(arr, start, end) {
    let pivotValue = arr[Math.floor((start + end) / 2)];
    let i = start - 1;
    let j = end + 1;

    while (true) {
        do {
            i += 1;
        }
        while (arr[i] < pivotValue);
        do {
            j -= 1;
        }
        while (arr[j] > pivotValue);

        if (i >= j) return j;
        swap(arr, i, j);
    }
}

//Swap function
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
