$(document).ready(function(){

    $("#bEnviar").click(function(){
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();
    
        if(nombre == ""){
            $("#lnombre").css('color', 'red');
            $("#lapellidos").css('color', 'red');
            return false;
             
        }else{
            $("#lnombre").css('color', 'black');
        
        if(apellidos == ""){
            $("#lapellidos").css('color', 'red');
            return false;

        }else{
            $("#lapellidos").css('color', 'black');
            }
        }
    });
    });