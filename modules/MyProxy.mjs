
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


  function testProxy()
  {
    //console.log( tobj.count )
    console.log( obj.count )
    // obj.count=3
    // console.log( obj.count )
  }

  export {testProxy}