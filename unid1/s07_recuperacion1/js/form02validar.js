function fnValidar02()
{ 
	var numero =  document.getElementById("txtNum").value;
	if(numero=="" || /^\s+$/.test(numero)){
		alert("Ingrese Numero...");
        return false;
	}


	var genero = document.getElementById("selcGen").value;
    if(genero=="")
    {
        alert("Seleccione un Genero...");
        return false;
    }



	var elemPref = document.getElementsByName("prefer[]");
    var cont = 0
    for(var i=0; i<elemPref.length; i++){
        if(elemPref[i].checked){
            cont++
        }
    
    }

	
    if(cont != 3){
        alert("Elija 3 preferencias... UD. Ha elegido " +cont);
        return false;
    }
	



	/// Caso contrario ///
	return true;
}