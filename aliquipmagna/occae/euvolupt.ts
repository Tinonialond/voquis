class Example {
  exp: number;

  constructor(exp: number) {
    this.exp = exp;
  }

  // Optimizes the value of exp by ensuring it's a positive integer
  optimizeExp(): void {
    this.exp = Math.abs(Math.round(this.exp));
  }
}

// Usage
const exampleInstance = new Example(-3.7);
exampleInstance.optimizeExp();
console.log(exampleInstance.exp); // Output will be 4
