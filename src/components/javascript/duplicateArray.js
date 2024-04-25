function uniqueDuplicateArray(arr){
    let uniqueArray=arr.filter((value,index,self)=>self.indexOf(value)===index)
    let duplicateArray=arr.filter((value,index,self)=>self.indexOf(value)!==index)
    let duplicateValues=[...new Set(duplicateArray)]
    console.log(`Unique Array: ${uniqueArray}`)
    console.log(`Duplicate Array: ${duplicateArray}`)
    console.log(`Duplicate Values: ${duplicateValues}`)
}

let arr=[1,2,1,1,1,1,1]
uniqueDuplicateArray(arr)