//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.

console.log(getBiggest(5, -5, 25, 0, 10));

function getBiggest(a, b, c, d, e){
    var biggest = Math.max();

    if(a > biggest){
        biggest = a;
    }
    if(b > biggest){
        biggest = b;
    }
    if(c > biggest){
        biggest = c;
    }
    if(d > biggest){
        biggest = d;
    }
    if(e > biggest){
        biggest = e;
    }

    return biggest;
}