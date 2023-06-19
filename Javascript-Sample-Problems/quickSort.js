function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return [...sortedLeft, pivot, ...sortedRight];
}

// Specify our array
const inputArray = [11, 8, 2, 1, 9, 4];

// The result
const result = quickSort(inputArray);

console.log(result);

// This will result to:
// (base) PS E:\assessment> node q1.js
// [ 1, 2, 4, 8, 9, 11 ]
