const fnValidar03 = () => {

	let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia = "";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].value;
			eligioPreferencia = true;
		}
	}

	let elementoEstado = document.getElementsByName("radEstado");
	let valorElegidoPreEstado = "";
	let elegioEstado = false;
	for(let i=0; i < elementoEstado.length; i++) {
		if(elementoEstado[i].checked){
			valorElegidoPreEstado = elementoEstado[i].value;
			elegioEstado = true;
		}
	}

	if(!eligioPreferencia){
		alert("Eligia una preferencia...");
		return false;
	}else{
		alert("Su preferencia eligida es " + valorElegidoPreferencia);
	}

	if(!eligioEstado){
		alert("Elija un estado civil...");
		return false;
	}else{
		alert("Su estado civil es " + valorElegidoPreEstado);
	}

	///Caso contrario ///
	return true;
}