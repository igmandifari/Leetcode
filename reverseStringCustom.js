function reverseString(x) {
  let newArr = String(x).split(" ");
  let capital = [];
  for (let i = 0; i < newArr.length; i++) {
    capital.push(
      newArr[i][0].toUpperCase() + newArr[i].substring(1).toLowerCase()
    );
  }
  let newStr = capital.join("");
  let result = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    result += newStr[i];
  }
  return result;
}
console.log(reverseString("APa yang DImaksud deNGAn"));

function reverseString2(x) {
  let result = "";
  for (let i = x.length - 1; i >= 0; i--) {
    result += x[i];
  }

  let newSplit = String(result).split(" ");

  let capital = [];
  for (let i = 0; i < newSplit.length; i++) {
    capital.push(
      newSplit[i][0].toUpperCase() + newSplit[i].substring(1).toLowerCase()
    );
  }
  let newStr = capital.join("");

  return newStr;
}
console.log(reverseString2("APa yang DImaksud deNGAn"));
