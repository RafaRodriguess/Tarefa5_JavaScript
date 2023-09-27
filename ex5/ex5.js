function receberDados(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
}


function calcular(opcao){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var resultadoOperacao = document.getElementById('resultado');
    var resultado;

    switch (opcao){
        case 'soma':
            resultado = soma(valor1, valor2);
            break;
        case 'subtracao':
            resultado = subtracao(valor1, valor2);
            break;
        case 'divisao':
            resultado = divisao(valor1, valor2);
            break;
        case 'multiplicacao':
            resultado = multiplicacao(valor1, valor2)
            break;
            
        default:
            resultado = 'opcao invalida';
            break;
    }
        resultadoOperacao.innerHTML =  resultado;
}






function soma(valor1, valor2){
    return (valor1 + valor2)
}
function subtracao(valor1, valor2){
    return (valor1 - valor2)
}
function divisao(valor1, valor2){
    return (valor1 / valor2)
}
function multiplicacao(valor1, valor2){
    return (valor1 * valor2)
}