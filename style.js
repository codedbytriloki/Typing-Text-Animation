const phrases = [
  "a developer",
  "a creator",
  "unstoppable",
  "learning every day"
]


let currentPhrase = 0;
let charIndex = 0;
let isDeletig = false;
const typingText = document.querySelector(".typing-text");

function type(){
  const current = phrases[currentPhrase];
  const display = current.substring(0,charIndex);

  typingText.textContent = display;

  if(!isDeletig && charIndex < current.length){
    charIndex++;
    setTimeout(type, 100);
  }
  else if(isDeletig && charIndex >0){
    charIndex--;
    setTimeout(type, 50);
  }
  else{
    isDeletig = !isDeletig;
    if(!isDeletig){ 
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }
    setTimeout(type, 1000)
  }
}

type();