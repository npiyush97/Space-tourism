const url = window.location.pathname;
const parts = url.split("/"); // Split the URL string by '/'
const fileName = parts[parts.length - 1]; // Get the last part of the URL, which is the file name
const nameWithoutExtension = fileName.substring(
    0,
    fileName.lastIndexOf(".")
); // Remove the file extension
const technologyCapsule = nameWithoutExtension.split("-");
let NavAnchors = document.querySelectorAll(".nav-links");
let InnerAnchors = document.querySelectorAll(".inner-links");
NavAnchors.forEach((anchor) => {
    console.log(anchor.parentElement)
    if (anchor.dataset.indicator === technologyCapsule[0]) {
        if (anchor.parentElement.classList.length == 1) {
            anchor.parentElement.classList.add("active");
        }
    }
});
InnerAnchors.forEach((anchor) => {
    if (anchor.dataset.indicator === technologyCapsule[1]) {
        anchor.parentElement.classList.add("active");
    }
});

let anchor = document.querySelector('.hamburger-menu')
let links = document.querySelector('.links')

anchor.addEventListener('click', () => {
    let span = document.querySelector('.icon')
    links.classList.toggle('active-menu')
    span.classList.toggle('icon-active')
})

window.onload = () => {
    let para = document.querySelector(".para");
    let line = document.querySelector(".line");
    line.style.width = `${para.getBoundingClientRect().width}px`;
}