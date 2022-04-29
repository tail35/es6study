
import { MyAjaxRequest,ajaxRequest, methodTypes } from './MyAjaxRequest.mjs'
import {obsApi,test}  from './module.mjs'
import {MyEventEmiter}  from './myEventEmitter.mjs'
class Main
{
    constructor(){        
    }    
    Run(){        
        this.testMyAjaxRequest()
    }
    testMyAjaxRequest(){
        MyAjaxRequest();
    }
    testMyEventEmiter(){
        var lMyEventEmiter = new MyEventEmiter()
        lMyEventEmiter.on(
            "myevent",
            (obj)=>{
                console.log(obj)
            }
        )
        lMyEventEmiter.init();
        //lMyEventEmiter.mytest()
    }
}

export {Main}