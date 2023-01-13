
postButton.onclick= function(event){
    event.preventDefault();
 
    fetch("https://httpbin.org/post",{
        method: "POST",
        body: new FormData(formElem)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}