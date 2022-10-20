

const url = 'http://localhost:3009/api/v1/cliente';
const titulo = document.getElementById('titulo');
const mn = location.pathname.split('/');
titulo.innerHTML= `${mn[3]}s`.toUpperCase();
const edit =  document.getElementById('clientesId');


const urls = (id)=> `http://localhost:3009/api/v1/cliente/${id}`;
const urlsAct = (id)=> `http://localhost:3009/api/v1/cliente/${id}`;


async function createCliente(){

// if (res.status !== 201){
//   const span = document.getElementById('err');
//   span.innerHTML=`el code es ${res.status} mensaje ${data.message}`
// }
  try {
    const form = document.getElementById('formular');
    const newCliente = new FormData(form);
    const nombreCliente = newCliente.get('clienomb');
    const datos = {clienomb:nombreCliente};

    const res = await fetch(url, {
    method: 'POST', // or 'PUT'
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(datos),
  })

      const data = await res.json();
      console.log('mensage' ,data.message || 'nada');

  } catch (error) {
    console.error(error);
  }


}


async function obtenerCliente(id){

  const res = await fetch(urls(id), {
    headers:{
      'Content-Type': 'application/json'
    }


})

const idCliente = document.getElementById('id');
const nomCliente = document.getElementById('cli');
const estCliente = document.getElementById('clieesta');


const data = await res.json();
console.log(data);
idCliente.value=data.clienit;
nomCliente.value=data.clienomb;

if(data.clieesta == 'I'){
  estCliente.value='I | Inactivo';
}else{
  estCliente.value='A | Activo';
}


}


async function actualizarCliente(){
  const form = document.getElementById('editForm');
  const selectEstado = document.getElementById('clieesta');
  const updateCliente = new FormData(form);
  const id = updateCliente.get('id')
  const nombre = updateCliente.get('cli')
  let estado = selectEstado.value
  console.log(id)
  if (estado == 'I | Inactivo'){
    estado = 'I';
  }
  else if(estado == 'A | Activo'){
    estado = 'A';
  }


  console.log(estado)
  const actCliente = {
    clienomb:nombre,
    clieesta:estado

  }
  const res = await fetch(urlsAct(id) ,{
    method:'PUT',
    body:JSON.stringify(actCliente),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }


  )
  console.warn(res);
  const data = await res.json();
  if (res.status !== 200){
    console.log('eiiei');

  }else{
    console.log('bajba')
    location.href =`/api/v1/cliente`
  }
}




const btnGuardar =  document.getElementById('btnCliente');
btnGuardar.addEventListener('click',createCliente);


