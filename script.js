    var verMais=document.getElementById("verMais");
    var mais=document.getElementById("mais");
    var menos=document.getElementById("menos");


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