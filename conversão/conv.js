/**
 * Conversão
 * @author Thales Durães de Lima
 */

function converterTemp(){
    let Celsius 
    Celsius = parseFloat(frmTemp.vlrCelsius.value.replace(",", "."))
    Fahrenheit = Celsius * 1.8 + 32
    frmTemp.vlrFrahrenheit.value = Fahrenheit

}