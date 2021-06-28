const fnValidar10 = () => {

    let xNom = document.getElementById("txtNomApe").value;
    if(xNom=="" || /^\s+$/.test(xNom)){
        alert("Falta NOMBRE Y APELLIDO...");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value
    if(xEdad=="" || /^\s$/.test(xEdad)){
        alert("Falta INGRESAR LA EDAD...");
        return false;
    }

    let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia = "";
	let eligioPreferencia = false;
    let contPref = 0
    let max = 2
	for(let i=0; i < elementoPref.length; i++){
		if(elementoPref[i].checked){
			valorElegidoPreferencia = elementoPref[i].value;
            eligioPreferencia = true;
            contPref++
		}  
	}

    if(!eligioPreferencia || contPref<max || contPref>max){
		alert("Eligia dos preferencias...");
		return false;
        
	}else{
		alert("Su preferencia eligida es " + valorElegidoPreferencia + valorElegidoPreferencia);
	}
}