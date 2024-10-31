//let, const, var - são tipos de variaveis


let nome = "João";
let idade = 25;
let isAluno = true;
let altura = 1.75;

const pessoa = {nome:"Ana", idade: 22};
let aluno = {nome: "Luiz", idade: 25};
console.log("Nome: ", nome);
console.log(typeof nome);
console.log("let aluno: ", typeof aluno);
console.log("const pessoa: ", typeof pessoa);

let contador = 0; 
function incrementarContador(){
    contador++;
    document.getElementById("contador").textContent = contador;
}
function mudarCor(){
    document.body.style.backgroundColor = "#333"
}
function mostrarHora(){
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2,'0');
    document.getElementById("hora").textContent = horas;
}
//contador regressivo
let intervalo;
let contagem = 10;
//variavel para controlar o intervalo

// função para iniciar a contagem
intervalo = setInterval(
    function() {
        document.getElementById("contadorRegressivo").textContent = contagem;
        contagem--;
        // quando a contagem chegar a 0, para o intervalo e exibe a mensagem
        if (contagem < 0){
            clearInterval(intervalo);
            document.getElementById("contadorRegressivo").textContent = "Tempo esgotado!";
        }
    }
, 1000); //1000 = 1 segundo