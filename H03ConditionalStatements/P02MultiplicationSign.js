//Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
//Use a sequence of if operators.

console.log(getSign([0, 5, -5]));
console.log(getSign([5, 5, -5]));
console.log(getSign([-5, 5, -5]));

function getSign(numbers) {
    var count = 0;

    for(var i = 0, size = numbers.length; i < size; i += 1) {
        if (numbers[i]) {
            if(numbers[i] * -1 > numbers[i]) {
                count += 1;
            }
        } else {
            return 0;
        }
    }
    return (count % 2) ? '-' : '+';
}