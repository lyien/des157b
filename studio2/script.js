(function(){
    "use strict";
    let globalData; 
    
    async function getData(){
    const myDays = await fetch ("data/day.json");
    const data = await myDays.json();
    const dayimg = document.querySelector("#dayimg");
    document.querySelector("#daybutton").innerHTML = createButton(data);
    dayimg.innerHTML = createText(data);
    }


    function createButton(data){
        let htmlButton = "<button id='hidden'></button>"
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach(function(eachPoint){
            htmlButton += `<button id="${eachPoint}">${eachPoint}</button>`;
        });
        return htmlButton;
    }

    function createText(data){
         document.querySelector("#Sunday").addEventListener("click",function(){
                let imgInfo = dayimg.innerHTML = `<h2>${data.Sunday.date}</h2>
                <p>${data.Sunday.time}</p>
                <img src="images/${data.Sunday.img}" alt="Laura and friends at boba" width="325" height="401">
                <p>${data.Sunday.location}</p>`;
            })
        document.querySelector("#Monday").addEventListener("click",function(){
                let imgInfo = dayimg.innerHTML = `<h2>${data.Monday.date}</h2>
                <p>${data.Monday.time}</p>
                <img src="images/${data.Monday.img}" alt="Laura eating a crepe with her roommate" width="325" height="401">
                <p>${data.Monday.location}</p>`;
            })
        document.querySelector("#Tuesday").addEventListener("click",function(){
                let imgInfo = dayimg.innerHTML = `<h2>${data.Tuesday.date}</h2>
                <p>${data.Tuesday.time}</p>
                <img src="images/${data.Tuesday.img}" alt="Laura and her roommate at a glass bead making class" width="325" height="401">
                <p>${data.Tuesday.location}</p>`;
            })
        document.querySelector("#Wednesday").addEventListener("click",function(){
                let imgInfo = dayimg.innerHTML = `<h2>${data.Wednesday.date}</h2>
                <p>${data.Wednesday.time}</p>
                <img src="images/${data.Wednesday.img}" alt="Laura in class" width="325" height="401">
                <p>${data.Wednesday.location}</p>`;
            })
        document.querySelector("#Thursday").addEventListener("click",function(){
                let imgInfo = dayimg.innerHTML = `<h2>${data.Thursday.date}</h2>
                <p>${data.Thursday.time}</p>
                <img src="images/${data.Thursday.img}" alt="Laura eating dinner from Nick the Greek" width="325" height="401">
                <p>${data.Thursday.location}</p>`;
            })
        document.querySelector("#Friday").addEventListener("click",function(){
                let imgInfo = dayimg.innerHTML = `<h2>${data.Friday.date}</h2>
                <p>${data.Friday.time}</p>
                <img src="images/${data.Friday.img}" alt="Laura got her ears pierced!" width="325" height="401">
                <p>${data.Friday.location}</p>`;
            })
        document.querySelector("#Saturday").addEventListener("click",function(){
                let imgInfo = dayimg.innerHTML = `<h2>${data.Saturday.date}</h2>
                <p>${data.Saturday.time}</p>
                <img src="images/${data.Saturday.img}" alt="Laura at on Picnic Day at a party" width="325" height="401">
                <p>${data.Saturday.location}</p>`;
            })
        document.querySelector("#Sunday2").addEventListener("click",function(){
                let imgInfo = dayimg.innerHTML = `<h2>${data.Sunday2.date}</h2>
                <p>${data.Sunday2.time}</p>
                <img src="images/${data.Sunday2.img}" alt="Laura and her friends eating dinner" width="325" height="401">
                <p>${data.Sunday2.location}</p>`;
            })
    }


    getData();
})();