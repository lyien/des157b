(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section');
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const h3s = document.querySelectorAll("h3")
    const main = document.querySelector("main");
    let mode = 'light';

   
   


    button.addEventListener('click', function() {
        if (mode === 'light') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            h1.className = 'switch';
            h2.className = 'switch';
            main.className = 'switch';
            banner.innerHTML = `<img src="images/color.png" alt="decorative image">`;
            button.innerHTML = `monochrome`;

            
            for (const h3 of h3s) {
                h3.className = 'switch';
            }

            for (const section of sections) {
                section.className = 'switch';
            } 

            mode = 'dark';

        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            h1.removeAttribute('class');
            h2.removeAttribute('class');
            main.removeAttribute('class');
            banner.innerHTML = `<img src="images/flower.png" alt="image of flowers in a field">`
            button.innerHTML = `Color`;


            for (const section of sections) {
                section.removeAttribute('class');
            }

            for (const h3 of h3s) {
                h3.removeAttribute('class');
            }
            mode = 'light'
        }
    })
})()