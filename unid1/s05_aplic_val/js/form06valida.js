function fnValidar06()
{
	var xGenero = document.getElementById("lstGenero").value;
    if(xGenero=="")
    {
        alert("Seleccione GENERO...");
        return false;
    } 
    var xResult = document.getElementById("txtResult").value;
    if(xResult=="" || xResult==0)
    {
        alert("Revice... Resultado ¿0 o VACIO?");
        return false;
    }
    /// Caso contrario///
    return true;
}

function verConteo(genero, mtzAlumnos)
{
	contadorGenero = 0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[4]==genero){
                contadorGenero++;
            }
            
        });
        //Por que es equivalente
/*      for(var i=0; i< mtzAlumnos.length; i++){
            mtzTurno = mtzAlumnos[i][3];    //Turno
            if(mtzTurno == turno){
                contadorTurno++;
            }
        }*/

    }
    document.getElementById("txtResult").value = contadorGenero;

}