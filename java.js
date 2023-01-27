let eye = document.querySelector('.fa-eye');
eye.addEventListener("click",function () {
    let e = document.querySelector('#pass').getAttribute('type');
    
    if (e == "password") {
        document.querySelector('#pass').setAttribute('type','text');
    }
    else{
        document.querySelector('#pass').setAttribute('type','password'); 
    }
});
let user = document.getElementById('user');
user.addEventListener("keyup",function () {
    let email = document.getElementById('user').value;
    let text = document.getElementById('text');  
    let pattern = /[a-z]@gmail.com$/;
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
    let passpattern = /([A-Z0-9a-z.@<>%$#&*(){}]){1,5}([a-z0-9]){1}([A-Z.@<>%$#&*(){}]){1}([0-9a-z]){1}/;
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

})