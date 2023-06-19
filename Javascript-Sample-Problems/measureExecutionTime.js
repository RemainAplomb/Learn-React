function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Measure execution time of a given function
function measureExecutionTime(func, ...args) {
    // Timer Start
    const start = performance.now();

    // Execute the function
    func(...args);

    // Timer Stop
    const end = performance.now();

    // Get the difference
    const executionTime = end - start;

    // Return Result
    return executionTime;
}

const n = 8;
const executionTime = measureExecutionTime(fibonacci, n);
console.log(`Execution time of fibonacci(${n}): ${executionTime} milliseconds`);

// Result:
// (base) PS E:\assessment> node q5.js
// Execution time of fibonacci(8): 0.026900000870227814 milliseconds