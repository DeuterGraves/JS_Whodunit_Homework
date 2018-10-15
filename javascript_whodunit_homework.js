// Episode 1:


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// will return "The Muderer is Miss Scarlet."


// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
// Will fire an error - can't change a constant
const verdict = declareMurderer();
console.log(verdict);
// Will return "The murderer is Professor Plum."



// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}


const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
// will return "The murderer is Mrs. Peacock"
const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// will return "The murderer is Mrs. Peacock"
// INCORRECT - Prof Plum BECAUSE - function isn't called and the change to the murderer is only valid in the scope of the function



// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
// The suspects are Miss Scarlet, Professor Plumb, AND Colonel Mustard (because GRAMMAR!) ;)
console.log(`Suspect three is ${suspectThree}.`);
// Suspect three is Mrs. Peacock



//Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}
// changes the weapon

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}
// reports the weapon

changeWeapon('Revolver');
// weapon changed outwith the function as well as within the function
const verdict = declareWeapon();
console.log(verdict);
// The weapon is the Revolver


// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';
// murderer updated to mr green
  const plotTwist = function() {
    murderer = 'Mrs. White';
    // murderer updated to Mrs white - not let, no cont, no var
  };

  plotTwist();
  // we're now calling plotTwist inside of the function...
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//  "The Murderer is Mrs. White"


// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';
  // changes to mr. green when called

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';
    // console.log("plotTwist", murderer)
     // changes to col mustard when called
    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
      // console.log("unexpectedOutcome", murderer);
       // changes to miss scarlet when called
    }

    unexpectedOutcome();
    // called - so now, miss scarlet
  }

  plotTwist();
  // col mustard.
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// returns The Murderer is Col Mustard
// WRONG  - MR. GREEN... hrm. b/c Mr. Green is GLOBAL!  so it doesn't matter what happened in the functions ok.



// Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    // if the room passed in matches the scnario room then...
    if (scenario.room === room) {
      // change the murderer to Col Mustard
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      //  if the murderer passed in matches the scenario murderer
      if (scenario.murderer === murderer) {
        //change the weapon to a candle stick
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
    // doesn't match the murderer so nothing happens on first run.
  }

  plotTwist('Dining Room');
  // dining room matches, so now the murderer IS col mustard.
  // since the unexpected outcome is within plotTwist - then unexected out come
  // so the weapon is the candle stick.
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// "The weapon is candle stick"



// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// the murderer is professor plum - the if statement was never called.
