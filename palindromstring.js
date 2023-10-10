let str1="vishal"

let str2=""

let str3=str1.split("")
// console.log(str3)
for(let i=str3.length-1; i>=0;i--)
{
    str2+=str3[i]
}
// console.log(str2)
if(str2===str1)
{
    console.log("palindrome string")
}
else{
    console.log("Not palindrome string")
}