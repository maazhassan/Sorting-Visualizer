'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Selection sort algorithm
export async function selectionSort(arr) {
    const len = arr.length;
    const delay = 4 + (1.2**(-(arr.length-40)));

    for (let i = 0; i < len; i++) {
        let min = i;
        let sorted = true;

        arr[i][1] = "green";
        clear();
        displayArray(arr);
        await sleep(delay);

        for (let j = i + 1; j < len; j++) {
            if (arr[j][0] < arr[j-1][0]) sorted = false;

            arr[j][1] = "red";
            clear();
            displayArray(arr);
            await sleep(delay);

            if (arr[min][0] > arr[j][0]) {
                arr[min][1] = "gray";
                min = j;
                arr[j][1] = "green";
                clear();
                displayArray(arr);
                await sleep(delay);
            }
            else {
                arr[j][1] = "gray";
            }
        }

        if (sorted) break;

        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }

        arr[i][1] = "lightblue";
        clear();
        displayArray(arr);
        await sleep(delay);

    }
    clear();
    return arr;
}

