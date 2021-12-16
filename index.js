// node-cli-Anagrams
const fs = require('fs');
const readline = require('readline');


let allAnagrams = {};

function Anagram(anagrams) {
    allAnagrams = anagrams
}

let sortLetters = Anagram.prototype.sortLetters = function (word) {
    word = word.toLowerCase().split('').sort().join('');
    
    return word;
}

let findAllAnagrams = Anagram.prototype.findAllAnagrams = function (inputString) {
    let sortStr = sortLetters(inputString.toLowerCase()); 

    if(allAnagrams[sortStr]) {
        return allAnagrams[sortStr];
    } else {
        return `Sorry, no anagrams has been found.`
    }
}

let readFile = Anagram.prototype.readFile = function () {
            
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('Please enter your word to find all the anagrams: ');
    rl.prompt();
    rl.on('line', (word) => {
        console.log(findAllAnagrams(word));
        rl.prompt();
    }).on('close', () => {
       console.log('Stream closed');
    });

    let readStream = fs.createReadStream('wordlist.txt');

    readStream.on('data', (chunk) => {
        let words = [];
        words = chunk.toString('utf8').split('\r\n')
        // console.log(words)
        for (const i in words) {
            let word = words[i].toLowerCase();
            let sorted = sortLetters(word)
            if(allAnagrams[sorted] != null) {
                allAnagrams[sorted].push(word);
            } else {
                allAnagrams[sorted] = [word];
            }
        }  
    });

    readStream.on('close', () => {
        readStream.destroy(); 
    });
}

module.exports = Anagram;
readFile();
