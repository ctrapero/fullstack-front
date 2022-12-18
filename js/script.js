var formulario = document.getElementById("formulario1");

    function validar(e) {
        var inputNombre = document.getElementById("nombre").value,
            inputApellidos = document.getElementById("apellidos").value;

        if (inputNombre == "") {
            e.preventDefault();
            document.getElementById('lnombre').style.color = "red";

        }if (inputApellidos == "") {
            e.preventDefault();
            document.getElementById('lapellidos').style.color = "red";
    
        }else{
            document.formulario1.submit();
        }

    }

formulario.addEventListener("submit", validar);

console.log("Hola Typescript");

function sumar (a,b) {
    return a + b;
}