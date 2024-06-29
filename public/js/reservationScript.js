document.getElementById('reservationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    document.getElementById("reservation_form_message").textContent = "";
    const name = document.getElementById('name').value;
    const phone_number = document.getElementById('phone_number').value;
    const service = document.getElementById('service').value;
    const date_when = document.getElementById('date_when').value;
    const session_time = document.getElementById('session_time').value;
    
    if(name === "" || phone_number === "" || service === "" || date_when === "" || session_time === "")
        return document.getElementById("reservation_form_message").textContent = "Input can't empty";

    const data = {
        name, phone_number, service, date_when, session_time
    };
    
    const respond =  await fetch('/api/reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await respond.json();
    
    document.getElementById("reservation_form_message").textContent = result.message;
});