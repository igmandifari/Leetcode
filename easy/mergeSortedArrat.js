function mergeSortedArrat(nums1,nums2){
    let newArr = nums1+","+nums2
    let sorting = newArr.split(",")
    let arrayMerge = [];

    for(let i=0; i<sorting.length; i++){
        if(sorting[i]!=0){
           arrayMerge.push(sorting[i])
        }
        
    }

    return arrayMerge
}   

console.log(mergeSortedArrat([1,2,3,0,0,0],[2,5,6]));