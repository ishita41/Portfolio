const header = document.querySelector("header");
const bt=document.getElementById('s');
let drk=false;
bt.addEventListener('click',()=>{
    drk=!drk;
    if(drk){
        document.body.style.backgroundColor="rgb(205, 92, 92)";
    }
    else{
        document.body.style.backgroundColor="#2a2a2a";
    }
})
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 100);
});
let menu = document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onClick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
    
    function validate() {
        var username = document.getElementById('name');
        var email = document.getElementById('email');
        var contactnumber = document.getElementById('contactnumber');
        var message = document.getElementById('message');
    
        if (username.value.trim() === "" || email.value.trim() === "") {
            alert("NO BLANK VALUES ALLOWED");
            return false;
        } else if (contactnumber.value.length > 10) {
            alert("Contact number is too long");
            return false;
        }
    
        return true;
    }
    
    
