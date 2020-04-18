'use strict';

//Bubble sort algorithm
export const bubbleSort = (arr) => {
    const n = arr.length - 1;

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
