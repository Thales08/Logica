/**
 * Conversão 
 * @author Thales Durães de Lima
 */

 function converterDolar(){
     let Real, Dolar, Resultado
     Real = parseFloat(frmConversao.valorReal.value.replace(",","."))
     Dolar = parseFloat(frmConversao.valorDolar.value.replace(",","."))
     Resultado = Dolar * Real
     frmConversao.valorResultado.value=Resultado
 }
