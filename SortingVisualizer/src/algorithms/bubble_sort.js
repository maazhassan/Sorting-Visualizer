'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Bubble sort algorithm
export async function bubbleSort(arr) {
    const n = arr.length - 1;
    const delay = 4 + (1.35**(-(n-25)));
    let swap;
    let i = -1;

    do {
        swap = false;
        i++;
        for (let j = 0; j < n-i; j++) {
            arr[j][1] = "green";
            arr[j+1][1] = "green";

            clear();
            displayArray(arr);
            await sleep(delay);

            if (arr[j][0] > arr[j+1][0]) {
                swap = true;

                arr[j][1] = "red";
                arr[j+1][1] = "red";

                clear();
                displayArray(arr);
                await sleep(delay);

                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;

                clear();
                displayArray(arr);
                await sleep(delay);

                arr[j][1] = "green";
                arr[j+1][1] = "green";

                clear();
                displayArray(arr);
                await sleep(delay);
            }
            arr[j][1] = "gray";
            arr[j+1][1] = "gray";
        }
        arr[n-i][1] = "purple";
    }
    while (swap);

    clear();
    return arr;
}
