//variaveís: valores que são guardados em locais reutilizaveís 
// ver nome = lana
// nome = luisa
// const numero = 
// numero = nao vai deixar
//let == var
// var eu consigo acessar e modificar qualquer lugar do codigo
// let eu só consigo acessar e modificar do mesmo bloco {}
//var = roupa de sair.. vc pode sair de casa ou dormir com essa roupa
//let = pijama... vc pode dormir com ele mas é estranho sair com ele na rua


/*
Sistema de Cadastro de Peças
OK -  Permitir o cadastro da peça somente se ela pesar mais de 100g.
ok Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem: lista de peças está lotada.
ok Validar se o nome da peça possui mais de 3 caracteres.
*/

let peso = 50
if(peso<100){
    console.log("A peça deve ter no minimo 100g")
}else{
console.log("A peça possui o tamanho adequado")
}

var listaDePecas = ["Farol","Motor","Cambio","Painel","Cabeçote","Radiador"]
if(listaDePecas.length <10){
    //é possível cadastrar
    console.log("É possível cadastrar mais!!")
} else{
    console.log("Não vai dar não, acabou o espaço")
}



let nomepeca = "motor"
if(nomepeca.length>3){
console.log("nome da peça adequado")
}else{
    console.log("o nome da peca deve ter mais que 3 carcteres, digite o numero adquado")
}

