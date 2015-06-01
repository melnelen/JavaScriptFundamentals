//Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

function Calculate() {
    var myNumber = document.getElementById('in').value,
        divider = 2,
        maxDivider = Math.sqrt(myNumber),
        isPrime = myNumber >= 2,
        myResult;

    while (isPrime && divider <= maxDivider) {
        if (!(myNumber % divider)) {
            isPrime = false;
            break;
        }
        divider += 1;
    }

    if (isPrime) {
        myResult = 'This is a prime number.';
    } else {
        myResult = 'We don\'t need this number.';
    }

    document.getElementById('out').innerHTML = myResult;
}
