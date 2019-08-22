console.log("fellowship.js linked.");

// Our heroes
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using query selector
var body = document.querySelector('body');



// Part 1
function makeMiddleEarth() {
  var $main = document.createElement('main');

  // create a section tag with an id of middle-earth
  var $section = document.createElement('section');
  $section.setAttribute("id", "Middle-Earth");

  var $article = document.createElement('article');
  var $shire = document.querySelectorAll('article')[0];
  $main.appendChild($section);

  // add each land as an article tag (add them one by one in a loop)
  for (var i = 0 ; i < lands.length ; i++) {
   var $article = document.createElement('article');
   // inside each article tag include an h1 with the name of the land
   var $h1 = document.createElement('h1');
   $h1.textContent = lands[i];
   var nameinArray = lands[i].toLowerCase().split(" ");
   var nameNoSpace = nameinArray.join("-");

   // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
   $article.setAttribute("class", nameNoSpace);
   $article.appendChild($h1);
   $section.appendChild($article);
  }

  // append middle-earth to your document body
  body.appendChild($main);
}

makeMiddleEarth();


// Part 2
var $shire = document.querySelectorAll('article')[0];
function makeHobbits() {
   var $shire = document.querySelectorAll('article')[0];
   console.log($shire)
   let list = document.createElement('ul');
   $shire.appendChild(list);
   hobbits.forEach((element,index)=>{
      let li = document.createElement('li');
      li.innerHTML = element;
      list.appendChild(li);
      li.className = 'hobbit';
   })
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // each hobbit should be a list item, with text showing their name
  // give each hobbit a class of hobbit
}
makeHobbits();


// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  let divContainer = document.createElement('div');
  divContainer.setAttribute('id','the-ring');
  console.log(divContainer)
  // give the div a class of 'magic-imbued-jewelry'
  divContainer.className = 'magic-imbued-jewelry';
  // add the ring as a child of Frodo
  let frodo = document.querySelectorAll('li')[0];
  console.log(frodo);
  frodo.appendChild(divContainer);
}
keepItSecretKeepItSafe();


// Part 4
let rivendell = document.querySelectorAll('article')[1];
function makeBuddies() {
  // create an aside tag
  let myTag = document.createElement('aside');
  // attach an unordered list of each 'buddy' in the aside
  let list = document.createElement('ul');
  myTag.appendChild(list);
  buddies.forEach((element)=>{
    let li = document.createElement('li');
    li.innerHTML = element;
    list.appendChild(li);
  })

  // insert your aside as a child element of rivendell
  console.log(rivendell)
  rivendell.appendChild(myTag)
  console.log(myTag)


}
 makeBuddies();


// Part 5
function beautifulStranger() {
  let Aragorn = rivendell.querySelectorAll('li')[3];
  // change the 'Strider' textnode to 'Aragorn'
  Aragorn.textContent = 'Aragorn';
}
beautifulStranger();


// Part 6
function leaveTheShire() {
  var hobbits = $shire.querySelector('ul');
  // assemble the hobbits and move them to Rivendell
  let rivendell = document.querySelectorAll('article')[1];
  console.log(rivendell)
  console.log(hobbits)
  rivendell.appendChild(hobbits)
  // how does appendChild work on an element that already exists on the page?
}
leaveTheShire();


// Part 7
let fellowshipMembers = rivendell.querySelectorAll('li');
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  let theFellowship = document.createElement('div');
  theFellowship.setAttribute('id','the-fellowship');
  console.log(theFellowship)
  // add each hobbit and buddy one at a time to 'the-fellowship'
  console.log(fellowshipMembers)
  fellowshipMembers.forEach((element)=>{
    theFellowship.appendChild(element);
    //alert(element.textContent + ' has joined the party!');

  })
  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  // append the fellowship div to rivendell
  rivendell.appendChild(theFellowship);
}
forgeTheFellowShip();


// Part 8
function theBalrog() {
  let gandalf = fellowshipMembers[0];
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = 'Gandalf The White';
  // apply style to the element
  // add a gray 3px border
  gandalf.style.border = '3px solid gray';
  // use documentation if you're unsure how to add style with javascript!
}
theBalrog();


// Part 9
function hornOfGondor() {
  let boromir = fellowshipMembers[4];
  console.log(boromir)
  // pop up an alert that the horn of gondor has been blown
  alert('Gondor\'s Horn Has Been Blown');
  // Boromir's been killed by the Uruk-hai!
  // Remove Boromir from the Fellowship
  boromir.parentNode.removeChild(boromir)

}
hornOfGondor();


// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
// itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
// weWantsIt();


// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
}
// thereAndBackAgain();
