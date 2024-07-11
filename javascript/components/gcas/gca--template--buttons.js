function gcaDivButtons (gcaSubSection2) {
  /**
   * BUTTONS SECTION
   * Elements which allow for gcaItem Interactions
   */

  //Create the section for buttons
  let buttonsSection = document.createElement("div");
  
  //Create the individual buttons
  let upButton = document.createElement("button");
  let downButton = document.createElement("button");
  let trashButton = document.createElement("button");

  //Give classes to the buttons
  upButton.classList.add("upButton");
  downButton.classList.add("downButton");
  trashButton.classList.add("trashButton");

  //Give the buttons icons
  upButton.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
  downButton.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`; 
  trashButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`; 

  //Attach buttons to the buttonsSection
  buttonsSection.appendChild(upButton);
  buttonsSection.appendChild(downButton);
  buttonsSection.appendChild(trashButton);

  //Attach buttonsSection to the 2nd Sub-section
  gcaSubSection2.appendChild(buttonsSection);
}