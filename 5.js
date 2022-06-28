function inverterString(str) {
  var resultado = '';
  for (var i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  console.log(resultado);
}
inverterString('Inverter essa string');
