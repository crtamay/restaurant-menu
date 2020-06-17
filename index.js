function toggleClass() {
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("toggleCls")
}
let hamburger = document.querySelector(".burger");
hamburger.addEventListener("click", toggleClass);
document.addEventListener('click', function (event) {
// --------------------------------------------------------------
    // only run if it's an accordion toggle
    if (!event.target.classList.contains('accordion-toggle')) return;

    // Get content area
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Prevent the default link behavior
    event.preventDefault();

    // Check if our content area is already open 
    if (content.classList.contains('active')) {
        // content.classList.remove('active');
        return;
    }

    // Get all the acoordions
    var accordions = document.querySelectorAll('.accordion');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }
    content.classList.add('active');

}, false);
