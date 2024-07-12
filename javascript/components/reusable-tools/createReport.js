function createReport() {
    let inputtingReport = document.getElementById("inputtingReport");
    let finishedReport = document.getElementById("finishedReport");

    let jimmy = inputtingReport.getElementsByTagName("input");
    

    for (x = 0; x < jimmy.length; x++) {
        let tom = document.createElement("p");
        tom.innerHTML = jimmy[x].value;
        jimmy[x].replaceWith(tom);
    }

    console.log(jimmy.length);

    finishedReport.innerHTML = inputtingReport.innerHTML;
}