function gcaDivInputs(locationSection, gcaItem) {
    /**
     * TIMES SECTION
     * Elements which allow the inputting of times
     */
    
    //Create div for times elements
    let timesDiv = document.createElement("div");
    timesDiv.classList.add("times");

    //Create mini-Divs
    //Each holds: 1)The input 2)the label
    let openedDiv = document.createElement("div");
    let securedDiv = document.createElement("div");
    openedDiv.classList.add("gcaTimes");
    securedDiv.classList.add("gcaTimes");

    //Create the elements
    let openedDivInput = document.createElement("input");
    let openedDivLabel = document.createElement("p");
    let securedDivInput = document.createElement("input");
    let securedDivLabel = document.createElement("p");

    //Assign innerHTML to the elements
    openedDivLabel.innerHTML = `Opened`;
    securedDivLabel.innerHTML = `Secured`;

    //Append children to mini-Divs
    openedDiv.appendChild(openedDivInput);
    openedDiv.appendChild(openedDivLabel);
    securedDiv.appendChild(securedDivInput);
    securedDiv.appendChild(securedDivLabel);




    //Append children to timesDiv
    timesDiv.appendChild(openedDiv);
    timesDiv.appendChild(securedDiv);






    gcaItem.appendChild(timesDiv);
}