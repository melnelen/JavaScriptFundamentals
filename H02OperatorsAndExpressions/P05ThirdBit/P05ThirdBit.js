//Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
//The bits are counted from right to left, starting from bit #0.
//The result of the expression should be either 1 or 0.

function Calculate() {
    var myNumber = document.getElementById('in').value,
    myResult;
    if (((myNumber >> 3) & 1) == 1){
        myResult = 'The third bit in this number is 1';
    }
    else{
        myResult = "The third bit in this number is 0";
    }
    document.getElementById('out').innerHTML = myResult;
}