(function (){
    "use strict";

    const mesec = document.querySelector("#mesec");
    const gymsec = document.querySelector("#gymsec");
    const concertsec = document.querySelector("#concertsec");
    const schoolsec = document.querySelector("#schoolsec");
    const sections = document.querySelectorAll("section");
    const videos = document.querySelector("#me");
    const loading = document.querySelector("#loadingsection");

    videos.addEventListener("playing", function(){
        loading.style.display = "none";
    })

    mesec.addEventListener("mouseover", function(){
        mesec.className = "wide";
        gymsec.className = "small";
        concertsec.className = "small";
        schoolsec.className = "small";
    });

    mesec.addEventListener("mouseout", function(){
        for (const section of sections) {
            section.removeAttribute('class');
        }
    });

    gymsec.addEventListener("mouseover", function(){
        mesec.className = "small";
        gymsec.className = "wide";
        concertsec.className = "small";
        schoolsec.className = "small";
    });

    gymsec.addEventListener("mouseout", function(){
        for (const section of sections) {
            section.removeAttribute('class');
        }
    });

    concertsec.addEventListener("mouseover", function(){
        mesec.className = "small";
        gymsec.className = "small";
        concertsec.className = "wide";
        schoolsec.className = "small";
    });

    concertsec.addEventListener("mouseout", function(){
        for (const section of sections) {
            section.removeAttribute('class');
        }
    });

    schoolsec.addEventListener("mouseover", function(){
        mesec.className = "small";
        gymsec.className = "small";
        concertsec.className = "small";
        schoolsec.className = "wide";
    });

    schoolsec.addEventListener("mouseout", function(){
        for (const section of sections) {
            section.removeAttribute('class');
        }
    });




})();