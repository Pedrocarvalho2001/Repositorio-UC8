//Sistema para gerenciamento de peças em um sistema
// variantes e constantes

const correct = 10;

var nome = 'Pedro'
var sobrenome = 'Carvalho'
//--------------------------------------------
var pecasPa = 20;
var pecasMola = 5;
var pecasAco = 10;
//--------------------------------------------
const peso = 100

var pesoPa = 100
var pesoMola = 75
var pesoAco = 280
//-------------------------------------------
const nomePa = 2
const nomeMola = 4
const nomeAco = 3
//-------------------------------------------
console.log(   );
console.log('Olá ' + nome + ' ' + sobrenome );
console.log(   );
console.log('A nossa empresa compra seus produtos e materiais cadastrando as informações de cada um em nosso sistema');
console.log('Para efetuar o cadastro das peças existem 3 processos para a conclusão do produto.');
console.log(   );

console.log('--Etapa 1 -> Verificação de unidades em cada caixa: Cada caixa do produto deve conter um valor igual ou superior a 10 unidades.');
console.log(   );

console.log('--Etapa 2 -> Analise do peso de cada peça: o peso do produto deve ser igual ou superior a 100 gramas.');
console.log(   );

console.log('--Etapa 3 -> Sistema de analise dos nomes de cada produto: os nomes dos produtos devem ter mais de 3 caracteres.');
console.log(   );

console.log('----------------------------------------------------------------------------------------------');
console.log(   );

//----------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------

console.log('O Primeiro Produto que será analisado é a Pá:');
console.log(   );

// Peças de pá
console.log('Analise de Numero de unidades de Pá:');

if(pecasPa>correct){
    console.log( pecasPa + ' Peças: a caixa de possui mais de 10 unidades, Valor permitido');
}else{
    if(pecasPa<correct){
        console.log(pecasPa + ' Peças: só aceitamos 10 ou mais unidades, quantidade invalida');
    }else{
        console.log('Você possui 10 peças de em cada caixa, valor permitido');
    }
}

console.log(   );

//Peso da Pá
console.log('Analise do peso de cada unidade da Pá:');

if(pesoPa>peso){
    console.log( pesoPa + ' gramas: Peso maior que 100 gramas, acesso permitido');
}else{
    if(pesoPa<peso){
        console.log( pesoPa + ' gramas: acesso negado, o peso é inferior a 100 gramas');
    }else{
        console.log('Peso é igual a 100 gramas, acesso permitido');
    }
}

console.log(   );

// numero de caracteres da Pá
console.log('Analise da quantidade de caracteres da Pá');

if(nomePa>3){
    console.log('Nome superior a 3 caracteres, permitido');
}else{
    if(nomePa<3){
        console.log( nomePa + ' caracteres: quantidade não permitida');
    }else{
        console.log('quantidade equivalente a 3 caracteres, acesso permitido');
    }
}

console.log(   );
console.log('É necessario reformular o nome do produto Pá');
console.log(   );

console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------')
console.log(   );

console.log('O segundo produto que será encaminhado para analise será a Mola:');
console.log(   );

// Peças de Mola
console.log('Analise de Numero de unidades de Mola:');
if(pecasMola>correct){
    console.log( pecasMola + ' Peças: Valor permitido, a caixa de possui mais de 10 unidades');
}else{
    if(pecasMola<correct){
        console.log( pecasMola + ' Peças: quantidade invalida, só aceitamos 10 ou mais unidades');
    }else{
        console.log('Você possui 10 peças de em cada caixa, valor permitido');
    }
}

console.log(   );

//Peso da Mola
console.log('Analise do peso de cada unidade da Mola:');
if(pesoMola>peso){
    console.log( pesoMola + ' gramas: acesso permitido');
}else{
    if(pesoMola<peso){
        console.log( pesoMola + ' gramas: peso inferior a 100 gramas, acesso negado');
    }else{
        console.log('valor igual a 100 gramas, acesso permitido');
    }
}

console.log(   );

// numero de caracteres da Pá
console.log('Analise da quantidade de caracteres da Pá');
if(nomeMola>3){
    console.log('Nome superior a 3 caracteres, permitido');
}else{
    if(nomeMola<3){
        console.log( nomeMola + ' caracteres: quantidade não permitida');
    }else{
        console.log('quantidade equivalente a 3 caracteres, acesso permitido');
    }
}

console.log(   );
console.log('É necessario reformular a quantidade de peças em cada caixa e trocar as molas por outras com um peso maior');
console.log(   );

console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------')
console.log(   );

console.log('O Terceiro produto que será encaminhado para analise será o Aço:');
console.log(   );

// Peças de Aço
console.log('Analise de Numero de unidades de Aço:');
if(pecasAco>correct){
    console.log( pecasAco + ' Peças:Valor Aceito');
}else{
    if(pecasAco<correct){
        console.log( pecasAco + ' Peças: Valor invalido, só aceitamos mais de 10 unidades');
    }else{
        console.log('valor permitido, você possui exatamente 10 peças de em cada caixa');
    }
}

console.log(   )

//Peso da Mola
console.log('Analise do peso de cada unidade de Aço:');
if(pesoAco>peso){
    console.log('Peso superior a 100 gramas, acesso permitido');
}else{
    if(pesoAco<peso){
        console.log( pesoAco + ' gramas: valor não permitido');
    }else{
        console.log('valor equivalente a 100 gramas, acesso permitido');
    }
}

console.log(   )

// numero de caracteres do Aço
console.log('Analise da quantidade de caracteres de Aço:');
if(nomeAco>3){
    console.log('Nome superior a 3 caracteres, permitido');
}else{
    if(nomeAco<3){
        console.log( nomeAco + ' caracteres: quantidade não permitida');
    }else{
        console.log('quantidade equivalente a 3 caracteres, acesso permitido');
    }
}

console.log(   );
console.log('O produto atende todos os requisitos, Cadastro concluido');
console.log(   );

console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------')
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------')
console.log(   );
console.log('Muito Obrigado ' + nome + ' ' + sobrenome);
console.log('Até Breve');