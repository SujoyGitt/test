let eye = document.querySelector('.openeye');

let password = document.querySelector("#pass");
let user = document.getElementById('user');
let pattern = /[a-z]@gmail.com$/;
let passpattern = /([A-Z0-9a-z.@<>%$#&*(){}]){1,5}([a-z0-9]){1}([A-Z.@<>%$#&*(){}]){1}([0-9a-z]){1}/;
let form = document.querySelector("form");
let btn =  document.querySelector("button");

eye.addEventListener("click",function () {
    let e = document.querySelector('#pass').getAttribute('type');
    if (e == "password") {
        document.querySelector('#pass').setAttribute('type','text');
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
    else{
        document.querySelector('#pass').setAttribute('type','password'); 
        eye.classList.add('fa-eye');
        eye.classList.remove('fa-eye-slash');
    }
});
 user.addEventListener("keyup",function () {
    let email = document.getElementById('user').value;
    let text = document.getElementById('text')
    if (email.match(pattern)) {
        text.innerHTML = "Your Email Address in Valid.";
        text.style.color = 'lime';
        text.style.fontSize = '14px';
    }
    else{
        text.innerHTML = "please enter your valid email address";
        text.style.color = 'red';
        text.style.fontSize = '14px';
    }
    
});
document.getElementById("pass").addEventListener("keyup",()=>{
    let password = document.getElementById('pass').value;
    let passtext = document.getElementById('notipass');
    if (password.match(passpattern) && password.length >= 8) {
        passtext.innerHTML = "your password match";
        passtext.style.color = 'aqua';
        passtext.style.fontSize = '14px';
    } 
    else{
        passtext.innerHTML = "your password shouldbe 8 charecter special and number capital and small later.";
        passtext.style.color = 'lime';
        passtext.style.fontSize = '12px';
    };

});
let fom =document.querySelector("form");

fom.addEventListener("keyup",()=>{
    if(user.value.length > 10 && password.value.length > 7){
     btn.removeEventListener('mouseover',hover);
     btn.classList.remove('btnadd');
    }
});

let hover = ()=>{
    btn.classList.toggle('btnadd');
}  
btn.addEventListener("mouseover",hover);

 

