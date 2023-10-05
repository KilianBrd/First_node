//code de base
const express = require('express')
  
const app = express()
const port = 3000
let pokemons = require(`./mock-pokemon`)
  
app.get('/', (req, res) => res.send('Hello, Ezaxezcxxpress!'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemons => pokemons.id === id)
    res.send(`Vous avez demandé le pokémon nommé ${pokemon.name}. et c'est ${pokemon.picture}`)
})
  
app.get('/api/pokemons', (req,res) => {
    res.send(`Il y a ${pokemons.length} pokémons`)
})


app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

//fin de la base