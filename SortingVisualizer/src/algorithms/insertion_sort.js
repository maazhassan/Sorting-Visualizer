'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Insertion sort algorithm
export async function insertionSort(arr) {
    const len = arr.length;
    const delay = 10 + (1.35**(-(len-26)));
    //const delay = 1000;

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

                arr[j][1] = "gray";
                j--;
            }
            arr[j][1] = "gray";
        }
        arr[i][1] = "gray";
    }
    clear();
    return arr;
}
