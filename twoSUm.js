function TwoSum (nums,target){
    let i=0;
    let j=nums.length-1;

    if(nums[i]===target) return false;
    
    while(i<j){
        if(nums[i]+nums[j]===target){
            return [i,j]
        }else if(nums[i]+nums[j]<target){
            i++
        }else{
            j--
        }
    }
}

console.log(TwoSum([2,7,11,15],2));
console.log(TwoSum([2,7,11,15],3));
console.log(TwoSum([2,7,11,15],9));
console.log(TwoSum([2,7,11,15],26));

//0
//0,1