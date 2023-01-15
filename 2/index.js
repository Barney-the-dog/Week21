postButton.onclick= function(event){
    event.preventDefault();
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById("password").value
    }
 
    fetch("https://httpbin.org/post",{
        method: "POST",
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}