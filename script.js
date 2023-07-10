


const imgSlider = (imgsrc) => {
	document.querySelector('.starbucks').src = imgsrc;
};



// const textReveal = document.querySelector('#typewriter');

// gsap.set(textReveal, { scaleX: 0 });

// gsap.to(textReveal, {
//   scaleX: 1,
//   duration: 0.5,
//   ease: 'elastic.out(1, 0.75)',
//   onComplete: function() {
//     gsap.to(textReveal, {
//       opacity: 1,
//       duration: 0.5,
//       ease: 'power1.out'
//     });
//   }
// });
const text = document.querySelector('#typewriter');
const textContent = text.innerText;
text.innerText = '';

gsap.set(text, { opacity: 1 }); // Set initial opacity to 1

gsap.fromTo(
  text,
  { width: 0 },
  {
    width: textContent.length * 20, // Adjust the width value for spacing
    duration: 0.7,
    ease: 'power4.out',
    onComplete: typeWriter
  }
);

function typeWriter() {
  let counter = 0;
  const interval = setInterval(function() {
    text.innerText = textContent.substr(0, counter);
    counter++;
    if (counter > textContent.length) {
      clearInterval(interval);
    }
  }, 100); // Typing speed in milliseconds
}


const changeCircleColor = (color) => {
	const circle = document.querySelector('.circle');
	circle.style.background = color;
};
const toggleMenu = () => {
	var menuToggle = document.querySelector('.toggle');
	var nagivation = document.querySelector('.nagivation');
	menuToggle.classList.toggle('active');
	nagivation.classList.toggle('active');
};

function myFunction(x) {
	x.classList.toggle("change");
  }

  let tl = gsap
  .timeline({
    defaults: {
      duration: 0.4,
	  ease: "linear",

    },
  })

  tl.from(".circle", {
	scaleX: 0.97,
	scaleY:0.97,
	transformOrigin: "right bottom"
  },'start');
  tl.to(".starbucks", {
	rotation: -10, 
	transformOrigin: "center",
	 ease: "sine.in", 
	 duration:0.6,
 })
  tl.from(".sci", {
	x: 20,
	opacity:0,
  });
 
  tl.from(".thumb img",{
	y:20,
	duration:0.6,
	opacity:0,
	yoyo:true,
})
tl.to(".img1",{
	y:-15,
	ease:"power.in",
	duration:0.4,

})
tl.to(".img1",{
	y:0,
	ease:"power.out",
	duration:0.3,

})
tl.to(".img2",{
	y:-15,
	ease:"power.in",
	duration:0.4,

})
tl.to(".img2",{
	y:0,
	ease:"power.out",
	duration:0.3,

})
tl.to(".img3",{
	y:-15,
	ease:"power.in",
	duration:0.4,

})
tl.to(".img3",{
	y:0,
	ease:"power.out",
	duration:0.3,

})


// Create a GSAP timeline for the  image animation hover 
const timeline = gsap.timeline({ paused: true });

timeline.to(".starbucks",{
	duration:1,
	rotate:-15,
	ease:"bounce.in",
	transformOrigin:"center",
	duration: 0.3 });

// Select the image container
const imageContainer = document.querySelector(".imgBox");

// When the mouse enters the image container, play the timeline
imageContainer.addEventListener("mouseenter", () => {
  timeline.play();
});

// When the mouse leaves the image container, reverse the timeline
imageContainer.addEventListener("mouseleave", () => {
  timeline.reverse();
});





  

