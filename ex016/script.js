/* var primeiroValor = Number(prompt ("Digite um número:"))
var segundoValor = primeiroValor * 2
var terceiroValor = primeiroValor * 3
var quartoValor = primeiroValor * 4
var quintoValor = primeiroValor * 5
var sextoValor = primeiroValor * 6
var setimoValor = primeiroValor * 7
var oitavoValor = primeiroValor * 8
var nonoValor = primeiroValor * 9
var decimoValor = primeiroValor * 10
    
alert(`${primeiroValor} * ${segundoValor}
    
    
    
    `) */

  


        function pulaLinha() {
            document.write("<br><br>");        
        }
    
        function mostra(frase) {
            document.write(frase);
            pulaLinha();
        }
    
        var numeroTabuada = parseInt(prompt("Deseja ver o resultado da tabuada de qual número?"));
    
      
    
    
        mostra("<big>Tabuada do número " + numeroTabuada + ": </big>");
    
        for(var contador = 1; contador <= 10; contador++) {
            mostra(numeroTabuada + " x " + contador + " = " + (numeroTabuada * contador));
        }
    

    
 