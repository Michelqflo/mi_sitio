function fnValidar02()
{
	var XNombre = document.getElementById("txtTexto").value;
    if (XNombre=="" || /^\s+$/.test(XNombre))
    {
        alert("Escriba Texto...");
        return false;
    }

    var elemGenero = document.getElementsByName("rdGenero");
    var seleccionado = false;

    for(var i=0; i < elemGenero.length; i++)
    {
        if(elemGenero[i].checked)
        {
            seleccionado = true;
        }
    }

    if(!seleccionado){
        alert("Elija genero...");
        return false;
  }



    var elemPref = document.getElementsByName("chkPrefer[]");
    var valorEleg = "";
    var cont = 0
    var selecPref = false;
    for(var i=0; i<elemPref.length; i++){
        if(elemPref[i].checked){
            cont++
            valorEleg = elemPref[i].value;
            selecPref = true;
        
        }
    
    }

    //if (cont<2){
    //    alert("Error");
    //    return false;
    //}

    //if(cont != 2)
    if(cont<2 || cont>2){
        alert("Elija dos preferencias...UD. ha elegido " +cont);
        return false;
    }else{
        alert("Su preferencia es: ");
    }

    







    

    return true;
}