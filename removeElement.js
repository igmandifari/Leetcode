function removeElement(x, y) {
  let panjang = x.length;
  let newArr = [];

  for (let i = 0; i < panjang; i++) {
    if (x[i] != y) {
      newArr.push(x[i]);
    }
  }
  return newArr
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); 
