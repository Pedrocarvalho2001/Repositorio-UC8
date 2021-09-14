// Sistema para calculo de uma quantidade de peças
const correct = 10;

var nome = 'Pedro'

var pecasPa = 20;
var pecasMola = 5;
var pecasAco = 10;

console.log(   );
console.log('Ola ' + nome + ' a nossa empresa compra peças e materiais');
console.log('Só aceitamos o cadastro em produtos com 10 ou mais unidades');
console.log(   );

console.log('----------------------------------------------------------------------------------------------');

// Produto 1: Peças de pá
console.log('Material 1: Peças pá');

if(pecasPa>correct){
    console.log( pecasPa + ' Peças: a caixa de possui mais de 10 unidades, Valor permitido');
}else{
    if(pecasPa<correct){
        console.log(pecasPa + ' Peças: só aceitamos 10 ou mais unidades, quantidade invalida');
    }else{
        console.log('Você possui 10 peças de em cada caixa, valor permitido');
    }
}

console.log('-----------------------------------------------------------------------------------------------');

// Produto 2: Peças de Mola
console.log(   );
console.log('Material 2: Peças Mola');

if(pecasMola>correct){
    console.log( pecasMola + ' Peças:Valor permitido, a caixa de possui mais de 10 unidades');
}else{
    if(pecasMola<correct){
        console.log( pecasMola + ' Peças:quantidade invalida, só aceitamos 10 ou mais unidades');
    }else{
        console.log('Você possui 10 peças de em cada caixa, valor permitido');
    }
}

console.log('-----------------------------------------------------------------------------------------------');

// Produto 3: Peças de Aço
console.log(   );
console.log('Material 3: Peças Aço');

if(pecasAco>correct){
    console.log( pecasAco + ' Peças:Valor Aceito');
}else{
    if(pecasAco<correct){
        console.log( pecasAco + ' Peças: Valor invalido, só aceitamos mais de 10 unidades');
    }else{
        console.log('valor permitido, você possui exatamente 10 peças de em cada caixa');
    }
}

console.log('----------------------------------------------------------------------------------------------');

console.log('----------------------------------------------------------------------------------------------');


// sistema de calculo de peso de cada unidade das pecas
const peso = 100

var pesoPa = 100
var pesoMola = 75
var pesoAco = 280

console.log('Referente ao peso só aceitamos peças com peso superior a 100 gramas');
console.log(  )


console.log('----------------------------------------------------------------------------------------------');


// Produto 1: Peso/Peças de pá
console.log(   );
console.log('Material 1: Peso pá');

if(pesoPa>peso){
    console.log( pesoPa + ' gramas: Peso maior que 100 gramas, acesso permitido');
}else{
    if(pesoPa<peso){
        console.log( pesoPa + ' gramas: acesso negado, o peso é inferior a 100 gramas');
    }else{
        console.log('Peso é igual a 100 gramas, acesso permitido');
    }
}

console.log('-----------------------------------------------------------------------------------------------');

// Produto 2: Peso/Peças de Mola
console.log(   );
console.log('Material 2: Peso Mola');

if(pesoMola>peso){
    console.log( pesoMola + ' gramas: acesso permitido');
}else{
    if(pesoMola<peso){
        console.log( pesoMola + ' gramas: peso inferior a 100 gramas, acesso negado');
    }else{
        console.log('valor igual a 100 gramas, acesso permitido');
    }
}

console.log('-----------------------------------------------------------------------------------------------');

// Produto 3: Peso/Peças de Aço
console.log(   );
console.log('Material 3: Peso Aço');

if(pesoAco>peso){
    console.log('Peso superior a 100 gramas, acesso permitido');
}else{
    if(pesoAco<peso){
        console.log( pesoAco + ' gramas: valor não permitido');
    }else{
        console.log('valor equivalente a 100 gramas, acesso permitido');
    }
}

console.log('-----------------------------------------------------------------------------------------------');

//Sistema de verificação dos nomes dos produtos




