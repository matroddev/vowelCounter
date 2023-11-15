'use strict'

const btn = document.querySelector('.count-btn')
const input = document.querySelector('.input')
const display = document.querySelector('.count')
const reset = document.querySelector('.reset-btn')

btn.addEventListener('click', () => {
  let userInput = input.value.toLowerCase()
  const inputSpread = [...userInput]
  let count = 0
  for (const char of inputSpread) {
    if (char === 'a') {
      count++
    } else if (char == 'e') {
      count++
    } else if (char == 'i') {
      count++
    } else if (char == 'o') {
      count++
    } else if (char == 'u') {
      count++
    }
  }

  let numOfVowels
	let isAre
  if (count > 1 || count == 0) {
    numOfVowels = 'vowels'
		isAre = 'are'
  } else {
    numOfVowels = 'vowel'
		isAre = 'is'
  }
  display.textContent = `There ${isAre} ${count} ${numOfVowels}.`
})

reset.addEventListener('click', () => {
	input.value = ''
	display.textContent = 'How many vowels?'
})