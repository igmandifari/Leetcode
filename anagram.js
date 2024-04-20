function anagram(x,y){
  let satu = String(x).toLowerCase().split("").sort().join();
  let dua = String(y).toLowerCase().split("").sort().join();

  if(satu===dua){
    return true
  } else{
    return false
  }
}

function anagram2(x, y) {
  let satu = String(x).toLowerCase();
  let dua = String(y).toLowerCase();

  if (satu.length !== dua.length) return false;

  for (let i = 0; i < satu.length; i++) {
      let count1 = 0;
      let count2 = 0;

      for (let j = 0; j < satu.length; j++) {
          if (satu[i] === satu[j]) {
              count1++;
          }
          if (satu[i] === dua[j]) {
              count2++;
          }
      }

      if (count1 !== count2) return false;
  }

  return true;
}



console.log(anagram("senin","ninse"));
console.log(anagram(123,321));
console.log("========================");
console.log(anagram2("asdfghjkl","alskdjfhg"));
console.log(anagram2(123,321));
console.log("========================");
