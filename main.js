function processar() {
  var idade = parseFloat(document.getElementById('idade').value);
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);

  if (isNaN(idade) || isNaN(peso) || isNaN(altura)) {
    alert('Por favor, preencha todas as informações corretamente.');
    return;
  }

  var imc = peso / (altura * altura);
  document.getElementById('imc').value = imc.toFixed(2);

  var totalPlano1 = 100 + (idade * 10 * (imc / 10));
  var totalPlano2 = (150 + (idade * 15)) * (imc / 10);
  var totalPlano3 = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

  document.getElementById('planoAbasico').innerHTML = 'R$ ' + totalPlano1.toFixed(2);
  document.getElementById('planoAstandard').innerHTML = 'R$ ' + totalPlano2.toFixed(2);
  document.getElementById('planoApremium').innerHTML = 'R$ ' + totalPlano3.toFixed(2);

  var fcomorbidade
  var resultadoA
  var resultadoB
  
  if (imc <= 18.5) {
     fcomorbidade = 10
  }
  
  if (imc >= 18.5 && imc <= 24.9) {
     fcomorbidade = 1
  }
  
  if (imc >= 25 && imc <= 29.9) {
     fcomorbidade = 6
  }
  
  if (imc >= 30 && imc <= 34.9) {
     fcomorbidade = 10
  }
  
  if (imc >= 35 && imc <= 39.9) {
     fcomorbidade = 20
  }
  
  if (imc >= 40) {
     fcomorbidade = 30
  }

  var totalPlano4 = 100 + (fcomorbidade * 10 * (imc / 10));
  var totalPlano5 = (150 + (fcomorbidade * 15)) * (imc / 10);
  var totalPlano6 = (200 - (imc * 10) + (fcomorbidade * 20)) * (imc / 10);

  document.getElementById('planoBbasico').innerHTML = 'R$ ' + totalPlano4.toFixed(2);
  document.getElementById('planoBstandard').innerHTML = 'R$ ' + totalPlano5.toFixed(2);
  document.getElementById('planoBpremium').innerHTML = 'R$ ' + totalPlano6.toFixed(2);

  if ( totalPlano1 < totalPlano2 && totalPlano1 < totalPlano3) {
    resultadoA = 'Entre os planos ofertados pela empresa Sáude Vital, o plano mais vantajoso para suas condições é o Plano Básico'
  }

  else if ( totalPlano2 < totalPlano1 && totalPlano2 < totalPlano3) {
    resultadoA = 'Entre os planos ofertados pela empresa Sáude Vital, o plano mais vantajoso para suas condições é o Plano Standard'
  }

  else {
    resultadoA = 'Entre os planos ofertados pela empresa Sáude Vital, o plano mais vantajoso para suas condições é o Plano Premium'
  }  

  document.getElementById('compararA').innerHTML = resultadoA

  if ( totalPlano4 < totalPlano5 && totalPlano4 < totalPlano6) {
    resultadoB = 'Entre os planos ofertados pela empresa Bem cuidar, o plano mais vantajoso para suas condições é o Plano Básico'
  }

  else if ( totalPlano5 < totalPlano4 && totalPlano5 < totalPlano6) {
    resultadoB = 'Entre os planos ofertados pela empresa Bem cuidar, o plano mais vantajoso para suas condições é o Plano Standard'
  }

  else {
    resultadoB = 'Entre os planos ofertados pela empresa Bem cuidar, o plano mais vantajoso para suas condições é o Plano Premium'  }  

  document.getElementById('compararB').innerHTML = resultadoB
}