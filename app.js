//code de base
const express = require('express')
  
const app = express()
const port = 3000
let pokemons = require(`./mock-pokemon`)
const { success } = require(`./helper.js`)

app.get('/', (req, res) => res.send('<h1>Hello, Ezaxezcxxpress!</h1>'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemons => pokemons.id === id)
    const message = `Un pokémon a bien été trouvé`
    res.json(success(message, pokemon))
})
  
app.get('/api/pokemons', (req,res) => {
    res.send(`Il y a ${pokemons.length} pokémons`)
})


app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

//fin de la base