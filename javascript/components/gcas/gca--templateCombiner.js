function gcaDivCreation(machineNum, cameraNum) {
    /**
     * GENERAL STUFF
     * Elements which be relevant to all of the sub/children
     * elements
     * The children will be info, times and buttons
     */
    //Get the 'location section' from index.html
    let locationSection = document.getElementById("location");

    //The two sub-sections that form the GCA
    let gcaSubSection1 = document.createElement("div");
    let gcaSubSection2 = document.createElement("div");

    //Div to which all the children (info, times, etc) will be attached
    let gcaItem = document.createElement("div");

    //Execute the functions to create the different areas and sections
    gcaDivInfo(gcaSubSection1, machineNum, cameraNum);
    gcaDivInputs(gcaSubSection1);
    gcaDivButtons(gcaSubSection2);

    //Attach the subsections to the item
    gcaItem.appendChild(gcaSubSection1);
    gcaItem.appendChild(gcaSubSection2);

    //Append the gcaItem to the <section> or to the locationSection
    locationSection.appendChild(gcaItem);
}