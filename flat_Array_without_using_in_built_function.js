function flatArray(arr)
{
    let flatend=[]

    for(let i=0; i<arr.length; i++)
    {
        if(Array.isArray(arr[i])){
            flatend=flatend.concat(flatArray(arr[i]))
        }
        else{
            flatend.push(arr[i])
        }
    }
    return flatend;
}

const x=flatArray([2,3,[1,2,3,[6,7,8]]])
console.log(x)