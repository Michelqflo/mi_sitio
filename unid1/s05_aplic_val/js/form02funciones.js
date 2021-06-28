function fnValidar02()
{
  var xNombre = document.getElementById("txtNombres").value;
  if(xNombre == "" || /^\s+$/.test(xNombre)){
      alert("Falta nombre")
      return false;
  }

  var xApellido = document.getElementById("txtApellidos").value;
  if(xApellido == "" || /^\s+$/.test(xApellido)){
      alert("Falta apellido")
      return false;
  }

  var xDireccion = document.getElementById("txtDireccion").value;
  if(xDireccion == "" || /^\s+$/.test(xDireccion)){
      alert("Falta direccion")
      return false;
  }
  
  var xEdad = document.getElementById("txtEdad").value;
  if(xEdad == "" || /^\s+$/.test(xEdad)){
      alert("Falta edad")
      return false;
  }

  var fNac = document.getElementById("fecNac").value;
  if(fNac == "" || /^\s+$/.test(fNac)){
      alert("Falta fecha de nacimiento")
      return false;
  }

  
  


 

  return true;
}