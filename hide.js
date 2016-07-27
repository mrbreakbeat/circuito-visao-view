/* ESCONDE ELEMENTOS DO FORMULÁRIO DE CADASTRO DE SUB-EQUIPE / ALTERNO */

$(document).ready(function(){

  $("#hidealuno").hide();
  $("#hidedados").hide();

  $("#int").click(function(){

    $("#hidealuno").show();
    $("#hidedados").hide();

  });

  $("#tv").click(function(){

    $("#hidealuno").hide();
    $("#hidedados").show();
  });

});
