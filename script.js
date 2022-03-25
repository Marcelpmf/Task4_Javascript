// Q.1 1

 let nome = prompt("Digite seu nome");
 alert("Você se chama: " + nome);

 console.log(nome) 

//-----------------------------------------------------------------------------------------------//

// Q.2 2

 let n1 = parseInt(prompt("Escreva o 1º número: "));
 let n2 = parseInt(prompt("Escreva o 2º número: "));

 console.log(n1 + n2);

 let soma = (n1 + n2);

 alert("Soma dos números: " + soma);

//-----------------------------------------------------------------------------------------------//

// Q.3 3

 let n1 = parseInt(prompt("Digite a 1º nota: "));
 let n2 = parseInt(prompt("Digite a 2º nota: "));

 console.log((n1 + n2)/2);

 let media = (n1+n2) /2;

 alert("A média foi: "+ media);

//-----------------------------------------------------------------------------------------------//

// Q.4 4

 let nasc = parseInt(prompt("Digite o ano de seu nascimento: "));
 const anoat = 2022;

 console.log (anoat-nasc)

 let idade = (anoat-nasc);

 alert("Idade: "+ idade);

//-----------------------------------------------------------------------------------------------//

// Q.5 5

 let vh = parseInt(prompt("Valor da hora: "));
 let ht= parseInt(prompt("Quantidade de horas trabalhadas no mês: "));

 console.log (vh*ht)

 let salario = (vh * ht);

 alert("Valor a ser recebido: R$"+ salario);

//-----------------------------------------------------------------------------------------------//

// Q.6 6

 let grausfa = parseInt(prompt("Digite a temperatura em F (Fahrenheit): "));

 console.log (C = 5 * ((grausfa-32) / 9))

 let grausc = 5 * ((grausfa-32) / 9);

 alert ("Em celsius: "+ grausc + "°C");


//-----------------------------------------------------------------------------------------------//

//Estrutura de decisão Q.1 7

 let n1 = parseInt(prompt("Digite o 1° número: "));
 let n2 = parseInt(prompt("Digite o 2° número: "));

 if (n1 > n2) {
    alert ("O maior é o primeiro: "+n1);
 } else{
   alert ("O maior é o segundo: "+n2);
}

//-----------------------------------------------------------------------------------------------//

// Estrutura de decisão Q.2 8

let num=parseInt(prompt("Digite um número inteiro positivo ou negativo: "));

if (num <0){
    alert ("Negativo");
} else {
    alert ("Positivo");
}

//-----------------------------------------------------------------------------------------------//

// Estrutura de decisão Q.3 9

var sexo = prompt( "Digite seu sexo (F ou M): " );

if (sexo == 'F'){
   alert("Feminino");
} else if (sexo =='M'){
   alert("Masculino");
} else{    alert("Invalido");
}
}

//-----------------------------------------------------------------------------------------------//

// Estrutura de decisão Q.4 10

let n1 = parseInt(prompt("Digite a 1ª nota: "));
let n2 = parseInt(prompt("Digite a 2ª nota: "));

let media = (n1+n2) /2;

if (media >= 7 ){
    alert("Aprovado");

}

else if (media = 10 && media >= 7){
    alert ("Aprovado com distinção");
}

else{
   alert ("Reprovado");

//-----------------------------------------------------------------------------------------------//

// Estrutura de decisão Q.5 11

let n1 = parseInt(prompt("Digite o 1° número: "));
let n2 = parseInt(prompt("Digite o 2° número: "));
let n3 = parseInt(prompt("Digite o 3° número: "));

if (n1 > n2) {
  alert ("O maior é o primeiro: "+n1);
}else if (n1 < n2) {
   alert ("O maior é o segundo: "+n2);
} else {
   alert ("O maior é o terceiro: "+n3);
}

//-----------------------------------------------------------------------------------------------//


// Estrutura de decisão Q.6 12

let n1 = parseInt(prompt("Digite o 1° número: "));
let n2 = parseInt(prompt("Digite o 2° número: "));

if (n1 % 2 === 0){
    alert("1º número é par");

} else if (n1 % 2 !== 0){
    alert("1º número é ímpar");
} 

if (n2 % 2 === 0){
    alert("2º número é par.");
}
else if (n2 % 2 !== 0){
    alert("2º número é ímpar.");
} 

//-----------------------------------------------------------------------------------------------//

// Estrutura de repetição Q.1 13

while (true) {

    let n = parseFloat(prompt("Digite um valor entre 0 e 10: "));
  
  if (n >= 0 && n <= 10) {
     alert(n);
     break;

    } else {
     alert("Nota inválida");
    }
  }

//-----------------------------------------------------------------------------------------------//

// Estrutura de repetição Q.2 14

//A diferença entre var e let é o escopo das variáveis. 
//As variáveis declaradas com let têm escopo de instrução, bloco ou expressão e as 
//declaradas com var têm escopo global ou escopo de função

//-----------------------------------------------------------------------------------------------//

// Estrutura de repetição Q.3 15

do {
    var nome = prompt("Digite seu nome: ");
    var senha = prompt("Digite sua senha: ");
  
   if (nome == senha) {
     alert("Nome e senha devem ser distintos");
   }
 } while (nome == senha);


//-----------------------------------------------------------------------------------------------//

// Estrutura de repetição Q.4 16

for (let i = 1; i <= 20; i++) {
   console.log(i);
 }

//-----------------------------------------------------------------------------------------------//

// Estrutura de repetição Q.5 17

//function maior(){
    var num1 = prompt("numero1");
    var num2 = prompt("numero2");
    var num3 = prompt("numero3");
    var num4 = prompt("numero4");
    var num5 = prompt("numero5");       

    var maior = num1;

    if(num2 > maior)
     maior = num2;
    if(num3 > maior)
     maior = num3;
    if(num4 > maior)
     maior = num4;
    if(num5 > maior)
     maior = num5;

    alert("Maior: "+maior);
   }

   // ???
//-----------------------------------------------------------------------------------------------//

// Estrutura de repetição Q.6 18

var soma = 0;
let media = 0;

for (let i = 1; i < 6; i++) {
  let numero = parseInt(prompt("Digite o " +i+ "º número"));
  soma += numero;
}

media = soma / 5;

alert("A soma dos cinco números é: " + soma);
alert("A media dos cinco números é: " + media);

//-----------------------------------------------------------------------------------------------//

// Estrutura de repetição Q.7 19

for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      console.log(i);
   }
 }

//-----------------------------------------------------------------------------------------------//

// Estrutura de repetição Q.8 20

var tabuada = parseInt(prompt("Digite um número qualquer no qual queira ver a tábuada: "));
     for (let i = 1; i <= 10; i++) {
      console.log(tabuada + " x " + i + " = " + (tabuada*i));
 }

//-----------------------------------------------------------------------------------------------//

// Vetores Q.1 21

let lista = [1, 5, 3, 2, 10];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}


//-----------------------------------------------------------------------------------------------//

// Vetores Q.2 22

 let lista = [1,2,3,4,5,6,7,8,9,10]

 for(i = lista.length-1; i >= 0; i--){
    console.log("Numero: "+ lista[i]);
 }

//-----------------------------------------------------------------------------------------------//

// Vetores Q.3 23

var notas = [];
var soma = 0;
var media = 0;

for (let i = 1; i < 5; i++) {
  notas.push(parseFloat(prompt("Digite a "+i+"ª nota:")));
  soma += notas[i];
}

media = soma / 4;
alert("As notas são: " + notas + "e média das notas igual a: " + media);


