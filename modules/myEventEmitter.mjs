
import {EventEmitter} from "../common/EventEmitter.mjs"

class MyEventEmiter extends EventEmitter
{
    constructor(){
        super();
        var This = this
        setInterval(()=>{
            This.init()
        },1000)
    }
    init(){        
        this.emit('myevent',{
            type: "myevent",
            detail: "reason",
          });
    }
    mytest(){
        console.log("rrr")
    }
}
export {MyEventEmiter}
