'use strict';

//Generate a random number in a range
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Generate a random array
export function randomArray(size, min, max) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(randomRange(min, max));
    }
    return array;
}