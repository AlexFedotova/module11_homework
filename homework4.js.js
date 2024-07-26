// Задание 4//
function num(a, b) {
    let i = setInterval(() => {
      console.log(a);
      if (a === b) clearInterval(i);
      a++;
    }, 1000);
  }
  
  num(5, 15);
