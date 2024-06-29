document.getElementById('loginForm').addEventListener('submit',async function(event) {
    event.preventDefault();
    document.getElementById("login_form_message").textContent = "";
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "" || password === "")
        return document.getElementById("login_form_message").textContent = "Input can't empty";
    
    const data = {
        email: email,
        password: password
    };
    
    const respond = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await respond.json();

    if(result.message === "OK")
        window.location.href = "/home";

    document.getElementById("login_form_message").textContent = result.message;
});