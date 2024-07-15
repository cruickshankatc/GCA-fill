function createReport() {
    let inputtingReport = document.getElementById("inputtingReport");
    let finishedReport = document.getElementById("finishedReport");
    
    let jimmy = inputtingReport.getElementsByTagName("input");
    let tom = [];
    tom.length = jimmy.length;
    console.log(tom.length);

    for (x = 0; x < jimmy.length; x++) {
        tom[x] = document.createElement("p");
        tom[x].innerHTML = jimmy[x].value;
    }

    Array.from(jimmy).forEach(jim => {
        // Create a new <p> element
        let tom = document.createElement("p");
    
        // Transfer the input's value to the <p> element
        tom.textContent = jim.value;
    
        // Replace the input with the new <p> element
        jim.parentNode.replaceChild(tom, jim);
    });

 //   finishedReport.innerHTML = inputtingReport.innerHTML;
}
