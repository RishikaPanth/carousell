document.addEventListener('DOMContentLoaded', function() {
    const page = document.getElementById('page');
    const registerBtn = document.getElementById('register');
    
    const loginBtn = document.getElementById('login');
    
    registerBtn.addEventListener('click', () => {
        page.classList.add("active");
    });
    
    
    
    loginBtn.addEventListener('click', () => {
        page.classList.remove("active");
    });
    
    });