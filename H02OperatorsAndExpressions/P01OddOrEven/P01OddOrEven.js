//Write an expression that checks if given integer is odd or even.

function Calculate()
{
    var myNumber = document.getElementById('in').value;
    var myResult;
    if (myNumber % 2 === 0)
    {
        myResult = 'This number is even.';
    }
    else
    {
        myResult = 'This number is odd.';
    }

    document.getElementById('out').innerHTML = myResult;
}