window.onload = function() {
    renderTable();
 }
 
 const form = document.getElementById('formregistro')
 const nombreInp = document.getElementById('nombre_input' )
 const apellidoInp = document.getElementById('apellido_input')
 const telefonoInp = document.getElementById('telefono_input')
 const servicioInp = document.getElementById('servicio_input')
 const emailInp = document.getElementById('email_input')
 const fechaInp = document.getElementById('fecha_input')
 const tablebody = document.getElementById('id-table-body')
 
 
 
 
 
 let data = JSON.parse(localStorage.getItem('formData')) || [];
 
 
 form.addEventListener('submit', function (event)
 {
   event.preventDefault();
 
     const nombre = nombreInp.value;
     const apellido = apellidoInp.value;
     const telefono = telefonoInp.value;
     const servicio = servicioInp.value;
     const fecha = fechaInp.value;
     const email = emailInp.value;
     
    if(nombre && apellido && telefono && servicio && fecha && email){
     const newdata = {nombre,apellido,telefono,servicio,fecha,email};
     data.push(newdata);
     saveDataToLocalStorage();
     renderTable();
     form.reset();
 
    }
 
 
 } )
 
   function saveDataToLocalStorage()
 {
  localStorage.setItem("formData",JSON.stringify(data))
 }
 
 function renderTable(){
     tablebody.innerHTML='';
     data.forEach(function(item,index)
     {
 
         const row = document.createElement('tr');
         const nombreCell = document.createElement('td');
         const apellidoCell = document.createElement('td');
         const telefonoCell = document.createElement('td');
         const servicioCell = document.createElement('td');
         const emailCell = document.createElement('td');
         const fechaCell = document.createElement('td');
         const actionCell = document.createElement('td');
         const editbtn = document.createElement('button');
         const deletebtn = document.createElement('button');
 
 
         nombreCell.textContent = item.nombre;
         apellidoCell.textContent = item.apellido;
         telefonoCell.textContent = item.telefono;
         servicioCell.textContent = item.servicio;
         emailCell.textContent = item.email;
 
         editbtn.textContent = 'Editar'
         deletebtn.textContent = 'Eliminar'
 
         editbtn.classList.add('button', 'button--secondary')
         deletebtn.classList.add('button', 'button--tertiary')
 
         editbtn.addEventListener('click', function()
         {
             editData(index)
         })
        
         deletebtn.addEventListener('click', function()
         {
             deleteData(index)
         })
 
         actionCell.appendChild(editbtn);
         actionCell.appendChild(deletebtn);
 
 
         row.appendChild(nombreCell);
         row.appendChild(apellidoCell);
         row.appendChild(telefonoCell);
         row.appendChild(emailCell);
         row.appendChild(servicioCell);
       
         row.appendChild(fechaCell);
         row.appendChild(actionCell);
        
        tablebody.appendChild(row);
 
 
     })
 } 
 function editData(index){
     const item = data[index];
     nombreInp.value = item.nombre;
     apellidoInp.value = item.apellido;
     telefonoInp.value = item.telefono;
     emailInp.value = item.email;
     servicioInp.value = item.servicio; 
     fechaInp.value = item.fecha;
     data.splice(index,1);
     saveDataToLocalStorage();
     renderTable();
     
 }
 function deleteData(index)
 {
     data.splice(index,1);
     saveDataToLocalStorage();
     renderTable();
     
 }