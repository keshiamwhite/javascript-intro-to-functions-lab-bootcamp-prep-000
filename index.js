function shout(string) {
  return('HELLO')
  string.toUpperCase()
}

function logShout(string) {
  console.log('HELLO')
  string.toLowerCase()
}

function whisper(string) {
  return('hello')
  string.toLowerCase()
}

function logWhisper(string) {
  console.log('hello')
  string.toLowerCase()
}

var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false

 function sayHiToGrandma(string){
 if (string.toUpperCase)
  return("YES INDEED!")
}

function sayHiToGrandma(string) {
if (string.toLowerCase)
  return("I can't hear you!")
}
 

