let numero = Math.random();

numero = Math.floor(numero * 100);

function verificar() {
    let chute = document.getElementById("chute").value;
    let resultado = document.getElementById("resultado");
    let caixa = document.getElementById("caixa");

    chute = Number(chute);

    if (chute === numero) {
        resultado.innerHTML = " Acertou!";
        caixa.style.setProperty("background-color", "green");
    } 
    else if (chute > numero) {
        resultado.innerHTML = " Muito alto!";
        
        caixa.style.setProperty("background-color", "red");
    } 
    else {
        resultado.innerHTML = " Muito baixo!";
        
        caixa.style.setProperty("background-color", "red");
    }
}