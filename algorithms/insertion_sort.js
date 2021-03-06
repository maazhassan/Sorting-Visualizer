'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Insertion sort algorithm
export async function insertionSort(arr) {
    const len = arr.length;
    const delay = 4 + (1.2**(-(arr.length-40)));

    for (let i = 1; i < len; i++) {
        arr[i][1] = "green";
        clear();
        displayArray(arr);
        await sleep(delay);
        
        let j = i - 1;
        if (arr[j][0] > arr[i][0]) {
            arr[j][1] = "red";
            clear();
            displayArray(arr);
            await sleep(delay+5);

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            arr[i][1] = "green";
            arr[j][1] = "red";
            clear();
            displayArray(arr);
            await sleep(delay+5);

            while (j > 0 && arr[j-1][0] > arr[j][0]) {
                arr[j-1][1] = "red";
                clear();
                displayArray(arr);
                await sleep(delay);

                temp = arr[j];
                arr[j] = arr[j-1]
                arr[j-1] = temp;
                clear();
                displayArray(arr);
                await sleep(delay);

                arr[j][1] = "lightblue";
                j--;
            }
            arr[j][1] = "lightblue";
        }
        arr[i][1] = "lightblue";
        arr[i-1][1] = "lightblue";
    }
    clear();
    return arr;
}
