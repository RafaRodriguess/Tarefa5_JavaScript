function calcularValorCarro(){
    var custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    var percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
    var percImposto = parseFloat(document.getElementById('percImpostos').value);
    var resultado = document.getElementById('resultado');

    
    if (isNaN(custoFabrica) || isNaN(percDistribuidor)|| isNaN(percImposto)){
        let aviso = 'Insira os valores'
        resultado.innerHTML = aviso;
    }else{
        var custoFinal = custoFabrica + (custoFabrica * (percDistribuidor/100))+(custoFabrica * (percImposto/100))
        resultado.innerHTML = 'Valor final: ' + custoFinal.toFixed(2);
    }

}

//custo final = custo de fábrica + (custo de fábrica * percentual
// do distribuidor) + (custo de fábrica * percentual de impostos)