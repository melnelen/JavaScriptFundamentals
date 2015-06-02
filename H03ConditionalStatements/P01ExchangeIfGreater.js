//Write an if statement that takes two double variables a and b and exchanges their values
//if the first one is greater than the second.
//As a result print the values a and b, separated by a space.

console.log(exchangeIfFirstGreater(10, 5));

function exchangeIfFirstGreater(a, b) {
    if (a > b) {
        //swap numbers
        a = a + b;
        b = a - b;
        a = a - b;
    }
    return (a + " " + b);
}