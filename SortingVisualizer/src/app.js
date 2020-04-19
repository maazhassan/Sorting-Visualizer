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
        array.push(randomRange(min, max));
    }
    return array;
}

//SVG element in index.html
let svg = document.getElementById("rects");

//Function that displays the rectangles for the array elements
function displayArray(arr) {
    let width = 500/arr.length;
    for (let i = 0; i < arr.length; i++) {
        let rec = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rec.setAttribute("x", i*width)
        rec.setAttribute("width", width);
        rec.setAttribute("height", arr[i]);
        rec.setAttribute("style", "fill:rgb(0, 0, 0)");
        rec.setAttribute("stroke-width", "0.3");
        rec.setAttribute("stroke", "white");
        svg.appendChild(rec);
    }
}

//Function to clear
function clear() {
    let rectsList = svg.querySelectorAll("rect");
    rectsList.forEach(r => {
        svg.removeChild(r);
    });
}

//Initial array/draw
let arr = randomArray(50, 5, 500);
displayArray(arr);

//Slider element in index.html
let slider = document.getElementById("myRange");
slider.step = "5";

//Updating rects when slider moves
slider.oninput = function() {
    clear();
    arr = randomArray(this.value, 5, 500);
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
sort.onclick = function() {
    clear();
    arr = (selectedAlgo === quickSortH || selectedAlgo === quickSortL) ? selectedAlgo(arr, 0, arr.length-1) : selectedAlgo(arr);
    displayArray(arr);
}