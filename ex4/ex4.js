function calcularTabuada(){
    const numero = document.getElementById("numero").value;
    document.getElementById("tabuada").innerHTML = '';

    for (let i = 1; i<= 10; i++){
        const resultado = numero * i;
        const mostrarTabuada = `${numero} x ${i} = ${resultado}`;
        document.getElementById("tabuada").innerHTML += mostrarTabuada + "<br>";
    }

}