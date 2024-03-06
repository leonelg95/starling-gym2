window.onload = function() {
    renderTable();
 }
 

const form = document.getElementById('formregistro')
const nombreInp = document.getElementById('nombre_input' )
const apellidoInp = document.getElementById('apellido_input')
const direccionInp = document.getElementById('direccion_input')
const edadInp = document.getElementById('edad_input')
const dniInp = document.getElementById('dni_input')
const emailInp = document.getElementById('email_input')
const tablebody = document.getElementById('id-table-body')





let data = JSON.parse(localStorage.getItem('formData1')) || [];


form.addEventListener('submit', function (event)
{
  event.preventDefault();

    const nombre = nombreInp.value;
    const apellido = apellidoInp.value;
    const direccion = direccionInp.value;
    const edad = edadInp.value;
    const dni = dniInp.value;
    const email = emailInp.value;
    
   if(nombre && apellido && direccion && edad && dni && email){
    const newdata = {nombre,apellido,direccion,edad,dni,email};
    data.push(newdata);
    saveDataToLocalStorage();
    renderTable();
    form.reset();

   }


} )

  function saveDataToLocalStorage()
{
 localStorage.setItem("formData1",JSON.stringify(data))
}

function renderTable(){
    tablebody.innerHTML='';
    data.forEach(function(item,index)
    {

        const row = document.createElement('tr');
        const nombreCell = document.createElement('td');
        const apellidoCell = document.createElement('td');
        const direccionCell = document.createElement('td');
        const edadCell = document.createElement('td');
        const dniCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const actionCell = document.createElement('td');
        const editbtn = document.createElement('button');
        const deletebtn = document.createElement('button');


        nombreCell.textContent = item.nombre;
        apellidoCell.textContent = item.apellido;
        direccionCell.textContent = item.direccion;
        edadCell.textContent = item.edad;
        dniCell.textContent = item.dni;
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
        row.appendChild(direccionCell);
        row.appendChild(edadCell);
        row.appendChild(dniCell);
        row.appendChild(emailCell);
        row.appendChild(actionCell);
       
       tablebody.appendChild(row);


    })
} 
function editData(index){
    const item = data[index];
    nombreInp.value = item.nombre;
    apellidoInp.value = item.apellido;
    direccionInp.value = item.direccion;
    edadInp.value = item.edad;
    dniInp.value = item.dni;
    emailInp.value = item.email;
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