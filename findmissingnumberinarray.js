const arr=[1,2,3,4,5,7,8]

const x=arr.length+1
// console.log(x)

const sum=(x*(x+1))/2
// console.log(sum)

const arr2=arr.reduce((acc,ele)=>{
    return acc+=ele
},0)

// console.log(arr2)

const accsum=sum-arr2

console.log("The Missing Number In The Array Is:"+accsum)
 


