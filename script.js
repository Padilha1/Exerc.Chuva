    var verMais=document.getElementById("verMais");
    var mais=document.getElementById("mais");
    var menos=document.getElementById("menos");


    var enviar=document.getElementById("Enviar");
    var divT1=document.getElementById("divTopic1");
    var success=document.getElementById("success");

function leiaMais() {

    if (verMais.style.display === "none") {
        verMais.style.display= "inline";
        mais.style.display="none";
        menos.style.display="none";
    } else{
        verMais.style.display= "none";
        mais.style.display="inline";
        menos.style.display="inline";
    }
}

function leiaMenos() {
    mais.style.display="none";
    menos.style.display="none";
    verMais.style.display="inline";
}

function criarTopic(){
    divT1.style.display ="none";
    enviar.style.display="inline";
    success.style.display="none";
}

function confirmado(){
    enviar.style.display ="none";
    success.style.display="inline";
}

