/* ESCONDE ELEMENTOS DO FORMULÁRIO DE CADASTRO DE SUB-EQUIPE / ALTERNO */

$(document).ready(function(){

  $("#hidealuno").hide();

  $("#int").click(function(){

    $("#hidealuno").show();

  });
  
  $("#tv").click(function(){

    $("#hidealuno").hide();

  });

});
