const usuario = document.getElementById("Input-usuario")
const contraseña = document.getElementById("Input-contraseña")
const btnlogin = document.getElementById("btn-login1")

function login1()
{
  if (usuario.value === "Leonel" && contraseña.value === "1234")
  {
    window.location = "pages/homeuser.html"
  }
  


  else if (usuario.value === "Admin" && contraseña.value === "1234")
  {
    window.location = "pages/homeadmin.html"
  }
  else
  {
    alert("Datos Incorrectos")
    
   }
 
}


btnlogin.addEventListener('click',login1)
