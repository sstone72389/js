'use strict'

const ask = require('../lib/ask.js')

const name = ask("what's your name? ").toLowerCase()

if (name === 'spencer') {
  console.log('Hi, Spencer! You are a great programmer')
} else if (name === 'willy') {
  console.log('Hi, Willy!')
} else if (name === 'hamburgler') {
  console.log('Hi, Hamburgler, I would like a double!')
} else {
  console.log('Hi, stranger. Wait thats a weird thing to say...')
}
