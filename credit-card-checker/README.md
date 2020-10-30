# Credit Card Checker / The Luhn Algorithm 

This is just one of many intro JS  projects I completed as part of [CodeCademy's](https://www.codecademy.com) __*Full Stack Web Developer Career Path*__


## Project Goals 🛹
*via CodeCademy:*

>Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing! 

---------------
>Instructions:  
* Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.

* To find out if a credit card number is valid or not, use the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:

* Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
* As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.

* Sum up all the digits in the credit card number.
* If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.
...

_code snippet:_

```JavaScript
function validateCred(arr) {
  let newArray = [];
  for (let i = arr.length-1; i>=0; i--) {
    let x = arr[i]
    if ((arr.length-1 - i) % 2 === 1) {
      //console.log(i);
      x *= 2;
      if (x > 9){
        x -= 9;
      }
    }
    newArray.unshift(x);
  }
  
  let sum = newArray.reduce((acc, cv) => acc + cv);
  //console.log(newArray)
  //console.log(sum)
  return sum % 10 === 0;
}
```