
var tobj=
{
count:1
}

var obj = new Proxy(tobj, {
    get: function (target, propKey, receiver) {
      //console.log(`getting ${propKey}!`);
      //console.log(receiver)//receiver is Proxy self.
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      //console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
  });


//const myobj={bar:"11"}



var handler = {
    get: function(target, name) {
      if (name === 'prototype') {
        return Object.prototype;
      }
      return 'Hello, ' + name;
    },
  
    apply: function(target, thisBinding, args) {
      console.log("target:",target);//f(x,y){return x+y}
      console.log("thisBinding:",thisBinding);//undefined
      console.log("args:",args);//[1,2]
      return args[0];
    },
  
    construct: function(target, args) {
      return {value: args[1]};
    }
  };

  function MyObj(name)//function also is a structor or class name
  {
      //this.name = name
      console.log(name)
      console.log(this.name)
  }
const Myobj2=
  {
      name:"111"
  }

var lmyobj3={
  wo:()=>{console.log('111')}
}

//proxy for observe
var i=0;
function mycall(){
  console.log("mycall:",i++);
}
function mycall2(){
  console.log("mycall2:",i++);
}
var obj={}
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  console.log(value)
  queuedObservers.forEach(observer => observer());//fucntion (observer){ return observer()}
  return result;
}

  function testProxy()
  {  


    return 
    //--
    // observe(mycall)
    // observe(mycall2)
    // var hh =  observable(obj)
    // hh.v1 = 1
    //--

    //console.log(obj)
    
    //console.log(observe)
    //console.log(observable)

    //console.log( Reflect.ownKeys(lmyobj3) )
    //Reflect.defineProperty(lmyobj3,"k",{value:"11"}) 
    //console.log(lmyobj3)
    //Reflect.apply(MyObj,Myobj2,["kk"])

    //  var res1 = Reflect.construct(MyObj,["name"])
    //  console.log( Reflect.getPrototypeOf(res1) );
     //console.log(res1);
    // var fproxy = new Proxy(function(x, y) {
    //     return x + y;
    //   }, handler);
    //  var res1 =  fproxy(1, 2) // 1  //invoke apply
    //  //console.log( res1 );
    //  var res2 =    new fproxy(1, 2) // {value: 2} //invoke construct
    //  //console.log( res2 );

    // console.log(myobj.bar);
    // Reflect.deleteProperty(myobj,'bar');
    // console.log(myobj.bar);
    //console.log(Object)
    //console.log( tobj.count )
    //console.log( obj.count )
    // obj.count=3
    // console.log( obj.count )
  }

  export {testProxy}
