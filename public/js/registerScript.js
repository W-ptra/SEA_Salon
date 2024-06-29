document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    if(fullName === "" || email === "" || phoneNumber === "" || password === "")
        return document.getElementById('register_form_message').textContent = "input can't empty";

    const data = {
        name: fullName,
        email: email,
        phone_number: phoneNumber,
        password: password
    };
    
    const respond =  await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await respond.json();
    if(result.message === "OK")
        window.location.href = "/login";
    
});