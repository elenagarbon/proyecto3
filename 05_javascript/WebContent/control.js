function comprobar(){
	var primo= window.prompt("Dime numero primo del 1 al 10")
	if (primo == 1|| primo ==2 || primo==3){
		window.alert("Lo has conseguido")
	}
}



function viajar(){
	
	var ciudad= window.prompt("¿Donde quieres viajar?")
	switch (ciudad){
	case "Roma":
		console.log("Te cuesta 500€");
		break;
		
	case "Paris":
		console.log("Te cuesta 450€");
		break;
	case "París":
		console.log("Te cuesta 500€");
		break;
	case "Berlin":
		console.log("Te cuesta 385€");
		break;
	case "Berlín":
		console.log("Te cuesta 385€");
		break;
	
	default:
			window.alert("No viajamos a esa ciudad");
			}
}


