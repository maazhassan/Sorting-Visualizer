'use strict';

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArray(size, min, max) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(randomRange(min, max));
    }
    return array;
}

let a = randomArray(30, 3, 20);
console.log(a);