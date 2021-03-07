function Java() {
    var funzione = document.getElementById(esp1).value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("risultato").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "https://api.mathjs.org/v4/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "*");

    xhttp.send({
        "expr": funzione,
        "precision": 14
    });
}


function Jquery() {
    var funzione1 = document.getElementById(esp2).value;
}