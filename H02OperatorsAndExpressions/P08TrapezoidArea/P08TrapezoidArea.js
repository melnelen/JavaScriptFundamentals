// Write an expression that calculates trapezoid's area
// by given sides a and b and height h.

function Calculate() {
    var a, b, h, myResult;

    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    h = document.getElementById('h').value;
    myResult = ((+a + +b) / 2) * +h ;

    document.getElementById('out').innerHTML = myResult;
}