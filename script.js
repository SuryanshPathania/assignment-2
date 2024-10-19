const socials = document.querySelector(".socials");
const header = document.querySelector("header");

// Function to update the position of the socials element
const updateSocialsPosition = () => {
  const headerBottom = header.getBoundingClientRect().bottom;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= headerBottom) {
    socials.style.position = "fixed";
    socials.style.top = "20px";
  } else {
    socials.style.position = "absolute";
    socials.style.top = "100px";
  }
};

// Initial call to update the socials position
updateSocialsPosition();

// Add a scroll event listener to update the socials position when scrolling
window.addEventListener("scroll", updateSocialsPosition);