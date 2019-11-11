window.onload = function(){
    loadPage();
}


let loadPage= () =>{
    let button= document.getElementById("btn");

    var httpRequest = new XMLHttpRequest();
    let url = "http://localhost:8080/superheroes.php";
    httpRequest.open("GET",url, true);
    httpRequest.send(null);
    

    button.addEventListener("click",function(){
        alert(httpRequest.responseText);
    });

    
}