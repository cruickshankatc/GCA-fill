function gcaDivButtons (gcaSubSection2) {
  let buttonsSection = document.createElement("div");
  
  let upButton = document.createElement("button");
  let downButton = document.createElement("button");
  let trashButton = document.createElement("button");

  upButton.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
  downButton.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`; 
  trashButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`; 

  buttonsSection.appendChild(upButton);
  buttonsSection.appendChild(downButton);
  buttonsSection.appendChild(trashButton);

  gcaSubSection2.appendChild(buttonsSection);
}