const arr=[1,2,9,45,3,2,44,23,2]

let max=arr[0]

for (let i=0; i<arr.length;i++) 
{
    if (arr[i] > max){
        max=arr[i]
    }
}
console.log("The Largest Element In Array Is:"+max)