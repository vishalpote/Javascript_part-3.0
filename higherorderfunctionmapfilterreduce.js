const arr=[1,2,3,4,5,6,7,8,9,10,11,12]


const arr2=arr.map((ele)=>{
    return ele**2;
})

console.log(arr2)

const arr3=arr2.filter((ele)=>{
    return ele%2==0 
})

console.log(arr3)

const arr4=arr3.reduce((acc,ele)=>{
    return acc+=ele
});

console.log(arr4)