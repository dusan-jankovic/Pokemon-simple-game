//now when I choose pokemon I want to see that pkmn on battlescreen, so I have to create -
//- DataBase for each pokemon, as I don't want to use backend in this project I
// will simluate db with object

var pokemonDB = [
{
  name:'charmander',
  type:'fire',
  attack:55,
  hp: 49,
  defence:39,
  img:'http://www.smogon.com/dex/media/sprites/xy/charmander.gif',
  level:1
},
{
  name:'bulbasaur',
  type:'forest',
  attack:51,
  hp: 44,
  defence:48,
  img:'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif',
  level:1
},
{
  name:'squirtle',
  type:'water',
  hp: 41,
  attack:40,
  defence:99,
  img:'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif',
  level:1
}
]

//state of the game
//all informations about human and cpu character
var gameState = {
  userPokemon:'',
  rivalPokemon:''
}

//declare all elemetns I need
var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character')
console.log(pokemonsEl)
var battleScreenEl = document.getElementById('battle-screen')

var i = 0;

while(i < pokemonsEl.length) {
  pokemonsEl[i].onclick = function() {
   var pokemonName = this.dataset.pokemon //this se sad odnosi na element koji kliknem
   var player1Img = document.querySelector('.player1').getElementsByTagName('img')//uzimam sliku od kliknuto pokemona i treba da prikazem u battle screen
   var player2Img = document.querySelector('.player2').getElementsByTagName('img')


   gameState.userPokemon = pokemonName //user gets pokemon
   cpuPick()                            //computer gets pokemon

   battleScreenEl.classList.toggle('active')

  var currentPokemon = pokemonDB.filter(function(pokemon) {
    return pokemon.name == gameState.userPokemon  //trazim iz arraya pokemonDB pokemon.name kojis se uklapa sa gameState.userPokemon
  })
  var currentRivalPokemon = pokemonDB.filter(function(pokemon) {
    return pokemon.name == gameState.rivalPokemon  //trazim iz arraya pokemonDB pokemon.name kojis se uklapa sa gameState.userPokemon
  })
   player1Img[0].src = currentPokemon[0].img
   player2Img[0].src = currentRivalPokemon[0].img


  }
  i++
}


function randomNumber(min, max) {
  //whenever I choose carachter, let cpu to choose too
  //so I need random number from indexes of pokemonsEl which is 0, 1 and 2
  //formula for random number
  return Math.floor(Math.random() * (max-min) + min)
}

function cpuPick() {
 gameState.rivalPokemon =  pokemonsEl[randomNumber(0,3)].dataset.pokemon //whenever number comes up, it will give and pokemon name
}
