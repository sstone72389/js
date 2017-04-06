'use strict'

const ask = require('../lib/ask.js')

let count = 0
let answer = ''

while (answer !== 'spencer') {
  answer = ask('Guess my name? ').toLowerCase()
  count = count + 1
}
console.log('You got it in ' + count + ' tries!')
