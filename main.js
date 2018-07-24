

var about = document.querySelector("#about");

about.onclick = function () {
    setSectionToTheTop();
}

function setSectionToTheTop() {
    console.log("da");
}

function moja(e,el) {
    console.log(e.target);
    console.log(el.textContent);
    let liItemNavbar = el.textContent.toLowerCase();
    
    let chosenSection = document.querySelector("#" + liItemNavbar);
    console.log(window.pageYOffset);
    console.log(window.performance.now());
    // window.location.hash = liItemNavbar;
    // console.log(.offsetHeight);
    
    
}