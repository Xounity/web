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
    const topOffset = targetElement.getBoundingClientRect().top;
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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
