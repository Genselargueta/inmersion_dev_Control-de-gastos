let listaNombreGastos = []; 
let listaValoresGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    
    listaNombreGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    actualizarListaGasto();
}

        function actualizarListaGasto() {
            const listaElementos = document.getElementById('listaDeGastos');
            const totalElemento = document.getElementById('totalGastos');
            let htmlLista ='';
            let totalGastos = 0;
            listaNombreGastos.forEach((elemento, posicion) => {
            const valorGasto = Number(listaValoresGastos[posicion]);
            htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;
                totalGastos += Number(totalGastos);

            });

            listaElementos.innerHTML = htmlLista;
            totalElemento.innerHTML = totalGastos.toFixed(2);
            limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

    function eliminarGasto(posicion){
        listaNombreGastos.splice(posicion, 1);
        listaValoresGastos.splice(posicion, 1);
        actualizarListaGasto();
    }