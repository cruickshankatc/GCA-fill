function gcaDivInputs(gcaSubSection1) {
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
    let openedDivInput = timeInputs();
    let openedDivLabel = document.createElement("p");
    let securedDivInput = timeInputs();
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

    gcaSubSection1.appendChild(timesDiv);
}