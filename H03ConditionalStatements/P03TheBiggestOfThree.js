//Write a script that finds the biggest of three numbers.
//Use nested if statements.

var numbers = [-5, 15, 10];

console.log(getBiggest(numbers[0], numbers[1], numbers[2]));

function getBiggest(a, b, c){
    if (a > b) {
        if (a > c) {
            return a;
        }
        return c;
    }
    if (c > b) {
        return c;
    }
    return b;
}