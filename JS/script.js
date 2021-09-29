//converter fahrenheit e celsius
function medidaF(){
    var celsius = parseFloat(document.getElementById("c").value);
    
    var medida = (celsius * 1.8) + 32;
      
      var notaFixada = medida.toFixed(1);
      
      var resultado = document.getElementById('resultado-1');
      resultado.innerHTML = notaFixada;
    }
      
    function medidaC(){
    var fahrenheit = parseFloat(document.getElementById("f").value);
      
    var medida = (fahrenheit - 32) / 1.8;  
    
    var notaFixada = medida.toFixed(1);
      
    var resultado = document.getElementById('resultado-1');
      resultado.innerHTML = notaFixada;
    
    }

//converter dolar e bitcon para real

function cambioDolar() {
    var dolar = document.getElementById("dolar");
    var valor = dolar.value;
    var valorDolar = parseFloat(valor);
  
    var cambio = valorDolar * 5;
  
    var resultado = document.getElementById("resultado-2");
    resultado.innerHTML = "R$ " + cambio;
  }
  
  function cambioBitcoin() {
    var bitcoin = document.getElementById("bitcoin");
    var valor = bitcoin.value;
    var valorBitcoin = parseFloat(valor);
  
    var cambio = valorBitcoin * 25077606;
  
    var resultado = document.getElementById("resultado-2");
    resultado.innerHTML = "R$ " + cambio.toLocaleString("pt-BR");
  }

//ano-luz em km

function distancia() {
    var quilometragem = document.getElementById("km");
    var valor = quilometragem.value;
    var quilometragemValor = parseFloat(valor);
  
    var valorEmLuz = quilometragemValor * 9460800000000;
  
    var resultado = document.getElementById("resultado-3");
    resultado.innerHTML = valorEmLuz.toLocaleString("pt-BR");
  }
  
  