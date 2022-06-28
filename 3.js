function questao3(n) {
  switch (n) {
    case 'a':
      var num = 1;
      while (num < 9) {
        num += 2;
        console.log(num);
      }
      break;
    case 'b':
      var num = 2;
      while (num < 128) {
        num *= 2;
        console.log(num);
      }
      break;
    case 'c':
      var num = 0;
      for (var i = 0; i <= 7; i++) {
        console.log(num * num);
        num++;
      }
      break;
    case 'd':
      var num = 2;
      for (var i = 0; i <= 4; i++) {
        console.log(num * num);
        num += 2;
      }
      break;
    case 'e':
      var num = 1;
      var numAnt = 0;
      temp = 1;
      for (var i = 0; i <= 6; i++) {
        console.log(temp);
        temp = num + numAnt;
        numAnt = num;
        num = temp;
      }
      break;
    default:
      console.log('Informe um valor');
  }
}

questao3('e');
