async function addNewCommand(){
    const name = document.getElementById("comment_name").value;
    const review = document.getElementById("comment_comment").value;
    const star = document.getElementById("comment_star").value;
    
    const data = {name,review,star};

    await fetch('/api/review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    window.location.reload()
}