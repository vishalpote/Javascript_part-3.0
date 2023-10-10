const x=()=>{
    const x=false;
    return new Promise((resolve, reject) => {
        if(x) {
            resolve("Hii ");
        }
        else {
            reject("Soory To Say But... Something Is Wrong")
        }
    })
}

x().then((response)=>{
    return response+=" vishal"
})
.then((response)=>{
    return response+=" pote"
})
.then((response)=>{
    // console.log(response)
    return response+=" I Am 23 old"
})
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})