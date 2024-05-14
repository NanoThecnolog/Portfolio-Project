var dieTemplate = function(type, roll){
  return `<span class="die die${type}"><img src="http://dnd.brianknappdeveloper.com/img/ui/icons/d${type}.png" alt="" /><span class="roll">${roll}</span></span>`;
}

function liveDie(type = 20, duration = 3000){
  var lastRoll = 0,
      $die;
	var roll;	
  if (type === "100") {
    // Se o tipo for 100 (D100), usar a função rollD100 para gerar o resultado
    roll = rollD100();
    $die = $(dieTemplate(type, roll));	  
  } else {
    // Caso contrário, usar a lógica original para gerar a rolagem
    roll = Math.ceil(Math.random() * type);
    $die = $(dieTemplate(type, roll));	  
  }

  $('.rolls').append($die);

  for (let i = 10; i < duration; i = i * 1.4) {
    setTimeout(function(){
      if (type === "100") {
        // Se o tipo for 100 (D100), usar a função rollD100 novamente para gerar o resultado
        roll = rollD100();		  
      } else {
        // Caso contrário, usar a lógica original para gerar a rolagem
        roll = Math.ceil(Math.random() * type);		  
      }

      // Assegurar a unicidade
      while (roll === lastRoll) {
        if (type === "100") {
          roll = rollD100();
        } else {
          roll = Math.ceil(Math.random() * type);
        }
      }

      lastRoll = roll;
      $die.find('.roll').html(roll);
      renderRollSum();
		
    }, i);
  }
}

// Função para rolar um D100
function rollD100() {
    var result = Math.floor(Math.random() * 10) + 1; // Gera um número entre 1 e 10
    return result * 10; // Multiplica o número por 10 para obter um múltiplo de 10
}


$('.dieButtonClear').on('click', function(){
  $('.rolls').html('');
  $('.results .sum').html('');
  $('.withModifier').html('');
});

$('.dieButton').on('click', function(){
  var type = $(this).attr('type');
  liveDie(type, 1200);
});

$('body').on('change', '.modifiers [name="modifier"]', function(){
  var modifier = parseInt($(this).val(), 10);
  if (modifier > 0) {
    showModifier(modifier);
  }
  else {
    hideModifier();
  }
});

$('.results .modifiers [name="modifier"]:not(.none)').on('change', function(){
renderRollSum();
});

//soma de todas as rolagens acontecendo
function getRollSum(){
  var total = 0;
  $('.die .roll').each(function(){
    total += parseInt($(this).html());
  });
  return total;
}
  
function renderRollSum(){
  var total = getRollSum();
  $('.results .sum').html(total);
  var modifier = parseInt($('.modifiers [name="modifier"]:checked').val());
  if (modifier > 0) {
    showModifier(modifier);
  }
  else {
    hideModifier();
  }
}

function showModifier(modifier) {
  $('.results').removeClass('no-modifier');
  if (modifier) {
    $('.results .modifier').html(modifier);
    $('.results .withModifier').html(modifier += getRollSum());
  }
}

function hideModifier() {
  $('.results').addClass('no-modifier');
}