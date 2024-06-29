async function addNewCommand(){
    const name = document.getElementById("comment_name").value;
    const review = document.getElementById("comment_comment").value;
    const star = document.getElementById("comment_star").value;
    document.getElementById("submit_commant_message").textContent = "";
    const data = {name,review,star};

    if(name === "" || review === "" || star === "")
        return document.getElementById("submit_commant_message").textContent = "Input can't empty";

    if(star < 1 || star > 5)
        return document.getElementById("submit_commant_message").textContent = "Star must between 1 - 5";

    await fetch('/api/review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    window.location.reload()
}