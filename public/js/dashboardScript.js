async function addNewBranch(){
    const name = document.getElementById("branch_name").value;
    const location = document.getElementById("branch_location").value;
    const open = document.getElementById("branch_open").value;
    const close = document.getElementById("branch_close").value;
    
    const data = {name,location,open,close};

    if(name === "" || location === "" || open === "" || close === "")
        return document.getElementById("add_branch_message").textContent = "Input can't empty";

    await fetch('/api/branch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    window.location.reload()
}

async function addNewService(){
    const name = document.getElementById("service_name").value;
    const duration = document.getElementById("service_duration").value;
    
    const data = {name,duration};

    if(name === "" || duration === "")
        return document.getElementById("add_service_message").textContent = "Input can't empty";

    await fetch('/api/service', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    window.location.reload()
}