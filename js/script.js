var NumberOfWords = 10

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Library / Book Store"
words[2] = "Burger / Sandwich"
words[3] = "Toy Story / Lego"
words[4] = "Tea / Coffee"
words[5] = "Hamster / Mouse"
words[6] = "Sun / Moon"
words[7] = "Marvel / DC"
words[8] = "Steak / Chicken"
words[9] = "Doctor / Scientist"
words[10] = "Playstation / XBox"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
