function insertionSort(arrayToSort) {
    for (let currentIndex = 1; currentIndex < arrayToSort.length; currentIndex++) {
        let currentElement = arrayToSort[currentIndex];
        let previousIndex = currentIndex - 1;

        // Compare the current element with the previous elements
        while (previousIndex >= 0 && arrayToSort[previousIndex] > currentElement) {
            // Shift elements with higher value to the right
            arrayToSort[previousIndex + 1] = arrayToSort[previousIndex];
            previousIndex--;
        }

        // Insert current element
        arrayToSort[previousIndex + 1] = currentElement;
    }

    return arrayToSort;
}


// Specify our array
const inputArray = [11, 8, 2, 1, 9, 4];

// The result
const result = insertionSort(inputArray);

console.log(result);

// Result:
// (base) PS E:\assessment> node q2.js
// [ 1, 2, 4, 8, 9, 11 ]

