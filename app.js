if (!sessionStorage.getItem('alertShown')) {
  alert("SITE UNDER CONSTRUCTION!!!\n\nSome features may not work, and there may be placeholder content.\nPlease visit later. Thank you!");
  sessionStorage.setItem('alertShown', true);
}

window.addEventListener('load', () => {
  console.clear();
})

let mobileMenu = document.querySelector('.mobile-menu');
let menuIcon = document.querySelector('.hamburger');
menuIcon.addEventListener('click', () => {
  if (mobileMenu.style.left !== '0px') {
    mobileMenu.style.left = '0px';
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
    document.body.style.overflow = 'hidden';
  }
  else {
    mobileMenu.style.left = '-100%';
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
    document.body.style.overflow = 'auto';
  }
});

// Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    const targetElement = document.querySelector(target);
     
    if (target === '' || target === '/' || target === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      e.preventDefault();
      return false;
    }
    const topOffset = targetElement.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  });

  // navbar hide/unhide on scroll
  // let prevScrollPos = window.pageYOffset;
  // let navBar = document.querySelector('header');
  // window.onscroll = function () {
  //   let currentScrollPos = window.pageYOffset;
  //   if (prevScrollPos > currentScrollPos) {
  //     navBar.style.transform = 'translateY(0)';
  //     navBar.style.transition = 'transform 0.5s';
  //   } else {
  //     navBar.style.transform = 'translateY(-100%)';
  //     navBar.style.transition = 'transform 0.5s';
  //   }
  //   prevScrollPos = currentScrollPos;

  // }
});

// Icons animation
const iconsArray = Array.from({ length: 8 }, (_, i) => document.querySelector(`#s${i + 1}`));

function handleMouseOver(opac, scale) {
  this.style.transform = `scale(${scale})`;
  this.style.transition = "0.3 ease-in";
  iconsArray.forEach(icon => {
    if (icon !== this) {
      icon.style.opacity = opac;
    }
  });
}
iconsArray.forEach(function (icon) {
  icon.addEventListener('mouseover', function () {
    handleMouseOver.call(this, 0.50, 1.3);
  });
  icon.addEventListener('mouseout', handleMouseOut);
});

function handleMouseOut() {
  handleMouseOver.call(this, 1, 1);
}

// Mobile Nav Links
let mob = document.querySelectorAll('.mob');

mob.forEach(el => {
  el.addEventListener('click', () => {
    console.log(el);
    mobileMenu.style.left = '-100%';
    document.body.style.overflow = 'auto';
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  });
});

// Goto button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  let footer = document.querySelector("footer");

  let rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    // Footer is in the viewport, adjust the position of the button
    mybutton.style.bottom = (window.innerHeight - rect.top + 10) + "px"; // 10 is for margin
  } else {
    // Footer is not in the viewport, reset the position of the button
    mybutton.style.bottom = "10px";
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

window.onscroll = function () { scrollFunction() };
//go to top end

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Reveal Animation

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('unreveal');
      observer.unobserve(entry.target);
    }
  });
});

const revEl = document.querySelectorAll('.reveal');
revEl.forEach((el)=>{
  observer.observe(el);
});

const observer2 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('unside');
      observer2.unobserve(entry.target);
    }
  });
});

const sideEl = document.querySelectorAll('.side');
sideEl.forEach((el)=>{
  observer2.observe(el);
});

// code to change nav bar active link
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

//scroll to section from another page
window.onload = function() {
  setTimeout(function() {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      console.log(targetElement);
      if (targetElement) {
        const topOffset = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    }
  }, 100); //delay of 100 milliseconds
};