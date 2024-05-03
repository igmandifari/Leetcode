function clockFormat(x){
    let arr = x.split(" ")
    if(arr.length!=2) return "Invalid Format Jam"

    let arr2 = arr[0].split(":")
    if(arr[1]==="PM"){
        arr2[0] = (parseInt(arr2[0])+12)
    } else if(arr[1]==="AM"){
        arr2[0] = (parseInt(arr2[0])+0)
    } else{
        return "Invalid Format"
    }

    return arr2.join(":")

}

console.log(clockFormat("09:00 PM"));