let x="listen"
let y="silent"

let str1=x.toLowerCase().split("").sort().join("")
let str2=y.toLowerCase().split("").sort().join("")
// y.split("").sort().join("")

if(str1===str2)
{
    console.log("Annagram")
}
else{
    console.log("Not Annagaram")
}

