// Write a script that prints all the numbers from 1 to N

printToN(5);

function printToN(n) {
    var change = n < 1 ? -1 : 1,
        tmp = 1;

    while (true) {
        console.log(tmp);

        if (tmp === n) {
            break;
        }

        tmp += change;
    }
}
