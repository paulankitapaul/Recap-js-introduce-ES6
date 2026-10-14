// we can't reassign the value of const for example
// const sum = 10;
// sum = sum +10;
// console.log(sum); It is the wrong approach
// but we can reassign the value of let
let sum = 10;
sum = sum + 10;
console.log(sum);
// but using const we can reassign the properties value
const employee = {
    name: 'Ankita paul',
    id: '20202031'
}
employee.name = 'ankit'
console.log(employee);
 
