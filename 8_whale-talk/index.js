let input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  const justInput = input[i];
  if (justInput === 'e'){
    resultArray.push(justInput);
  }else if (justInput === 'u'){
    resultArray.push(justInput);
  }
  for (let j = 0; j < vowels.length; j++) {
    const justVowels = vowels[j];
    if (justInput === justVowels){
      resultArray.push(justVowels);
    }
  }
}
console.log(resultArray);
let resultString = resultArray.join('')
console.log(resultString.toUpperCase())