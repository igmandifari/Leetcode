function majorityElement(x) {
  for (let i = 0; i < x.length; i++) {
    let count = 0;

    for (let j = 0; j < x.length; j++) {
      if (x[i] === x[j]) {
        count++;
      }
    }

    if (count > x.length / 2) {
      return x[i];
    }
  }

  return "Jumlah sama";
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 1, 1]));

// function majorityElement2(nums) {
//     let candidate = nums[0];
//     let count = 1;

//     for (let i = 1; i < nums.length; i++) {
//         if (count === 0) {
//             candidate = nums[i];
//             count = 1;
//         } else if (nums[i] === candidate) {
//             count++;
//         } else {
//             count--;
//         }
//     }

//     return candidate;
// }

// console.log(majorityElement2([3, 2, 3]));
// console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2,1,1]));
