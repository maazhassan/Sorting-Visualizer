'use strict';

//Recursive function
export function mergeSort(arr) {
    //Length of array
    const len = arr.length;

    //Base case
    if (len <= 1) {
        return arr;
    }

    //Middle of array
    const middle = Math.floor(len/2);
    
    //Split array into two smaller arays
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    //Recursively sort array
    return merge(mergeSort(left), mergeSort(right));
}

//Merge function
function merge(left, right) {
    //Variables
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    
    //While loop that decides which value to push to the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } 
        else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    //Concatenate the last value (will be in EITHER right or left array)
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
