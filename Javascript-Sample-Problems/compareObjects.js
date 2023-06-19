function compareObjects(obj1, obj2) {
    // Get the keys, we will use it for comparison
    const keys = Object.keys(obj2);

    // Checking
    for (let key of keys) {
        if (!(key in obj1) || obj1[key] !== obj2[key]) {
            // If any property is missing or has a different value, 
            // the objects are considered not equivalent, and false 
            // is returned
            return false;
        }
    }

    return true;
}

// Inputs
const sample_obj1 = { name: 'Sally', age: 18, hobby: 'Reading' };
const sample_obj2 = { name: 'Not sally', age: 21, hobby: 'Boxing' };
const sample_obj3 = { name: 'Sally', age: 18, hobby: 'Reading' };

console.log(compareObjects(sample_obj1, sample_obj2));
console.log(compareObjects(sample_obj1, sample_obj3));
console.log(compareObjects(sample_obj2, sample_obj3));

// Result
// (base) PS E:\assessment> node q4.js
// false
// true
// false