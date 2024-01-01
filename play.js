function refreshPage() {
  location.reload();
}

function reset(){
  const btn = document.querySelector("button#reset");
  btn.onclick = () =>{
    console.log("page to be loaded")
    refreshPage();
  };
}

function winner(limit,humanScore,compScore){
    let human = document.querySelector(".person");
    let computer = document.querySelector(".computer");
    let winning = document.querySelector("header");

    if (human.innerHTML >= limit && human.innerHTML > computer.innerHTML){
      // console.log("human wins");
      alert("Reset the game");
      winning.innerHTML = "you won with score of :" + humanScore;
      computer.innerHTML = 0;
      console.log("Computer value :",computer.innerHTML);
      human.innerHTML = 0;
      // refreshPage();


    }else if(computer.innerHTML >= limit && human.innerHTML < computer.innerHTML){
      // console.log("computer wins");
      alert("Reset");
      winning.innerHTML = "computer won with score of :" + compScore;
      human.innerHTML = 0;
      computer.innerHTML = 0;
      // refreshPage();
      
      
    }
}




  function start() {
    const button = document.querySelector('button#start');
  let min = 1;
  let max = 10;
  let counter = 0;
  let comp = 0

  button.onclick = () => {
    
  let value = document.querySelector(".person");
  let valuecomp = document.querySelector(".computer");
  const AllDiv = document.querySelectorAll("span");
  // let array = Array.from(AllDiv);
  let guess = Math.floor(Math.random() * (max - min + 1)) + min;
  let guesscom = Math.floor(Math.random() * (max - min + 1)) + min;

  
  comp += guesscom;
  counter += guess;
  console.log("value is :",guess,": and now total is :",counter);
  value.innerHTML = counter;
  winner(50,counter,comp);
  valuecomp.innerHTML = comp;
  winner(50,counter,comp);

  let id = "#dot";
  let Elementid = [];

  for (let i = 0; i < AllDiv.length; i++) {
    let genId = id + (i + 1);
    Elementid.push(genId);
  }
  // IDs to display
  let idsToShow = Elementid.slice(0, guess); 
  
  for (let k = 0; k < idsToShow.length; k++) {
    const showElement = document.querySelector(idsToShow[k]);
    showElement.style.display = "block";
  }
  
  // IDs to hide
  
  let idsToHide = Elementid.slice(guess, AllDiv.length);
  for (let j = 0; j < idsToHide.length; j++) {
    const element = document.querySelector(idsToHide[j]);
    element.style.display = "none";
  }
};
    

  }