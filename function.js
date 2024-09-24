// Fonctions pour la gestion des contenus dynamiques

const concat = (a, b) => a + ' ' + b;

function createTopHeader(header) {
    return`
        <div class="navBar">
            <div onclick="openCloseLeftBar()" class="navBarLeft">
                <svg class="logoOnNavBar" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="auto" height="auto" viewBox="0,0,256,256">
                    <g fill="#bbcdda" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path></g></g>
                </svg>
            </div>
            <div class="navBarRight">
                <a href="index.html">
                    <svg class="logoOnNavBar" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="auto" height="auto" viewBox="0,0,256,256">
                        <g fill="#bbcdda" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41,5c-6.78906,-0.00781 -10.53125,3.79688 -12.83203,11.21094c1.20313,-0.44531 2.41016,-0.99609 3.50391,-0.99609c2.30078,0 3.06641,0.85547 2.73828,3.51172c-0.10937,1.66016 -0.76562,4.33984 -2.73828,7.4375c-1.97266,2.98828 -3.6875,3.83594 -4.67187,3.83594c-1.20312,0 -2.11719,-1.73047 -3.10156,-6.37891c-0.32812,-1.32812 -1.09375,-4.31641 -1.97266,-9.95703c-0.76562,-5.19922 -3.3125,-7.99609 -6.92578,-7.66406c-1.53125,0.10938 -3.36328,1.53516 -6.42969,4.19141c-2.19141,1.99219 -4.26953,3.42969 -6.57031,5.42188l2.19141,2.80859c2.07813,-1.4375 3.28516,-1.99219 3.61328,-1.99219c1.53125,0 2.95313,2.43359 4.37891,7.41406c1.20313,4.53516 2.51563,9.07031 3.72266,13.60547c1.85938,4.98047 4.16016,7.41406 6.78906,7.41406c4.37891,0 9.63281,-3.98047 15.875,-12.16797c6.12891,-7.74609 9.21094,-14.16016 9.42969,-18.69531c0.21875,-5.97266 -2.18359,-8.89062 -7,-9z"></path></g></g>
                    </svg>
                </a>
            </div>
        </div>
        <div class="degrader"> </div>
        <div class="title"> <h1>${header.title}</h1> </div>
        <img class="mainImg" src=${header.imageHeaderLink} alt="${header.imageHeaderAlt}">
        `
}

function createTopItem(item, isRight) {
    return `
        <div class="containerGridTop ${isRight ? 'gridImgRight' : 'gridImgLeft'}">
            <div class="containterTextTop" id="containerData">
                <div class="numeroTop">
                    <p>${item.number}</p>
                </div>
                <div class="informationTop">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                </div>
                <div class="barLeftText"></div>
            </div>
            <img id="imgtop" src="${item.imageLink}" alt="${item.title}">
            <div class="barLeftTextAndImg"></div>
        </div>
    `;
}

function createFooter() {
    return `
        <div id="instagramIcon" class="socialMedia">
            <svg id="instagramIcon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
            <a href="https://www.instagram.com/topV/">Instagram</a>
        </div>
        <div id="gitIcon" class="socialMedia">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            <a href="https://github.com/clemcvv/top5">GitHub</a>
        </div>
        <div id="footerSupport">
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Privacy Policy</a>
        </div>
        <p id="footerCopyright">© 2024 TopV. All rights reserved.</p>
    `;
}

var IdForDoubleButtonMenuLeft = 0;
function openCloseLeftBar() {
    if (IdForDoubleButtonMenuLeft % 2 == 0) {
        document.querySelector("#menuSomeTop").className = "openBarLeft";
    } else {
        document.querySelector("#menuSomeTop").className = "closeBarLeft";
    }
    IdForDoubleButtonMenuLeft += 1;
}
