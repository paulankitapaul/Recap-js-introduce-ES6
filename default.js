// default value
function add(number1,number2=0){
    const add = number1 + number2
    return add;
}
const addition = add(20);
console.log(addition);
// another example
function sub(number1=99,number2=90){
    const sub = number1 - number2;
    console.log(sub);
}
sub();