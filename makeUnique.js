function noDupch(str) {
  let nonDup = "";

  for (let i = 0; i < str.length; i++) {
    if (nonDup.includes(str[i])) {
    } else {
      nonDup += str[i];
    }
  }
  return nonDup;
}
result = noDupch("Helllllllllo");
console.log(result);

function makeUnique(str) {
  let strArr = str.split("");
  const uniqueStringSet = new Set();
  strArr.forEach((i) => {
    uniqueStringSet.add(i);
  });
  let uniqueString = Array.from(uniqueStringSet).join("");
  return console.log(uniqueString);
}

function makeUnique(str) {
  let uniqueString = "";
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (!uniqueString.includes(strArr[i])) {
      uniqueString += strArr[i];
    }
  }
  return uniqueString;
}

const unique = (string) => {
  const splitStr = string.split("");

  let answer = "";

  splitStr.forEach((letter) => {
    if (!answer.includes(letter)) {
      answer += letter;
    }
  });

  return answer;
};

console.log(unique("helloworld"));


function makeUniqueStr(str) {
  lowerStr = str.toLowerCase().trim().replace(/\s+/g, ``); 
  let strArr = new Set (lowerStr.split(``));  
  return [...strArr].join("");   