const turista = prompt ("whatsapp, tourist, what's your name?")
let cidades = ""
let contagem = 0

let continuar = prompt ("Did you visit any cities? (YES/NO)")

while (continuar === "YES") {
    let cidade = prompt ("What is the name of the city visited?")
    cidades += " - " + cidade + "\n"
    contagem ++
    continuar = prompt ("Did you visit any other cities? (YES/NO)")
}

alert (
    "Tourist: " + turista  +
    "\n Number of cities visited: " + contagem  + 
    "\n name of cities: \n " + cidades
)