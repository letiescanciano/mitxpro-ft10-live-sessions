//Exercise 1- Find the longest word

const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
]

const findLongestWord = () => {
  //Our code
  let otherSize = 0
  let word = ''

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > otherSize) {
      otherSize = words[i].length
      word = words[i]
    }
  }
  return word
}

console.log(findLongestWord())

//Exercise 2- Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function sumNumbers(array) {
  //Our code
}

//sumNumbers(numbers)

/* Let's create a new function sum() that calculates the sum for array filled with (almost) any type of data. 
  Note that strings should have their length added to the total, 
  and boolean values should be coerced into their corresponding numeric values*/

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]

function sum(array) {
  //Our code
}
//sum(mixedArr)
