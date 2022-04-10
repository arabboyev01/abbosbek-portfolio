const navbar = document.querySelector(".navbar");
const section1 = document.querySelector("#section---1");
const section2 = document.querySelector("#section---2");
const section3 = document.querySelector("#section---3");
const section4 = document.querySelector("#section---4");
const header = document.querySelector(".hero-bg");
const closeBtn = document.querySelector(".btn-close-modal");
const overlay = document.querySelector(".overlay");
const resume = document.querySelector(".resume");
const closeButton = document.querySelector(".close-btn");
const aboutBtn = document.querySelector(".about-btn");
const workBtn = document.querySelector(".work-btn");
const sayHelloBtn = document.querySelector(".say-hello");
const contactBtn = document.querySelector(".contact-btn")
const templatesBtn = document.querySelector(".templates-btn");
const operationTabs = document.querySelector(".operation-tabs-container");
const tab = document.querySelectorAll(".operation__tab");
const tabsContent = document.querySelector(".operation-tabs-container");
const operationContent = document.querySelectorAll(".operation-content");


// Scrolling navbar
const initCoords = section1.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > initCoords.top) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});

// Add cookie message
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the cookie 
<a href="#"> policy !</a> </br >.

You can consent to the use of such technologies by using the “Accept” button. By closing this notice, you continue without accepting. </br >  <button class="btn btn-primarry btn--close-cookie">Got It!</button>`;
header.append(message);
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.classList.add("hidden");
  });

  // Open modal
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    resume.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  const closeModal = function(){
      resume.classList.add("hidden");
      overlay.classList.add("hidden");
  }
 closeButton.addEventListener("click", closeModal);
 overlay.addEventListener("click",closeModal);

 // Scrolling smooth
 aboutBtn.addEventListener("click", function(e) {
     e.preventDefault();
     section1.scrollIntoView({behavior: "smooth"});
 });
workBtn.addEventListener("click", function(e) {
    e.preventDefault();
    section2.scrollIntoView({behavior: "smooth"});
});
templatesBtn.addEventListener("click", function(e) {
  e.preventDefault();
  section3.scrollIntoView({behavior: "smooth"});
});
contactBtn.addEventListener("click", function(e) {
  e.preventDefault();
  section4.scrollIntoView({behavior: "smooth"})
})


// changing plan  
 operationTabs.addEventListener("click", function(e) {
     e.preventDefault();
     const clicked = e.target.closest('.operation__tab');
     console.log(clicked);

     // Guard 
     if(!clicked) return;
  
      tab.forEach((c) => c.classList.remove("tab--active"));
      document.querySelectorAll(".operation--content").forEach((t) => t.classList.remove("content--active"));
     
     clicked.classList.add("tab--active");
     document
       .querySelector(`.title--${clicked.dataset.tab}`)
       .classList.add("content--active");
 });

// prevent default
// sayHelloBtn.addEventListener("click", function(e) {
//   e.preventDefault();
// });

const subject = "Let me know about your interests ";
const subjectEncoded = encodeURIComponent(subject);
document.getElementById("emailMe").href =
  "mailto:abbosarabboyev9@gmail.com" + '  ' + subjectEncoded;

// Animated text
const animatedText = document.querySelector("#animated-text").children;
const animatedTextLength = animatedText.length;
let index = 0;

const animateText = function(){
   animatedText[index].classList.add('text-in');
}
window.onload = animateText;

