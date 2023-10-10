const arr=[1,9,3,10,5,3,2,16,7,20,5,8]

let max=arr[0]

for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max){
       max=arr[i]
    }
}
console.log( max );


