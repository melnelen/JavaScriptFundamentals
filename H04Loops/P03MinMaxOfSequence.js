// Write a script that finds the max and min number from a sequence of numbers

var numbers = [5, 15, -55, 555],
    minInd = 0,
    maxInd = 0;

for (var ind = 0, size = numbers.length; ind < size; ind +=1) {
    if (numbers[maxInd] < numbers[ind]) maxInd = ind;
    if (numbers[ind] < numbers[minInd]) minInd = ind;
}

console.log('min: ' + numbers[minInd]);
console.log('max: ' + numbers[maxInd]);