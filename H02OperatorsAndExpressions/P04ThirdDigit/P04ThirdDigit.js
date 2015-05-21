//Write an expression that checks for given integer
//if its third digit (right-to-left) is 7.

function Calculate()
{
    var myNumber = document.getElementById('in').value;
    var myResult;
    if (Math.floor(myNumber / 100) % 10 === 7)
    {
        myResult = 'The third digit from right-to-left in this number is 7.';
    }
    else
    {
        myResult = 'This number is not reliable ;p';
    }

    document.getElementById('out').innerHTML = myResult;
}