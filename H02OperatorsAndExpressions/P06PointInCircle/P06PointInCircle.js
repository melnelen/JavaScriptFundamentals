//Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5).
//{0,0} is the centre and 5 is the radius

function Calculate() {
    var x = document.getElementById('x').value,
        y = document.getElementById('y').value,
        r = 5,
        myResult;
    if (((x * x) + (y * y)) <= (r * r)) {
        myResult = 'This point is inside the circle.';
    }
    else {
        myResult = 'This point is somewhere else.';
    }

    document.getElementById('out').innerHTML = myResult;
}