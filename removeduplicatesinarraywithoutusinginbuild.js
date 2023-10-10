const arr=[1,2,3,1,4,2,5]

const unique =[]

for (let i=0; i<arr.length; i++)
{
    if(!unique.includes(arr[i]))
    {
        unique.push(arr[i])
    }
}
console.log(unique)