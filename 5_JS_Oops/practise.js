class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;  // Underscore = convention for "has getter/setter"
  }
  
  // GETTER - control HOW to read
  get salary() {
    return `$${this._salary}`;
  }
  
  // SETTER - control HOW to write
  set salary(value) {
    if (value < 0) {
      console.error("❌ Invalid salary! Must be positive.");
      return;
    }
    this._salary = value;
  }
}

let emp = new Employee("Alice", 50000);

// Access like property (NO parentheses!)
console.log(emp.salary);  // "$50000"

// Set like property
emp.salary = 60000;  // ✅ Uses setter
console.log(emp.salary);  // "$60000"

// Validation works!
emp.salary = -100;