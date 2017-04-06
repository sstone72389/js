'use strict'

const ask = require('../lib/ask.js')

const age = ask("what's your age? ")

if (age >= 90) {
  console.log('You old fart!')
} else if (age <= 10) {
  console.log('Why are you on a computer? Go outside!')
} else {
  console.log('How boring...')
}
