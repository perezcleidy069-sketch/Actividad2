const api="https://rickandmortyapi.com/api/character/"
const contenido=document.getElementById("personajes")
fetch(api)
.then((response)=> response.json())
.then((data)=>{
    data.results.forEach((personaje) => {
        const card=document.createElement("div");
        card.className = "personaje"
        card.innerHTML=`
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt="${personaje.name}"></img>`
        ;contenido.appendChild(card)
    });
}
)