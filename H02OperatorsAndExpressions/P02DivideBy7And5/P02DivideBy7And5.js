//Write a boolean expression that checks for given integer
//if it can be divided (without remainder) by 7 and 5 in the same time.

function Calculate()
{
    var myNumber = document.getElementById('in').value;
    var myResult;
    if ((myNumber != 0) && (myNumber % 5 == 0) && (myNumber % 7 == 0))
    {
        myResult = 'This number can be divided by 5 and 7 at the same time.';
    }
    else
    {
        myResult = 'This number s\u002Acks!';
    }

    document.getElementById('out').innerHTML = myResult;
}