
import { ajaxRequest, methodTypes } from "../common/ajaxRequest.mjs"

function MyAjaxRequest()
{
    let url = "www.baidu.com"
    let params={
        p1:"P1",
        p2:"P2",
    }
    let options={
        ...params,//url parameters
        headers:{//http headers 
            'h-app-id': "this.conf.appId",
            'x-wmv-sign': "this.conf.sign",
            'x-wmv-ua': "this.conf.ua",
        }
    }
    ajaxRequest(url,options,methodTypes.GET).then(
        (res)=>{
            console.log("suc:",error);
        }
    ).catch(
        (error)=>{
            console.log("err:",error);
        }
    )
}
export {MyAjaxRequest,ajaxRequest, methodTypes}
