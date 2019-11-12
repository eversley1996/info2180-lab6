/* 
    Author: Eversley Francis

*/


window.onload = function(){
    loadPage();
}

let loadPage= () =>{

    let button= document.getElementById("btn");

    button.addEventListener("click",function(){
        var httpRequest = new XMLHttpRequest();
        
        //Get the text entered
        var query= document.getElementById("queryTxtBox").value.toLowerCase();

        //Append search term to url
        let url = "http://localhost:8080/superheroes.php?query=" + query.trim();

        //Initiate Request
        httpRequest.open("GET",url, true);

        //Send request to php server
        httpRequest.send();
        
        //Checks for "OK/200" message from server, then displays reponse to text area.
        httpRequest.onreadystatechange = function (){
            if (httpRequest.readyState == 4 && httpRequest.status == 200){

                document.getElementById("resultArea").innerHTML= "<p>" + httpRequest.responseText + "</p>";
            }
        
        }
        
    });

}