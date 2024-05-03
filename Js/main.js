let nameinput = document.querySelector("[name='name'") ;
let emailinput = document.querySelector("[name='email") ;
document.forms[0].onsubmit = function (e){
    let namevalid=false;
    let emailvalid=false;
    if(nameinput.value !== ""&&emailinput.contains("@") ){
        namevalid=true;
        emailvalid=true;
    }
    if(namevalid===false || emailvalid=== false){
        e.preventDefault();
    }
}