function gcaDivCreationAll () {
    
    selectGCAs();
    orderGCAs();

    for (x = 0; x < gcaObjects.length; x++) {  
        gcaDivCreation(gcaObjects[x].machine, gcaObjects[x].camera);
    }
}

let selectedGCAs = [1, 6, 11, 7, 8];

function orderGCAs() {
    gcaObjects.sort((a, b) => {
        return a.orderInRoute - b.orderInRoute;
    });
}

function selectGCAs() {
    gcaObjects = gcaObjects.filter(gca => selectedGCAs.includes(gca.machine));
}
