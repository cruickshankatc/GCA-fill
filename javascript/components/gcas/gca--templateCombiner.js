function gcaDivCreation(machineNum, cameraNum) {
    /**
     * GENERAL STUFF
     * Elements which be relevant to all of the sub/children
     * elements
     * The children will be info, times and buttons
     */
    //Get the 'location section' from index.html
    let locationSection = document.getElementById("location");

    //Div to which all the children (info, times, etc) will be attached
    let gcaItem = document.createElement("div");

    gcaDivInfo(locationSection, gcaItem, machineNum, cameraNum);
}