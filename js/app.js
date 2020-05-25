

var startGameDiv = document.querySelector('.start-game');
var contentGame = document.querySelector('.content-game');
var questions = document.querySelector('.questions');
var containerGame = document.querySelector('.container-game');

var intervalo
function start() {
  document.querySelector('.spinner-border').style.display = 'block';
  startGameDiv.style.display = 'none';
  var time = setTimeout(() => {
   
    document.querySelector('.spinner-border').style.display = 'none';

    $(document).ready(() => {
      $('.container-game').css({display: 'flex'}).hide().fadeIn(800);
      $('.content-game').css({display: 'block'})
      $('.questions').css({display: 'flex'}).hide().fadeIn(800);
      $('#modalStart').modal('show');
    });
    clearTimeout(time);
  }, 1000);

}


// Pegando os elementos
var palavra1 = document.querySelectorAll('.letter-1');
var palavra2 = document.querySelectorAll('.letter-2');
var palavra3 = document.querySelectorAll('.letter-3');
var palavra4 = document.querySelectorAll('.letter-4');
var palavra5 = document.querySelectorAll('.letter-5');
var palavra6 = document.querySelectorAll('.letter-6');
var palavra7 = document.querySelectorAll('.letter-7');
var palavra8 = document.querySelectorAll('.letter-8');
var palavra9 = document.querySelectorAll('.letter-9');
var palavra10 = document.querySelectorAll('.letter-10');
var palavra11 = document.querySelectorAll('.letter-11');
var palavra12 = document.querySelectorAll('.letter-12');
var palavra13 = document.querySelectorAll('.letter-13');
var palavra14 = document.querySelectorAll('.letter-14');
var palavra15 = document.querySelectorAll('.letter-15');
var palavra16 = document.querySelectorAll('.letter-16');


var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
var question4 = document.getElementById('question4');
var question5 = document.getElementById('question5');
var question6 = document.getElementById('question6');
var question7 = document.getElementById('question7');
var question8 = document.getElementById('question8');
var question9 = document.getElementById('question9');
var question10 = document.getElementById('question10');
var question11 = document.getElementById('question11');
var question12 = document.getElementById('question12');
var question13 = document.getElementById('question13');
var question14 = document.getElementById('question14');
var question15 = document.getElementById('question15');
var question16 = document.getElementById('question16');

var palavras = [
  'RAM',
  'REGISTRADORES',
  'ROM',
  'DMA',
  'EPROM',
  'DUAL CORE',
  'FLASH',
  'CS',
  'ADRESS BUS',
  'DATA BUS',
  'CPU',
  'ULA',
  'QUAD CORE',
  'I7',
  'MEMORIA DE MASSA',
  'I5'
];

var letras = [];
var pontos = 0;


function preenche(positionWord, element) {
  var tamanho = palavras[positionWord].substr().length;
  console.log(tamanho);
  for(var i = 0; i < tamanho; i++) {

    letras.push(palavras[positionWord].split(''))
    element[i].setAttribute('value', letras[0][i]);
    element[i].style.color = 'green'
    console.log(letras[0][i])
  }
  letras = []; 
  updatePoints(); 
}

// QUESTIONS

question1.addEventListener('focusout', () => {
  if(question1.value.toUpperCase() == palavras[0]) {
    pontos += 1; 
    preenche(0, palavra1)
    document.querySelector('.sp_question1').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question1').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });;
  }
});

question2.addEventListener('focusout', () => {
  if(question2.value.toUpperCase() == palavras[1]) {
    pontos +=1 ;
    preenche(1, palavra2)
    document.querySelector('.sp_question2').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question2').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question3.addEventListener('focusout', () => {
  if(question3.value.toUpperCase() == palavras[2]) {
    pontos += 1;
    preenche(2, palavra3)
    document.querySelector('.sp_question3').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question3').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question4.addEventListener('focusout', () => {
  if(question4.value.toUpperCase() == palavras[3]) {
    pontos += 1;
    preenche(3, palavra4)
    document.querySelector('.sp_question4').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question4').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question5.addEventListener('focusout', () => {
  if(question5.value.toUpperCase() == palavras[4]) {
    pontos += 1;
    preenche(4, palavra5);
    document.querySelector('.sp_question5').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question5').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });;
  }
});

question6.addEventListener('focusout', () => {
  if(question6.value.toUpperCase() == palavras[5]) {
    pontos += 1;
    palavras[5] = 'DUALCORE';
    palavras[5] = palavras[5].split("").reverse().join("");
    preenche(5, palavra6)
    document.querySelector('.sp_question6').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question6').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question7.addEventListener('focusout', () => {
  if(question7.value.toUpperCase() == palavras[6]) {
    pontos += 1;
    preenche(6, palavra7);
    document.querySelector('.sp_question7').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question7').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question8.addEventListener('focusout', () => {
  if(question8.value.toUpperCase() == palavras[7]) {
    pontos += 1;
    preenche(7, palavra8)
    document.querySelector('.sp_question8').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question8').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question9.addEventListener('focusout', () => {
  if(question9.value.toUpperCase() == palavras[8]) {
    pontos += 1;
    palavras[8] = 'ADRESSBUS'
    preenche(8, palavra9);
    document.querySelector('.sp_question9').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question9').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question10.addEventListener('focusout', () => {
  if(question10.value.toUpperCase() == palavras[9]) {
    pontos += 1;
    palavras[9] = 'DATABUS';
    preenche(9, palavra10);
    document.querySelector('.sp_question10').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question10').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question11.addEventListener('focusout', () => {
  if(question11.value.toUpperCase() == palavras[10]) {
    pontos += 1;
    preenche(10, palavra11)
    document.querySelector('.sp_question11').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question11').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question12.addEventListener('focusout', () => {
  if(question12.value.toUpperCase() == palavras[11]) {
    pontos += 1;
    preenche(11, palavra12);
    document.querySelector('.sp_question12').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question12').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question13.addEventListener('focusout', () => {
  if(question13.value.toUpperCase() == palavras[12]) {
    pontos += 1;
    palavras[12] = 'QUADCORE';
    preenche(12, palavra13);
    document.querySelector('.sp_question13').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question13').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question14.addEventListener('focusout', () => {
  if(question14.value.toUpperCase() == palavras[13]) {
    pontos += 1;
    preenche(13, palavra14);
    document.querySelector('.sp_question14').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question14').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question15.addEventListener('focusout', () => {
  if(question15.value.toUpperCase() == palavras[14]) {
    pontos += 1;
    palavras[14] = 'MEMORIADEMASSA';
    preenche(14, palavra15);
    document.querySelector('.sp_question15').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question15').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

question16.addEventListener('focusout', () => {
  if(question16.value.toUpperCase() == palavras[15]) {
    pontos += 1;
    preenche(15, palavra16);
    document.querySelector('.sp_question16').innerHTML += ' <i class="fas fa-check"></i>';
    document.querySelector('.sp_question16').style.color = 'green';
  } else {
    $(document).ready(() => {
      $('#wrongQuestionModal').modal('show')
    });
  }
});

function updatePoints() {
  document.getElementById('b_points').innerHTML = `${pontos}`;

  $(document).ready(() => {
    $('#modalPontos').modal('show')
  });

  if(pontos >= 16) {
    // alert('PARABÉNSSSS VOCÊ CONCLUIU O JOGO!!!!');
    $(document).ready(() => {
      $('#modalPontos').modal('show')
      $('#modalPontos .modal-body').html(`
        Parabéns você concluiu! Você ganhou: <span id="ponts-modal">${pontos}</span> ponto(s). <i class="far fa-laugh-wink"></i>
      `)
    });
    setTimeout(() => {
      location.reload();    
    }, 2000)
  }
}





// $(document).ready(() => {



//   $.inputA = function() {
    
      

//   }

//   console.log(letras)

//   // Iniciando o game
//   $('.btn-start').on('click', () => {
//     $('.start-game').css('display', 'none');

//     $('.content-game').css({display: 'block'});
//   });


// })