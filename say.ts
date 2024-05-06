import * as cowsay from 'cowsay'
import * as fs from 'fs'
import * as path from 'path'
import wrap from 'word-wrap'

// Read the quotes from the JSON file
const quotes: string[] = JSON.parse(fs.readFileSync(path.join(__dirname, 'tech_quotes.json'), 'utf-8'))

// Pick a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

// Wrap the text at 120 characters
const wrappedQuote = wrap(randomQuote, {
  width: 40,
  indent: '',
  trim: true,
  cut: false,
  newline: '\n',
  escape: (str: string) => str,
})

// Generate the cowsay message
const message = cowsay.say({ text: wrappedQuote })

// Print the message to a file in rich text format
fs.writeFileSync(path.join(__dirname, 'quote.txt'), message)