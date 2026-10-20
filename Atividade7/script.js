function jogar(escolhaUsuario){
    var opcoes = ["pedra", "papel", "tesoura"];
    var indice = Math.floor(Math.random()*3);
    var escolhaComputador = opcoes[indice];

    var resultado = determinarVencedor(escolhaUsuario, escolhaComputador);

    document.querySelector("#escolhaUsuario").innerHTML = "Sua escolha: " + escolhaUsuario;
    document.querySelector("#escolhaComputador").innerHTML = "Escolha do computador: " + escolhaComputador;
    document.querySelector("#vencedor").innerHTML = resultado;
}

function determinarVencedor(usuario, computador){
    if(usuario === computador){
        return "<p style='color:#f9a825'> Deu empate! </p>";
    }
    if((usuario === "pedra" && computador === "tesoura") || (usuario === "tesoura" && computador === "papel") || (usuario === "papel" && computador === "pedra")){
        return "<p style='color:#2e7d32'> Parabéns, você venceu! </p>";
    } else {
        return "<p style='color:#c62828'> O computador venceu! </p>";
    }
}