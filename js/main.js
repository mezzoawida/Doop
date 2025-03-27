let btn=document.getElementById("btn")
window.onscroll=function(){
    if(scrollY>=400){
        btn.style.display='block';

    }else{
        btn.style.display='none';
    }
    btn.style.position = "fixed";
    btn.style.right = "20px";
    btn.style.bottom = "20px";
    btn.style.width = "30px";  
    btn.style.height = "50px"; 
    btn.style.border = "none"; 
    btn.style.borderRadius = "50%"; 
    btn.style.cursor = "pointer";
};
btn.onclick = function () {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (message.length < 5) {
        alert("Message must be at least 5 characters.");
        return;
    }

    alert("Message Sent Successfully!");
});

function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}