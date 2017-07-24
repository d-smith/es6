var myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)

for (var value of myArray) {
  console.log(value);
}

for (var chr of "This is a string") {
    console.log(chr);
}

var words = []
words.push("these")
words.push("are")
words.push("unique")
words.push("words")
words.push("are")
words.push("these")

var uniqueWords = new Set(words);
for (var word of uniqueWords) {
    console.log(word);
}

var myMap = new Map();
myMap.set('a',1);
myMap.set('b',2);
myMap.set('c',3);

for(var[key,value] of myMap) {
    console.log(key + ' --> ' + value);
}