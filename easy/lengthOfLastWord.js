function lengthOfLastWord(x) {
  let newArr = x.split(" ");

  for (let i = newArr.length - 1; i >= 0; i--) {
    if (newArr[i].length >= 0) {
      return newArr[i].length;
    }
  }

  return 0;
}

console.log(lengthOfLastWord("Hello WOrld"));
