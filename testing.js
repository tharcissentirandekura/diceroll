function human(){
    let value = document.querySelector(".person");
    const AllDiv = document.querySelectorAll("span");
    // let array = Array.from(AllDiv);
    let guess = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("couting :",counter);
    counter += guess;
    value.innerHTML = counter;

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

  function computer(){
    let value = document.querySelector(".computer");
    const AllDiv = document.querySelectorAll("span");
    // let array = Array.from(AllDiv);
    let guess = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("couting :",counter);
    counter += guess;
    value.innerHTML = counter;

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






