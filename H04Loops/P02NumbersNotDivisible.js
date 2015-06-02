// Write a script that prints all the numbers from 1 to
// N, that are not divisible by 3 and 7 at the same time

var n = 100;

for (var number = 1; number <= n; number +=1) {
    // 3 and 7 are both prime, so we can check only the remainder after division by their product
    if (number % 21) {
        console.log(number);
    }
}
