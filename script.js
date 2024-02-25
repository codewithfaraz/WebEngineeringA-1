//element selection
const el = document.querySelector(".header__animation");
const timelines = document.querySelectorAll(".timeline__line");
const timelineStory = document.querySelectorAll(".timeline__story");
const timeline = document.querySelector(".timeline");
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar__link");
const header = document.querySelector(".header");
//Amimating header Heading between different words
const words = ["Designer", "Developer", "Animator"];
let i = 0;
let j = -1;
el.textContent = "";
let s = "";
setTimeout(() => {
  setInterval(() => {
    j++;
    //this condition will be for next word in words string
    if (j === words[i].length) {
      s = "";
      i++;
      //this condition will restart the animation
      if (i === words.length) {
        i = 0;
        j = 0;
      }
      j = 0;
    }
    s += words[i][j];
    el.textContent = s;
  }, 200);
}, 2500);

//timeline animation
//options
const timelineOptions = {
  root: null,
  threshold: 0.5,
};
const headerOptions = {
  root: null,
  threshold: 0,
};
//calbacks
function timeline1Callback(entries) {
  const [entry] = entries;

  if (entry.target.classList.contains("line1")) {
    if (entry.isIntersecting) {
      timelineStory[0].classList.remove("slideOutToRight");
      timelineStory[0].classList.add("slideInFromLeft");
    } else {
      timelineStory[0].classList.remove("slideInFromLeft");
      timelineStory[0].classList.add("slideOutToRight");
    }
  } else if (entry.target.classList.contains("line3")) {
    if (entry.isIntersecting) {
      timelineStory[2].classList.remove("slideOutToRight");
      timelineStory[2].classList.add("slideInFromLeft");
    } else {
      timelineStory[2].classList.remove("slideInFromLeft");
      timelineStory[2].classList.add("slideOutToRight");
    }
  }
}
function timeline2Calback(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    timelineStory[1].classList.remove("slidOutToLeft");
    timelineStory[1].classList.add("slideInFromRight");
  } else {
    timelineStory[1].classList.remove("slideInFromRight");
    timelineStory[1].classList.add("slidOutToLeft");
  }
}
function headerCallBack(entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//observersers
const timelineOneObserver = new IntersectionObserver(
  timeline1Callback,
  timelineOptions
);
const timelineTwoObserver = new IntersectionObserver(
  timeline2Calback,
  timelineOptions
);
const headerObserver = new IntersectionObserver(headerCallBack, headerOptions);
//observing
headerObserver.observe(timeline);
timelineOneObserver.observe(timelines[0]);
timelineTwoObserver.observe(timelines[1]);
timelineOneObserver.observe(timelines[2]);
//implementing smooth scrolling
navbarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(this.textContent);
    if (this.textContent === "Seasons") {
      timeline.scrollIntoView({ behavior: "smooth" });
    } else if (this.textContent === "Home") {
      header.scrollIntoView({ behavior: "smooth" });
    }
  });
});
