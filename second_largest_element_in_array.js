const arr=[1,2,3,9,5,6,7]

let large=-Infinity; 
let seclarge=-Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i]>large){
        seclarge=large
        large=arr[i]
    }
    else if(arr[i]>seclarge && arr[i]!==large){
        seclarge=arr[i]
    }
}
console.log(seclarge)