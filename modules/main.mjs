
import { MyAjaxRequest,ajaxRequest, methodTypes } from './MyAjaxRequest.mjs'
import {obsApi,test}  from './module.mjs'
import {MyEventEmiter}  from './myEventEmitter.mjs'
import {TestMySymbol}  from './MySymbol.mjs'
import {testProxy}  from './MyProxy.mjs'
import {TestMyPromise}  from './MyPromise.mjs'
import {testOther}  from './other.mjs'
import {testjAjax}  from './jajax.mjs'

class Main
{
    constructor(){
    }

    Run(){
        this.TestjAjax()
    }
    TestjAjax()
    {
        testjAjax()
    }
    TestOther(){
        testOther();
    }

    TestPromise()
    {
        TestMyPromise()
    }

    TestMyProxy(){
        testProxy();
    }
    TestMySymbol(){
        TestMySymbol()
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