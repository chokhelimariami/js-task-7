const sentence = "i love learning Javascript";
const words = sentence.split (" ");
console.log(words);


for (let i= 0; i< words.length; i++ ) {
    if ( words [i].length >=5) {
        words [i] = "longWord";
    }else {
        words[i] ="shortWord";
    }

}

console.log(words.join (" "));


let sentence2 = "i am mariam from milan";
let words2 = sentence.split(" ");
let i = 0;
let count = 0;

while (i < words2.length) {
  if (words2[i].includes("a")) {
    count++;
  }
  i++;
}

console.log("Number of words containing 'a':", count);


let colors =['blue', 'white', 'red', 'green'];
let color = 0;

do {
    console.log(` ${colors[color]}`);
    color++
    
} while (color<colors.length);

