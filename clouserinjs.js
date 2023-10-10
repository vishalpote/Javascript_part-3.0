const outer=()=>{
   console.log("i am outer function") 
    const inner=()=>{
        console.log("i am inner function");
        const innerFunction=()=>{
            console.log("i am inner of inner function");
        }
        return innerFunction
    }
     return inner;
}

const x=outer();
x()()