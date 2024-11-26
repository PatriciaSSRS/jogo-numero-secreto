let listaSorteados = [];
let nLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentativas > 1? 'tentativas':'tentativa'; // fazendo corcodancia 
        let mensagemTentativas = `Voce descobriu numero secreto com ${tentativas} ${palavraTentativa}!`; // montando texto de tentativa 
        exibirTextoNaTela('p',mensagemTentativas); // exibindo ele no html 
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O numero secreto é menor');
        } else  {exibirTextoNaTela('p','O numero secreto é maior');}
        tentativas ++;
        limparCampo();
    }
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = persrInt(Math.random()*nLimite + 1);
    let quantidadeNaLista = listaSorteados.length;

    if (quantidadeNaLista == nLimite) {
        listaSorteados = [];
    }
    if (listaSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido();
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}



