function verTablas(turnoElegido, generoElegido, mtzAlumnos)
{
	
	orden=0;

	t01 = "<table>";
	t01 += "<tr>";
	t01 += "<th class='titulo' colspan='4'>Datos personales</th>";
	t01 += "</tr>";

	t01 += "<tr>";
    t01 += "<th>No.</th> <th>Turno</th> <th>Apellidos y Nombres</th> <th>Genero</th>";
    t01 += "</tr>";
	
	if(mtzAlumnos.length > 0){
        for(var i=0; i<mtzAlumnos.length; i++){ 
            mtzGenero = mtzAlumnos[i][4];     //Genero
            mtzTurno = mtzAlumnos[i][3];          //Turno
            if(mtzGenero == generoElegido && mtzTurno == turnoElegido){
                orden++;
                apeNom = mtzAlumnos[i][2] +", "+mtzAlumnos[i][1];
                genero = fnGenero(mtzAlumnos[i][4]);
				turno = fnTurno(mtzAlumnos[i][3]);

                t01 += "<tr>";
                t01 += "<td>"+orden+"</td> <td>"+turno+"</td> <td>"+apeNom+"</td> <td>"+genero+"</td>";
                t01 += "</tr>";
               
            }
        }
    }


	t01 += "<table>";

	document.getElementById("marco").innerHTML = t01;
}

function fnGenero(xGenero){
	if(xGenero=="M"){
        return "Masculino";
    } else if(xGenero == "F"){
        return "Femenino"
    }
	
} 

function fnTurno(xTurno)
{
	if(xTurno=="M"){
        return "Dia";
    } else if(xTurno == "N"){
        return "Noche"
    }	
}

function borrarMarco(){
	document.getElementById("marco").innerHTML = "Resutado borrado..."
}