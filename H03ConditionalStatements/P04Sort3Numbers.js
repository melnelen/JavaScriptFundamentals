//Sort 3 real values in descending order.
//Use nested if statements.
//Note: Don’t use arrays and the built-in sorting functionality.

console.log(sortThree(-5, 15, 10));

function sortThree(a, b, c) {
    var sorted = [];

    if (a >= b) {
        if (b >= c) {
            sorted.push(a, b, c);
        } else if (c > a) {
            sorted.push(c, a, b);
        } else {
            sorted.push(a, c, b);
        }
    } else {
        if (b >= c) {
            if (c >= a) {
                sorted.push(b, c, a);
            } else {
                sorted.push(b, a, c);
            }
        } else {
            sorted.push(c, b, a);
        }
    }

    return sorted.join(' ');
}