var personWithAddress = {
    name: "John",
    age: 30,
    city: "New York",
    zipCode: "10001",
};
console.log(personWithAddress);
//2 Guards
function printLength(value) {
    if (typeof value === "string") {
        console.log("Length of string: ".concat(value.length));
    }
    else if (typeof value === "number") {
        console.log("Value is a number: ".concat(value.toString().length));
    }
    else {
        console.log("Unsupported value type.");
    }
}
printLength("Hello, TypeScript!"); // Output: Length of string: 19
printLength(42); // Output: Value is a number: 2
//3 Assertion
var input = document.querySelector("input");
var value1 = input.value;
console.log(value1);
var student = {};
// const student = <Student>{};
student.name = "Abdulaziz";
student.code = 12345;
var x = "hello";
console.log(x.length);
console.log(x.length);
//4
