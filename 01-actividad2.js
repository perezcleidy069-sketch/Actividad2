const api="https://rickandmortyapi.com/api/character/"
const contenido=document.getElementById("personajes")

//Para que colocar el api y se pueda ver en la pantalla y tambien para poder realizar el flip card utilize la misma 

async function obtenerApi() {
    try{
        const respuesta= await fetch(api)
        const datos= await respuesta.json()
        const personajes=datos.results.slice(0,20);
        const resultado=personajes.map(a=>`
            <div class="card">  
                <div class="card__interior">
                    <div class="persona">
                        <h2><strong>Nombre:</strong>${a.name}</h2>
                        <img src="${a.image}" alt="${a.name}">
                    </div>
                    <div class="cari">
                        <p><strong>Estado: </strong>${a.status}</p>
                        <p><strong>Especie: </strong>${a.species}</p>
                        <p><strong>Género: </strong>${a.gender}</p>
                        <p><strong>Origen: </strong>${a.origin.name}</p>
                    </div>
                </div>
            </div>`
        ).join('');
        contenido.innerHTML = resultado; 
    }
    catch(error){
        console.log(error)
    }
}
obtenerApi();

//Esto para buscar el pesonaje pero tambien para realizar realizar la animacion de espera

async function buscarPersonajes(){
    const inuput=document.getElementById("search");
    const valorInput=inuput.value.trim().toLowerCase();
    if(!valorInput)return


    //Esta parte es donde se realiza la animacion de espera
    contenido.innerHTML=`
        <div class="loader"></div>
        <p class="cargando-texto">Buscando a ${valorInput}...</p> 
    `;
    const url=new URL(`https://rickandmortyapi.com/api/character/?name=${valorInput}`)
    
    try{
        const res= await fetch(url);
        const resulto= await res.json();
        if(resulto.error){
            contenido.innerHTML=`<p class="error">No se encontraron resultados para "${valorInput}"</p>`;
            return;
        }
        const busqueda=resulto.results.map(a=>`
            <div class="card">  
                <div class="card__interior">
                    <div class="persona">
                        <h2><strong>Nombre: </strong>${a.name}</h2>
                        <img src="${a.image}" alt="${a.name}">
                    </div>
                    <div class="cari">
                        <p><strong>Estado: </strong>${a.status}</p>
                        <p><strong>Especie: </strong>${a.species}</p>
                        <p><strong>Género: </strong>${a.gender}</p>
                        <p><strong>Origen: </strong>${a.origin.name}</p>
                    </div>
                </div>
            </div>`  
        ).join('');
        contenido.innerHTML=busqueda;
    }catch(error){
        console.log(error)
    }
}
document.querySelector("button").addEventListener("click", buscarPersonajes);
    






