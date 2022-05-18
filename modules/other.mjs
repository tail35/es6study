







function testOther()
{
    let yellow1 = Symbol.for("Yellow");
    let wo = Symbol.keyFor(yellow1);    // "Yellow"
    console.log(wo)
    
    //let {a: aa = 10, b: bb = 5} = {a: 3};
    
    return
    {
        let a="a";
        var b="b";
    }
    console.log(a);
    console.log(b);
}


export {testOther}