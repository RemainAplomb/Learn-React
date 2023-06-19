function customMergeSort(arrayToSort) {
    if (arrayToSort.length <= 1) {
        return arrayToSort;
    }

    // Split into two
    const middle = Math.floor(arrayToSort.length / 2);
    const leftArray = arrayToSort.slice(0, middle);
    const rightArray = arrayToSort.slice(middle);

    // Recursive sorting
    const sortedLeftArray = customMergeSort(leftArray);
    const sortedRightArray = customMergeSort(rightArray);

    // Merging
    return customMerge(sortedLeftArray, sortedRightArray);
}

function customMerge(leftArray, rightArray) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements and merge
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            mergedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    // If there are any remaining elements from the left, append them
    while (leftIndex < leftArray.length) {
        mergedArray.push(leftArray[leftIndex]);
        leftIndex++;
    }

    // If there are any remaining elements from the right, append them
    while (rightIndex < rightArray.length) {
        mergedArray.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return mergedArray;
}

// input
const inputArray = [11, 8, 2, 1, 9, 4];

// result
const result = customMergeSort(inputArray);

console.log(result);

// Result:
// (base) PS E:\assessment> node q3.js
// [ 1, 2, 4, 8, 9, 11 ]