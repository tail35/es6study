//electron should use nodejs module and class defined.not web es6's import.
//reference https://www.jianshu.com/p/55d705865573


class obsApi 
{
	constructor(){
	}
	myprint(){
		alert('111');
	}
}

function test(){
	alert("222");
}

export {test,obsApi}