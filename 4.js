var carro = 110; //carro saiu do ponto 0 com velocidade de 110km/h.
var caminhao = 80; //caminhao saiu do ponto 100 com velocidade de 80km/h.
var tempo = 100 / (carro + caminhao) + 0.1; //dividindo distância, pelas velocidades dos veículos, e adicionando os 10 minutos que o caminhão gasta nos pedágios.

var resultado = carro * tempo; // o resultado é a velocidade do carro dividido pelo tempo;
console.log(resultado);

//o
