function gcaDivButtons (gcaSubSection2) {
  let buttonsSection = document.createElement("div");
  
  let upButton = document.createElement("button");
  let downButton = document.createElement("button");
  let trashButton = document.createElement("button");

  buttonsSection.appendChild(upButton);
  buttonsSection.appendChild(downButton);
  buttonsSection.appendChild(trashButton);

  gcaSubSection2.appendChild(buttonsSection);
}