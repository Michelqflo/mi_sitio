const fnValidar04 = () => {

    let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia = "";

	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++){
		if(elementoPref[i].checked ){
			valorElegidoPreferencia1 = elementoPref[i].value;
			eligioPreferencia = true;
			
		}
	}


	if(!eligioPreferencia){
		alert("Eligia dos preferencias...");
		return false;
	}else{
		alert("Su preferencia eligida es " + valorElegidoPreferencia );
	}


	///Caso contrario ///
	return true;
}