let health = 100;
let health2 = 200;
let hits = 0;
let atkpwr = 1;

function hatThrow() {
  document.getElementById('response').innerHTML = `<h2>Mario threw is hat at Bowser!</h2>`;
  if (atkpwr == 1) {
    health2 = health2 - 2
    if (health2 < 1) {
      health2 = 0
    }
    document.getElementById('health2').innerText = `${health2}`;
  } else if (atkpwr == 2) {
    health2 = health2 - 4
    document.getElementById('health2').innerText = `${health2}`;
  } else if (atkpwr == 3) {
    health2 = health2 - 6
    document.getElementById('health2').innerText = `${health2}`;
  }
}

function fireBall() {
  document.getElementById('response').innerHTML = `<h2>Mario spit a fireball at Bowser!</h2>`;
  if (atkpwr == 1) {
    health2 = health2 - 5
    if (health2 < 1) {
      health2 = 0
    }
    document.getElementById('health2').innerText = `${health2}`;
  } else if (atkpwr == 2) {
    health2 = health2 - 10
    document.getElementById('health2').innerText = `${health2}`;
  } else if (atkpwr == 3) {
    health2 = health2 - 15
    document.getElementById('health2').innerText = `${health2}`;
  }
}

function pileDriver() {
  document.getElementById('response').innerHTML = `<h2>Mario butt-smashed Bowser!</h2>`;
  if (atkpwr == 1) {
    health2 = health2 - 10
    if (health2 < 1) {
      health2 = 0
    }
    document.getElementById('health2').innerText = `${health2}`;
  } else if (atkpwr == 2) {
    health2 = health2 - 20
    document.getElementById('health2').innerText = `${health2}`;
  } else if (atkpwr == 3) {
    health2 = health2 - 30
    document.getElementById('health2').innerText = `${health2}`;
  }
}

function reset() {
  health = 100;
  health2 = 200;
  hits = 0;
  // console.log(health);
  document.getElementById('health').innerText = `${health}`;
  document.getElementById('health2').innerText = `${health2}`;
  document.getElementById('count').innerText = `${hits}`
}

function eatMe() {
  document.getElementById('response').innerHTML = `<h2>Mario ate a mushroom.. yum!</h2>`;
  health += 25;
  if (health > 99) {
    health = 100
  }
  document.getElementById('health').innerText = `${health}`
}

function spitMe() {
  document.getElementById('response').innerHTML = `<h2>Mario found a power-up!</h2>`;
  if (atkpwr < 3) {
    atkpwr++
  }
  document.getElementById('health2').innerText = `${health2}`;
}

function lifeUp(coins) {
  document.getElementById('response').innerHTML = `<h2>Mario picked up 100 coins!</h2>`;
  health += (coins);
  if (health > 99) {
    health = 100
  }
  document.getElementById('health').innerText = `${health}`
}










// }
// function PowerUps (goodButtons) {

// }





// function slap(x) {
//   health -= (x);
//   hits += (1);
//   if (health < 1) {
//     health = 0
//   }
//   document.getElementById('health').innerText = `${health}`;
//   document.getElementById('count').innerText = `${hits}`
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