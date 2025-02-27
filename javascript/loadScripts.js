const scripts = [
    /**
     * GCA Locations
     */
    //General
    "javascript/components/gcas/gca--textFill.js",
    "javascript/components/gcas/gca--templateCombiner.js",
    
    //Reusable Tools
    "javascript/components/reusable-tools/timeInputs.js",
    "javascript/components/reusable-tools/createReport.js",

    //GCA Information
    "javascript/components/gcas/gca--objects.js",
    "javascript/components/gcas/gca--template--info.js",

    //GCA Times
    "javascript/components/gcas/gca--template--times.js",

    //GCA Buttons
    "javascript/components/gcas/gca--template--buttons.js",

    //Main file which works as the bridge between other js files and HTML
    "javascript/main.js",
];

scripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // Set to true if you want async loading
    document.body.appendChild(script);
});