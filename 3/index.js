
postButton.onclick= function(event){
    event.preventDefautlt();
 
    fetch("https://httpbin.org/post",{
        method: POST,
        body: new FormData(formElem)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}