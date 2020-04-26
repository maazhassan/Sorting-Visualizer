'use strict';
import {displayArray, clear, sleep} from "../app.js";

//Initial merge sort call
export async function mergeSortInit(arr) {
    let indexedArray = [];
    for (let i = 0; i < arr.length; i++) {
        let innerArray = [];
        innerArray.push(arr[i][0]);
        innerArray.push(i);
        indexedArray.push(innerArray);
    }

    return await mergeSort(indexedArray, arr);
}

//Recursive function
async function mergeSort(arr, ogArr) {
    //Length of array
    const len = arr.length;

    //Base case
    if (len <= 1) {
        return arr;
    }

    //Middle of array
    const middle = Math.floor(len/2);
    
    //Split array into two smaller arrays
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    //Recursively sort array
    clear();
    return await merge(await mergeSort(left, ogArr), await mergeSort(right, ogArr), ogArr);
}

//Merge function
async function merge(left, right, ogArr) {
    const delay = 4 + (1.2**(-(ogArr.length-40)));
    const ogMid = Math.floor(ogArr.length/2)

    //Variables
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    
    //While loop that decides which value to push to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        ogArr[left[leftIndex][1]][1] = "green";
        ogArr[right[rightIndex][1]][1] = "green";
        clear();
        displayArray(ogArr);
        await sleep(delay);

        if (left[leftIndex][0] < right[rightIndex][0]) {
            resultArray.push(left[leftIndex]);

            if (left.length == ogMid) ogArr[left[leftIndex][1]][1] = "lightblue";
            else ogArr[left[leftIndex][1]][1] = "gray";
            ogArr[right[rightIndex][1]][1] = "gray";

            leftIndex++; // move left array cursor
        } 
        else {
            resultArray.push(right[rightIndex]);

            ogArr[left[leftIndex][1]][1] = "red";
            ogArr[right[rightIndex][1]][1] = "red";
            clear();
            displayArray(ogArr);
            await sleep(delay);

            let newIndex = left[leftIndex][1];
            arrayMove(ogArr, right[rightIndex][1], newIndex);
            right[rightIndex][1] = newIndex;

            for (let i = leftIndex; i < left.length; i++) {
                left[i][1] += 1;
            }

            clear();
            displayArray(ogArr);
            await sleep(delay);

            ogArr[left[leftIndex][1]][1] = "green";
            ogArr[right[rightIndex][1]][1] = "green";
            clear();
            displayArray(ogArr);
            await sleep(delay);

            ogArr[left[leftIndex][1]][1] = "gray";
            if (left.length == ogMid) ogArr[right[rightIndex][1]][1] = "lightblue";
            else ogArr[right[rightIndex][1]][1] = "gray";

            rightIndex++; // move right array cursor
        }
    }

    //Concatenate the last value (will be in EITHER right or left array)
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

//Move function
function arrayMove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}