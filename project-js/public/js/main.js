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
var attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack')
console.log(attackBtnsEl)


var i = 0;
//this is initial loop
while(i < pokemonsEl.length) {
  //add function to all characters on screen select pokemon
  pokemonsEl[i].onclick = function() {
    //current selected pokemons name
   var pokemonName = this.dataset.pokemon //this se sad odnosi na element koji kliknem
   //elements for images on battle screen
   var player1Img = document.querySelector('.player1').getElementsByTagName('img')//uzimam sliku od kliknuto pokemona i treba da prikazem u battle screen
   var player2Img = document.querySelector('.player2').getElementsByTagName('img')

  // we save the current pokemon
   gameState.userPokemon = pokemonName //user gets pokemon
   cpuPick()                            //computer gets pokemon

  //move user to battle screen after he chose the pokemon
   battleScreenEl.classList.toggle('active')

//select data from current User pokemon
   gameState.currentPokemon = pokemonDB.filter(function(pokemon) {
    return pokemon.name == gameState.userPokemon  //trazim iz arraya pokemonDB pokemon.name kojis se uklapa sa gameState.userPokemon
  })
  player1Img[0].src = gameState.currentPokemon[0].img

//select data from current CPU pokemon
   gameState.currentRivalPokemon = pokemonDB.filter(function(pokemon) {
    return pokemon.name == gameState.rivalPokemon  //trazim iz arraya pokemonDB pokemon.name kojis se uklapa sa gameState.userPokemon
  })
   player2Img[0].src = gameState.currentRivalPokemon[0].img

  //current user and cpu pokemon initial health
   gameState.currentPokemon[0].health = calculateInitialHealth(gameState.currentPokemon)
   gameState.currentRivalPokemon[0].health = calculateInitialHealth(gameState.currentPokemon)

   console.log(gameState)

  }
  i++
}
var a = 0
while(a < attackBtnsEl.length) {
   attackBtnsEl[a].onclick = function() {
     var attackName = this.dataset.attack
     gameState.currentUserAttack = attackName

     play(attackName,cpuAttack())
   }
  a++(
}

var cpuAttack = function() {
  var attacks = ['rock','paper','scissors']
  return attacks[randomNumber(0,3)]
}

var calculateInitialHealth = function(user) {
  //formula for health
   return Math.round(((0.20 * Math.sqrt(user[0].level)) * user[0].defence) * user[0].hp)
}

var attackMove = function(attack, level, stack, critical, enemy) {
   ((attack * level) * (stack + critical)) / 3
}
var currentPokemon = gameState.currrentPokemon[0]
var currentRivalPokemon = gameState.currrentRivalPokemon[0]


var play = function(userAttack, cpuAttack) {
  switch (userAttack) {
    //////////////
    case 'rock':
     if(cpuAttack == 'paper'){
       attackMove(currentPokemon.attack, currentPokemon.level, .8, .5)
     }
     if(cpuAttack == 'scissors'){
       console.log('Rock kiled scissiors')
     }
     if(cpuAttack == 'rock'){
       console.log('Its draw')
     }
      break;
    ////////////////
    case 'paper':
    if(cpuAttack == 'rock'){
      console.log('Paper kiled rock')
    }
    if(cpuAttack == 'scissors'){
      console.log('Paper defeated by scissiors')
    }
    if(cpuAttack == 'paper'){
      console.log('Its draw')
    }
      break;
    ////////////////
    case 'scissors':
    if(cpuAttack == 'rock'){
      console.log('Scissors defeated by rock')
    }
    if(cpuAttack == 'paper'){
      console.log('Scissors kiled paper')
    }
    if(cpuAttack == 'scissors'){
      console.log('Its draw')
    }
  }
}

var randomNumber = function (min, max) {
  //whenever I choose carachter, let cpu to choose too
  //so I need random number from indexes of pokemonsEl which is 0, 1 and 2
  //formula for random number
  return Math.floor(Math.random() * (max-min) + min)
}

function cpuPick() {
 gameState.rivalPokemon =  pokemonsEl[randomNumber(0,3)].dataset.pokemon //whenever number comes up, it will give and pokemon name
}


 //user choose attack


 //cpu health goes down


 //cpu attack


 //user health goes down


 //rock > scissors

 //paper > rock

 //scissors > paper


 //depengin on pokeomn type and defence is how hard the attack is going to be
 //and how much health it will take out


//then who ever get to health <= 0 loses
