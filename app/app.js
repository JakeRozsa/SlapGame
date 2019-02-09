let health = 100;
let hits = 0

let goodButtons = [
  {
    name: 'Mushroom',
    modifier: 2,
    description: 'Power up!',
    count: 2
  },
  {
    name: 'Fire Flower',
    modifier: 2,
    description: 'Power up!',
    count: 2,
  },
  {
    name: 'Metal Box',
    modifier: 3,
    description: 'Power up!',
    count: 1,
  }
]

function slap(x) {
  health -= (x);
  if (health < 1) {
    health = 0
  }
  document.getElementById('health').innerText = health
}
function reset() {
  health = 100;
  console.log(health);
  document.getElementById('health').innerText = `${health}`
}


function count(hits) {
  if (slap) {
    ++hits
  }
}

function eatMe(mushroom) {
  health += (mushroom);
  if (health > 99) {
    health = 100
  }
}

function spitMe(fireBall) {
  let fireball2 = fireBall + 2
  slap(fireball2)
}

function metalMe(metalBox) {

}











// }
// function PowerUps (goodButtons) {

// }
















// let healthBars = {
//   Mario: 100,
//   Bowser: 100
// }

// let hits = 0
// let template = ''

// function slap() {
//   console.log('Bowser')
//   if (healthBars.healthBad >= 0) {
//     document.getElementById('healthBars').innerHTML = `<h1>OUCH!</h1>`
//     healthBars.healthBad--;
//   }

// }

// function drawbuttons() {
//   let template = ''
//   for (let key in healthBars) {
//     template += `<div><button> ${key + ' ' + healthBars[key]}</button></div>`
//   }
//   document.getElementById('healthBars').innerHTML = template
// }
// drawbuttons()