const api="https://rickandmortyapi.com/api/character/"
const contenido=document.getElementById("personajes")

async function obtenerApi(api, contenido) {
    try{
        const respuesta= await fetch(api)
        const datos= await respuesta.json()
        datos.results.forEach(personajes => {
            const card=document.createElement("div")
            card.className="person"
            card.innerHTML=`
            <h2>${personajes.name}</h2>
            <img src="${personajes.image}" alt="${personajes.name}">`
            ;contenido.appendChild(card)
            
        });   
    }
    catch(error){
        console.log(error)
    }
}

obtenerApi(api, contenido);