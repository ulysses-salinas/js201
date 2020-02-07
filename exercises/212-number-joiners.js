// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile (num1, num2){
    str = ''
    let i = num1;
    while (i <= num2){
     if (i >= num1 && i < num2){
          str += i++ + '_' 
        }
        else if (i = num2){
          str += i++
        }
    }
    return str
    
    }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor (num1, num2){
    str = '';
     for (let i = num1; i <= num2; i++){
      if (i >= num1 && i < num2){
        str += i + '_' 
      }
      else if (i = num2){
        str += i
      }
    }
    return str
  }
  numberJoinerFor(1,10)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3


function numberJoinerFancy (num1, num2, seperator){
    let str = ''
    for (let i = num1; i <= num2; i++){
        if (i >= num1 && i < num2 && seperator === undefined){
            str= str + i + '_'
        }
        else if (i >= num1 && i < num2 && seperator !== -1){
        str= str + i + seperator
    }
        else {
           str = str + i
        }
    }
    return str
    
    
    }