let listaNumerosSorteados = [];
let limiteLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();

function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Número Secreto!');
exibirTextoNaTela('p','Escolha um número entre 1 e 10:');
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor!');
        }
        else {
            exibirTextoNaTela('p','O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteLista + 1);
    let quantidadeLista = listaNumerosSorteados.length;

    if (quantidadeLista == limiteLista) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
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
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}










/**olaMundo();

olaUsuario(prompt(`Informe o seu nome:`));

let dobro = dobrar(prompt(`Informe um número para dobrarmos:`));
console.log(`O dobro do número é ${dobro}`);

let media = calcularMedia(parseInt(prompt('Vamos fazer uma média, informe o primeiro número')), parseInt(prompt('informe o segundo número:')), parseInt(prompt('informe o terceiro número')));
console.log(`A média entre eles é ${media}`);

let maiorNumero = maiorEntreEles(parseInt(prompt(`Agora vamos verificar o maior entre eles, informe o primeiro número:`)), parseInt(prompt(`Informe o segundo número:`)));
console.log(`O maior entre eles é o ${maiorNumero}`);

let numeroMultiplicado = multiplicacao(parseInt(prompt(`Informe um número para multiplicarmos por ele mesmo:`)));
console.log(`O número multiplicado por ele mesmo resulta em ${numeroMultiplicado}`);

function olaMundo(){
    console.log('Olá Mundo!');
}

function olaUsuario(nome){
    console.log(`Olá ${nome}`);
}

function dobrar(numero){
    return numero * 2;
}

function calcularMedia(numero1 , numero2 , numero3){
    return (numero1+numero2+numero3) / 3;
}

function maiorEntreEles(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

function multiplicacao(numero){
    return numero*numero;
}*/









/**let listaGenerica = [];
let linguagensDeProgramação = [ 'JavaScript','C','C++', 'Kotlin', 'Python'];

linguagensDeProgramação.push('Java');
linguagensDeProgramação.push('Ruby');
linguagensDeProgramação.push('GoLang');

console.log(linguagensDeProgramação);

let listaNomes = ['Arthur','Hugo','Wilber','Brian'];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[listaNomes.length - 1]); */