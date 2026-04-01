//your JS code here. If required.
let div = document.getElementById("output");
let p = new Promise((res, rej)=>{
	setTimeout(()=>{
		res("Hello, world");
	}, 1000);
}).then((data)=>{div.innerText =  data});