//Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3)
//and out of the rectangle R(top=1, left=-1, width=6, height=2).

function checkIfInCircle(x, y) {
    return Math.pow((x - centerX), 2) + Math.pow((y - centerY), 2) < Math.pow(radius, 2);
}

function checkIfOutsideRectangle(x, y) {
    return !((x >= -1 && x <= -1 + 6) && (y <= 1 && y >= 1 - 2));
}
