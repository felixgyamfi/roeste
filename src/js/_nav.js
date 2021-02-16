/* Add switching scrollbar */

const nav = document.getElementById(`nav-d`);
const sectionOne = document.getElementsByTagName(`header`);
const navlogo = document.getElementById(`nav--logo`);
const alink1 = document.getElementById(`link1`);
const alink2 = document.getElementById(`link2`);
const alink3 = document.getElementById(`link3`);
const alink4 = document.getElementById(`link4`);
const burgerLogo = document.getElementById(`left4`);

const sectionOneOptions = {
    rootMargin: "-65px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
    entries, sevtionOneObserver) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                
            }
        })
    }
))