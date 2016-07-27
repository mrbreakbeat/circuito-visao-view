/* ESCONDE ELEMENTOS DO FORMULÁRIO DE CADASTRO DE SUB-EQUIPE / ALTERNO */

$(document).ready(function(){

  $("#hidealuno").hide();
  $("#hidedados").hide();
  $("#hidecheckbox").hide();

  $("#int").click(function(){

    $("#hidealuno").show();
    $("#hidedados").hide();

  });

  $("#tv").click(function(){

    $("#hidealuno").hide();
    $("#hidedados").show();
  });

  $("#tipo").change(function(){

    var opSelected = $("#tipo option:selected").val();

    if(opSelected == 1){

        $("#hidecheckbox").hide();

    }else{

        $("#hidecheckbox").show();

    }

  });

});
