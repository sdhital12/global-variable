function m(){  
window.value=100;//declaring global variable by window object  
}  
function n(){  
alert(window.value);//accessing global variable from other function  
}  
m();
n();
var value=50;  
function a(){  
alert(window.value);//accessing global variable   
}  
