const url="https://jsonplaceholder.typicode.com/todos"

const x=async()=>{
    const res=await fetch(url)

    const data=await res.json()

    console.log(data)
}

x()