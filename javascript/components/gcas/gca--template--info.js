function gcaDivInfo(gcaSubSection1, machineNum, cameraNum) {
    /**
     * INFO SECTION
     * Elements which give general information about the GCA
     * machine
     */

    //Create div for info elements
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    //Create the elements
    let camera = document.createElement("p");
    let machine = document.createElement("p");

    //Assign innerHTML to the elements
    machine.innerHTML = `GCA ${machineNum}`;
    camera.innerHTML = `(${cameraNum})`;

    //Append children to infoDiv
    infoDiv.appendChild(machine);
    infoDiv.appendChild(camera);

    //Append the infoDiv to gcaSubSection1
    gcaSubSection1.appendChild(infoDiv);
}