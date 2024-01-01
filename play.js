function start() {
    const button = document.querySelector('.play');
    
    button.onclick = () => {
      const AllDiv = document.querySelectorAll("span");
      let array = Array.from(AllDiv);
      let score = []
      let guesses = [];
      let min = 1;
      let max = 10;
      let guess = Math.floor(Math.random() * (max - min + 1)) + min;
      score.push(guess);
     
      
      
      let id = "#dot";
      let Elementid = [];
      
      
      for (let i = 0; i < AllDiv.length; i++) {
        let genId = id + (i + 1);
        Elementid.push(genId);
      }
      
      // IDs to display
      let idsToShow = Elementid.slice(0, guess);
      guesses.push(idsToShow.length)
      console.log("Guesses :",guesses,"score:",score);
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

      let head = document.querySelector("#person");
      head.innerHTML = head.innerHTML.replace("0",guess);
    };
  }