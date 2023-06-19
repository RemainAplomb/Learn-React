class Cylinder {
    // Initialization
    constructor(cylinderRadius, cylinderHeight) {
        this.radius = cylinderRadius;
        this.height = cylinderHeight;
    }

    // Calculation
    getVolume() {
        // Use the formula V = πr^2h
        const cylinderVolume = Math.PI * Math.pow(this.radius, 2) * this.height;

        // Return rounded volume
        return cylinderVolume.toFixed(4);
    }
}

// New instance with radius 8 and height 10
const myCylinder = new Cylinder(8, 10);

// Use getVolume function
const volumeResult = myCylinder.getVolume();

console.log(`Cylinder Volume: ${volumeResult}`);

// (base) PS E:\assessment> node q6.js
// Cylinder Volume: 2010.6193