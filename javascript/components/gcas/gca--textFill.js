function gcaDivCreationAll () {
    for (x = 0; x < gcaObjects.length; x++) {
        gcaDivCreation(gcaObjects[x].machine, gcaObjects[x].camera);
    }
}