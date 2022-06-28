function fibonacci(n) {
  if (n === 0 || n === 1) {
    return console.log(`O número ${n} pertence a sequencia de Fibonacci!`);
  }
  let numAnt = 1;
  let i = 2;
  let temp = 0;
  while (i <= n) {
    if (numAnt + i === n) {
      return console.log(`O número ${n} pertence a sequencia de Fibonacci!`);
    }
    temp = numAnt;
    numAnt = i;
    i += temp;
  }
  return console.log(`O número ${n} não pertence a sequencia de Fibonacci!`);
}

fibonacci(4);
