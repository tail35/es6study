

function MyPromiseFun()
{
    return  new Promise((resolve,reject)=>{
        var i=1
        //resolve({code:"0"})
        
        reject({code:"1"})
    })
}


function TestMyPromise()
{
    console.log("\u{0030}\u{1f4a6}");
    return 
    var str="hello"
    var arr = [...str]
    console.log(arr[0])
    return 
    MyPromiseFun().then(
        (res)=>{
            console.log("res",res)
        }
    ).catch(
        (error)=>{
            console.log("error",error)
        }
    )
}


export {TestMyPromise}