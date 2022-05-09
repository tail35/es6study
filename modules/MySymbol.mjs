
let log={
    debug:Symbol("222")
}


const keyobj = Symbol.for('foo')
class mysingleton
{
    constructor(){

    }
    myprint(){
        console.log("i am mysingleten");
    }
}

function getmysingleton_instance()//you can export this method.
{    
     if( !globalThis[keyobj] ){
        globalThis[keyobj] = new mysingleton()
     }
     return globalThis[keyobj]
}




function TestMySymbol()
{
    getmysingleton_instance().myprint();
    getmysingleton_instance().myprint();
    // const FOO_KEY="1"
    // console.log(FOO_KEY);    
    // FOO_KEY = "2"
    // console.log(FOO_KEY); //error assign to const.
    //
    return 
    let s1 = Symbol("111");
    let s2 = Symbol("111");
    let syobject =
    {
        [s1]:"11",
        [s2]:"22"
    };
    console.log(syobject[s1]);
    console.log(syobject[s2]);
    //console.log( syobject[Symbol("111")] );
    //console.log(Symbol("111") )
    //console.log(Symbol("222") )
    //console.log('111:',log.debug.toString()) 
    //console.log( JSON[Symbol.toStringTag] )
}

export {TestMySymbol}

