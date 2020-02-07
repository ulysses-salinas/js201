// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

  // 1) declare an array with some strings
 

  // create an empty array (we will fill this with strings from the previous array)


  // 2) loop through "animals"

  // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
  //    contains the letter "z"
  //    HINT: remember you can search within a string

  // 4) return "animalsWithoutZ"

  function removeZAnimals (){
    const animals = ['alligator','zebra','crocodile','giraffe'];
    let animalsWithoutZ = [];
    
    for (let i = 0; i <= 3; i++){
      if (animals[i] === animals[i] && animals[i].indexOf('z') === -1 ){
        animalsWithoutZ.push(animals[i])
      }
    
    }
    return animalsWithoutZ
    }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array minus
// any words that contain the letter 'z' or 'Z' (case-insensitive)

function removeAnyWordWithZ (arr) {

  let newArr = [];
  
  
  for (let i in arr){
    if (arr[i].search(/Z/i) === -1){
         newArr.push(arr[i])
    }
    
  }
  return newArr
  }
  removeAnyWordWithZ(['Zelda','Xzylophone', 'onomatopoeia', 'Zeezee'])
  
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeWordsWithChar" that takes 2 arguments:
// 1) an array of strings
// 2) a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).
//
// Examples:
// removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
// removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']
function removeWordsWithChar (arr, char) {
  let newArr = [];
  for (let i in arr){
    if (!arr[i].includes(char.toLowerCase())){
      newArr.push(arr[i])
    }
  }
  return newArr
}
