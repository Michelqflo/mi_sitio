const fnValidar02 = () => {
	let xPreferecia = document.getElementById("preferencias").value;
    if(xPreferecia=="" || /^\s+$/.test(xPreferecia)){
        alert("Falta seleccionar preferencia...");
        return false;
    } 

    let xMes = document.getElementById("mes").value;
    if(xMes==""){
        alert("Falta seleccionar mes actual...");
        return false;
    }

    ///Caso contrario///
    return true;
}