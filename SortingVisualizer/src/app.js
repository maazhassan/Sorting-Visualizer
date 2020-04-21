'use strict';
import {bubbleSort} from "./algorithms/bubble_sort.js";
import {heapSort} from "./algorithms/heap_sort.js";
import {insertionSort} from "./algorithms/insertion_sort.js";
import {mergeSort} from "./algorithms/merge_sort.js";
import {quickSortH} from "./algorithms/quick_sort_hoare.js";
import {quickSortL} from "./algorithms/quick_sort_lomuto.js";
import {selectionSort} from "./algorithms/selection_sort.js";

//Generate a random number in a range
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Generate a random array
function randomArray(size, min, max) {
    let array = [];
    for (let i = 0; i < size; i++) {
        let innerArray = [];
        innerArray.push(randomRange(min, max));
        innerArray.push("gray");
        array.push(innerArray);
    }
    return array;
}

//SVG element in index.html
let svg = document.getElementById("rects");

//Function that displays the rectangles for the array elements
export function displayArray(arr) {
    let gap = 1.04**(-(arr.length-50)) + 2;
    let maxWidth = (40/19)*arr.length + (15000/19);
    svg.setAttribute("width", maxWidth - gap);
    let width = (maxWidth/arr.length) - gap;
    for (let i = 0; i < arr.length; i++) {
        let rec = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rec.setAttribute("x", i*(width + gap))
        rec.setAttribute("width", width);
        rec.setAttribute("height", arr[i][0]);
        rec.setAttribute("stroke-width", "0.3");
        rec.setAttribute("stroke", "white");
        rec.setAttribute("class", arr[i][1]);
        svg.appendChild(rec);
    }
}

//Function to clear
export function clear() {
    let rectsList = svg.querySelectorAll("rect");
    rectsList.forEach(r => {
        svg.removeChild(r);
    });
}

//Sleep function to cause delay
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Initial array/draw
let arr = randomArray(50, 5, 600);
displayArray(arr);

//Slider element in index.html
let slider = document.getElementById("myRange");
slider.step = "5";

//Updating rects when slider moves
slider.oninput = function() {
    clear();
    arr = randomArray(this.value, 5, 600);
    displayArray(arr);
}

//Button elements from index.html
let bubbleSortButton = document.getElementById("bubbleSort");
let heapSortButton = document.getElementById("heapSort");
let insertionSortButton = document.getElementById("insertionSort");
let mergeSortButton = document.getElementById("mergeSort");
let quickSortHButton = document.getElementById("quickSortH");
let quickSortLButton = document.getElementById("quickSortL");
let selectionSortButton = document.getElementById("selectionSort");
let sort = document.getElementById("sortButton");

let label = document.getElementById("algo-name");

//Default algorithm
let selectedAlgo = bubbleSort; 

//Event handlers for algorithm buttons
bubbleSortButton.onclick = function() {
    selectedAlgo = bubbleSort;
    label.innerHTML = "Bubble Sort";
}

heapSortButton.onclick = function() {
    selectedAlgo = heapSort;
    label.innerHTML = "Heap Sort";
}

insertionSortButton.onclick = function() {
    selectedAlgo = insertionSort;
    label.innerHTML = "Insertion Sort";
}

mergeSortButton.onclick = function() {
    selectedAlgo = mergeSort;
    label.innerHTML = "Merge Sort";
}

quickSortHButton.onclick = function() {
    selectedAlgo = quickSortH;
    label.innerHTML = "Quick Sort (Hoare)";
}

quickSortLButton.onclick = function() {
    selectedAlgo = quickSortL;
    label.innerHTML = "Quick Sort (Lomuto)";
}

selectionSortButton.onclick = function() {
    selectedAlgo = selectionSort;
    label.innerHTML = "Selection Sort";
}

//Event handler for sort button
sort.onclick = async function() {
    for (let i = 0; i < arr.length; i++) {
        arr[i][1] = "gray";
    }

    if (selectedAlgo === quickSortH || selectedAlgo === quickSortL) {
        arr = await selectedAlgo(arr, 0, arr.length-1, arr.length);
    }
    else {
        arr = await selectedAlgo(arr);
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i][1] = "green";
    }

    displayArray(arr);
    await sleep(750);

    for (let i = 0; i < arr.length; i++) {
        arr[i][1] = "lightblue";
    }

    clear();
    displayArray(arr);
}