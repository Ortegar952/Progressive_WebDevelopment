var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You can have any brew you want... as long as it\'s a Corona.',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  var randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  //randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let myTitle = ()=>{
  let mainTitle = document.querySelector('#main-title');
  console.log(mainTitle)
  mainTitle.textContent = 'Dom\'s Blog';
  }
  console.log(myTitle());
  // Part 2
  let bodyColor = document.body.style.backgroundColor = '#F5F5F5';
  // Part 3
  let list =()=>{
  let sideBar = document.querySelector('.side-bar');
  let favThings = sideBar.getElementsByTagName('li');
  favThings[5].style.display = 'none';
}
console.log(list());

  // Part 4
  let specialCases = () =>{
    let specialCases = document.querySelectorAll('.special-title');
    console.log(specialCases)
    // specialCases.style.fontSize = '2rem';
    specialCases.forEach(title=> title.style.fontSize = '1.5rem')
  }
  specialCases();
  // Part 5
  let pastRace =()=>{
  let sideBar = document.querySelectorAll('.side-bar');
  let pastRaces = sideBar[1];
 // console.log(pastRaces)
  let places = pastRaces.getElementsByTagName('li');
  for(let i = 0 ;i < places.length; i++){
        //console.log(places[i])
        let element = places[i];
        if(places[i].innerHTML === 'Chicago'){
           element.remove();
        }
  }
}
pastRace();
  // Part 6
let newCity = () => {
  let sideBar = document.querySelectorAll('.side-bar');
  let pastRaces = sideBar[1];
  let ul =pastRaces.childNodes[3];
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Fiji Island"));
  ul.appendChild(li);
}
newCity();
  // Part 7
let newPurple = () =>{
  let myBlog = document.querySelector('.main');
  let purplePost = document.querySelector('.blog-post')
  //console.log(purplePost)

  let myDiv = document.createElement('div');
  myDiv.className = 'blog-post purple';
  myBlog.appendChild(myDiv);
  let title = purplePost.childNodes[1];
  let myH = document.createElement('H1');
  let content = document.createTextNode('Fiji Island');
  myH.appendChild(content);
  myDiv.appendChild(myH);
  let para = document.createElement('p');
  let pText = document.createTextNode('I fought an alligator and a swamp monster while I was eating a twinkie');
  para.appendChild(pText);
  myDiv.appendChild(para);

  //console.log(myDiv)
}
newPurple();
  // Part 8
let quote = document.querySelector('#quote-title');

quote.onclick = function(){
 console.log(quote);
 randomQuote();
}
  // Part 9
let divs = document.querySelectorAll(".blog-post");
console.log(divs);

Array.from(divs).forEach(el =>{
  el.addEventListener('mouseout',function(){
      el.className = 'blog-post purple';
  })
})
Array.from(divs).forEach(el =>{
  el.addEventListener('mouseenter',function(){
      el.className = 'blog-post red';
  })
})



});
