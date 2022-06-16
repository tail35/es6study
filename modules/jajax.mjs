
var start=0;
function response(data)
{
	console.log('success:',data);
}
function CenterError(jqXHR, textStatus, errorThrown)
{
	 var interval = (new Date().getTime() - start)/1000;
	var str = " jqXHR.statusText:" + jqXHR.statusText +
	" jqXHR.responseText:" + jqXHR.responseText + " jqXHR.status: " + jqXHR.status +
	" jqXHR.readyState: " + jqXHR.readyState + " textStatus:" + textStatus +
	" errorThrown:" + errorThrown;			
	console.log('interval:',interval,'error:',str);
}
function testjAjax(){	
	start = new Date().getTime();
    $.ajax({
        headers: {
            "h-app-id": 'www'
        },
        url: 'http://localhost:8283/hello',
        context: this,
        success: response,
		//timeout: 100,
        error: CenterError,
        crossDomain: true
    }).fail(function(jqXHR, textStatus, errorThrown) {		
        var str = " jqXHR.statusText:" + jqXHR.statusText +
            " jqXHR.responseText:" + jqXHR.responseText + " jqXHR.status: " + jqXHR.status +
            " jqXHR.readyState: " + jqXHR.readyState + " textStatus:" + textStatus +
            " errorThrown:" + errorThrown;			
		console.log('failed:',str);
    });	
}

export {testjAjax}