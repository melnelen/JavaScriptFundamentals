 //P01Assign all the possible JavaScript literals to different variables.

 //Primitive types:
 //Primitive values define immutable values (values, which are incapable of being changed).

 //A variable that has not been assigned a value has the value undefined.
 var myUndefined;

 //The Null type has exactly one value: null.
 var myNull = null;

 //Boolean represents a logical entity and can have two values: true, and false.
 var myBool = true;

 //According to the ECMAScript standard, there is only one number type:
 //the double-precision 64-bit binary format IEEE 754 value (number between -(253 -1) and 253 -1).
 //There is no specific type for integers.
 //In fact the number type has only one integer that has two representations: 0 represented as -0 and +0.
 //In addition to being able to represent floating-point numbers, the number type has three symbolic values:
 //+Infinity, -Infinity, and NaN (not-a-number).
 var myNumber = 1.23;

 //In JavaScript, a String is one of the primitive values and the String object is a wrapper around a String primitive.
 //the primitive type:
 var myString = 'Marry had a little lamb';
 //the string object:
 var myStingObject = new String(myString);

 //A symbol is a unique and immutable data type and may be used as an identifier for object properties.
 //This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.
 //At this point it only works on the latest versions of Chrome and Firefox.
 //var mySymbol = Symbol('abc');

 //Objects:
 //In JavaScript, objects can be seen as a collection of properties.
 //A JavaScript object is a mapping between keys and values.
 var myObjectEmpty = new Object();
 var myObjectDoggy =
 {
     animal: 'Doggy',
     name: 'Lucky',
     ears: 2,
     legs: 3,
     color: 'dirty'
 };

 //Functions are regular objects with the additional capability of being callable.
 var myFunction = new Function('a', 'b', 'return a + b');

 //The Number JavaScript object is a wrapper object allowing you to work with numerical values.
 //It can be used to convert numeric strings to numbers
 var myNumberValid = Number('123');

 //If the argument cannot be converted into a number, it returns NaN.
 var myNumberNotValid = Number('abc');

 //It can also be used to assign specific values
 var myNumberMax = Number.MAX_VALUE;

 //Math is a built-in object that has properties and methods for mathematical constants and functions.
 //Not a function object.
 var myMathRandom = Math.random();
 var myMathRound = Math.round(4.7);
 var myPi = Math.PI;

 //Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.
 var myDate = new Date();

//The JavaScript Array global object is a constructor for arrays, which are high-level, list-like objects.
 var myFruits = ['apple', 'banana', 'cucumber'];

 //and more..

 //P03Try typeof on all variables you created.
 //P04Create null, undefined variables and try typeof on them.

 var myVariables =
 [
     myUndefined,
     myNull,
     myBool,
     myNumber,
     myString,
     myStingObject,
     //mySymbol,
     myObjectEmpty,
     myObjectDoggy,
     myFunction,
     myNumberValid,
     myNumberNotValid,
     myNumberMax,
     myMathRandom,
     myMathRound,
     myPi,
     myDate,
     myFruits
 ];

 myVariables.forEach(function (variable)
 {
     console.log(variable + ' is of type ' + typeof(variable));
 });