const arr1=[1,2,3,1,4,2,5,5]
const arr2=[1,4,5,7,8,9]


const commen=[]

for (let i=0; i<arr1.length; i++)
{
    curr=arr1[i]

    if(arr2.includes(curr) && !commen.includes(curr)){
        commen.push(curr)
    }
}
console.log(commen)