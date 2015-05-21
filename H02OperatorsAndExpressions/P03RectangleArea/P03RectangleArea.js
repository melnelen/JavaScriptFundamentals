//Write an expression that calculates rectangle’s area by given width and height.

function Calculate()
{
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var area = width * height;
    document.getElementById('out').innerHTML = 'The area of this rectangle is ' + area;
}