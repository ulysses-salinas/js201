// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'

//function fizzbuzz (num) {
//for (var i = 1; i <= num; i++)
//if (i % 15 === 0) console.log('fizzbuzz'); 
//else if (i % 3 === 0) console.log('fizz');
//else if (i % 5 === 0) console.log('buzz');
//else console.log('.');

//}


function fizzbuzz (number) {
    let str = '';
    let arr = [];
    for (let i = 1; i <= number; i++){
        arr.push(i)
    }
    for (let i in arr){
        if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0){
            str += '.'
        }
        else if (arr[i] % 3 === 0 && arr[i] % 5 !== 0){
            str += 'fizz'
        }
        else if (arr[i] % 3 !== 0 && arr[i] % 5 === 0){
            str += 'buzz'
        }
        else { str += 'fizzbuzz'
     }
  }
 return str
}
