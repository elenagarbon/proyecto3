function mostrar() {
	var inicio = parseInt(document.getElementById("inicio").value); //con value coges el valor de la caja
	var fin = parseInt(document.getElementById("fin").value); //parseInt para convertir a numero entero
	if (inicio < fin) {
		for (var i = inicio; i < fin; i++) {
			console.log(i);

		}
	} else {
		window.alert("Error");
	}
}

function calcular() {
	var unidad = document.getElementById("unidad").value;
	var precio = document.getElementById("precio").value;
	var resultado = unidad * precio;
	window.alert(resultado.toFixed(2)); //toFixed (2) redondee a dos decimales.
}

function comprobar() {
	var pin = document.getElementById("secreto").value;
	if (pin == 17) {
		window.alert("Numero correcto");
	} else {
		window.alert("numero incorrecto");
	}
}
