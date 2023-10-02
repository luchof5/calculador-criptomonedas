const criptomonedasSelect = document.querySelector('#criptomonedas');

// Crear un Promise
const obtenerCriptomonedas = criptomeonedas => new Promise( resolve => {
    resolve(criptomeonedas);
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
})

function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => obtenerCriptomonedas(resultado.Data) )
        .then( criptomeonedas => selectCriptomonedas(criptomeonedas) )
}

function selectCriptomonedas(criptomeonedas) {
    criptomeonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });
}