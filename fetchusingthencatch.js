const url='https://jsonplaceholder.typicode.com/photos'

fetch(url)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
