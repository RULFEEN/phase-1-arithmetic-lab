function multiply(num1, num2){
    return num1 * num2;
};
let num1 = 31;
let num2 = 2;
multiply = 31 * 2;
console.log(multiply);

function random(){
    let Number = Math.ceil(Math.random() * 10);
    return Number;
};
random = random();
console.log(random);
console.log(Number.isInteger(random));

function mod(num3, num4){
    return num3 % num4;
};
let num3 = 19;
let num4 = 5;
mod = 19 % 5;
console.log(mod);

function max(){
    return Math.max(16, 4, 8, 12, 20)
};
max = max();
console.log(max);