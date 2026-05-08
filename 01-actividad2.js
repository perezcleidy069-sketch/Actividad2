const api="https://rickandmortyapi.com/api/character/"
const contenido=document.getElementById("personajes")

let nombresPersonajes=[]

async function obtenerApi() {
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
obtenerApi();


async function segundoObtener(){
    try{
        const response= await fetch(api)
        const data= await response.json()
        data.results.forEach(a=>{
            const cara=document.createElement("div")
            cara.className="cari"
            cara.innerHTML=`
            <p>${a.status}</p>
            <p>${a.species}</p>
            <p>${a.gender}</p>
            <p>${a.origin.name}`
            contenido.appendChild(cara)
        })
    }
    catch(erro){
            console.log(error)
    }
}
segundoObtener();





function buscar(){
    let busco=document.getElementById("search").value.toLowerCase();
    if (busco.trim() === "")return;
    
    let encontrar=[];
    for (let i=0; i<nombresPersonajes.length; i++){
        if(nombresPersonajes[i].toLowerCase().includes(busco)){
            encontrar.push(nombresPersonajes[i]);
        }
    }
    document.getElementById("personajes").innerHTML="";
    if(encontrar.length >0){
        for(let i = 0; i<encontrar.length; i++){
            let dat=document.createElement("div");
            dat.className="personss";
            dat.textContent=encontrar[i];
            document.getElementById("personajes").appendChild(dat)
        }
    }
    else{
        let date=document.createElement("div")
        date.textContent="No se encuentra este personaje. Intentelo de nuevo" + busco;
        document.getElementById("personajes").appendChild(date)
    }
}
