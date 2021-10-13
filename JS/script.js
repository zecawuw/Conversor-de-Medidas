//converter fahrenheit e celsius

function apagar(){
  var resultado1 = document.getElementById('resultado-1');
  resultado1.innerHTML = ''

  var resultado2 = document.getElementById('resultado-2');
  resultado2.innerHTML = ''
  
  var resultado3 = document.getElementById('resultado-3');
  resultado3.innerHTML = ''
}

function medidaF(){
    var celsius = parseFloat(document.getElementById("c").value);
    
    var medida = (celsius * 1.8) + 32;
      
      var notaFixada = medida.toFixed(1);
      
      var resultado = document.getElementById('resultado-1');
      resultado.innerHTML = notaFixada;

      document.getElementById("c").value = '';

      setTimeout(apagar, 5000)
    
    }


      
    function medidaC(){
    var fahrenheit = parseFloat(document.getElementById("f").value);
      
    var medida = (fahrenheit - 32) / 1.8;  
    
    var notaFixada = medida.toFixed(1);
      
    var resultado = document.getElementById('resultado-1');
      resultado.innerHTML = notaFixada;

      document.getElementById("f").value = '';

      setTimeout(apagar, 5000)

    
    }

//converter dolar e bitcon para real
let USD = 'https://economia.awesomeapi.com.br/last/USD-BRL';
// let EUR = 'https://economia.awesomeapi.com.br/last/EUR-BRL'
let BTC = 'https://economia.awesomeapi.com.br/last/BTC-BRL'

function cambioDolar() {
    var dolar = document.getElementById("dolar");
    var valor = dolar.value;
    var valorDolar = parseFloat(valor);

    fetch(USD)
    .then((res)=>{
        return res.json()
    })

    .then((data)=>{
        let bid = data.USDBRL.bid;

        let resultado = `R$  ${bid * valorDolar}`
        document.getElementById('resultado-2').innerHTML = resultado
    })

    document.getElementById("dolar").value = '';

  
    setTimeout(apagar, 5000)


  }

  function cambioBitcoin() {
    var bitcoin = document.getElementById("bitcoin");
    var valor = bitcoin.value;
    var valorBitcoin = parseFloat(valor);
    
    fetch(BTC)
    .then((res)=>{
        return res.json()
    })

    .then((data)=>{
        let bid = data.BTCBRL.bid;

        let resultado = `R$  ${bid * valorBitcoin.toLocaleString("pt-BR")}`
        document.getElementById('resultado-2').innerHTML = resultado
    })

    document.getElementById("bitcoin").value = '';

    setTimeout(apagar, 5000)


  }

//ano-luz em km

function distancia() {
    var quilometragem = document.getElementById("km");
    var valor = quilometragem.value;
    var quilometragemValor = parseFloat(valor);
  
    var valorEmLuz = quilometragemValor * 9460800000000;
  
    var resultado = document.getElementById("resultado-3");
    resultado.innerHTML = valorEmLuz.toLocaleString("pt-BR");
  
    document.getElementById("km").value = '';

    setTimeout(apagar, 5000)


  }

  
  