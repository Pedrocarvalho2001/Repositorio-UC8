//Sistema que representa o fluxograma em JavaScript
//Sistema de nome e sobrenome

var anoAtual = 2021;
var vagas = 100;

console.log('Boa Semana, estamos organizando um evento para o publico maior de 18 anos');
console.log('O evento será na rua fulano, N* 145 as 19:30')

var nome = 'pedro';
var sobrenome = 'carvalho';
var anoBorn = 2001;
var idade = anoAtual - anoBorn;

console.log('Seu nome é ' + nome + ' ' + sobrenome);
console.log('você tem ' + idade + ' anos.');

//Processo de verificação de idade

if(18 < idade){
    console.log('Cadastro aceito, você possui mais de 18 anos');
}else{
    if(18 > idade){
        console.log('Acesso negado, você possui menos de 18 anos');
}else{
    if(idade = 18){
        console.log('Acesso aceito, você possui 18 anos');
    }
}
}

// Consulta de lista de Participantes

var vagasRestantes = vagas - 1;

console.log('estamos consultando o numero de vagas restantes');
console.log('Atualmente temos ' + vagas + ' vagas restantes.');
console.log('Cadastro concluido');
console.log('Vagas restantes: '+ vagasRestantes);

