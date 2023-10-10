function x(){
    return new Promise((resolve, reject) => {
        
        reject("Hii")
    })
}

x().then((e)=>{
    return e+=" vishal"
})
.then((e)=>{
    console.log(e)
})
.catch((e)=>{
    console.log(e)
})