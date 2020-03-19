'use strict';

//Generate a random number in a range
let randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Generate a random array
function randomArray(size, min, max) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(randomRange(min, max));
    }
    return array;
}

let a = randomArray(50, 5, 500);
console.log(a);

//Bubble sort algorithm
function bubbleSort(arr) {
    let n = arr.length - 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i; j++) {
            if (arr[j] > arr[j+1]) {
                let num = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = num;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(a));