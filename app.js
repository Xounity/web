let mobileMenu = document.querySelector('.mobile-menu');
    let menuIcon = document.querySelector('.hamburger');
    menuIcon.addEventListener('click',()=>{
      if(mobileMenu.style.left !== '0px'){
        mobileMenu.style.left = '0px';
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
      document.body.style.overflow = 'hidden';
      }
      else{
        mobileMenu.style.left = '-100%';
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
      document.body.style.overflow = 'auto';
      }
    });
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
    let prevScrollPos = window.pageYOffset;
    let navBar = document.querySelector('header');
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        navBar.style.transform = 'translateY(0)';
        navBar.style.transition = 'transform 0.5s';
      } else {
        navBar.style.transform = 'translateY(-100%)';
        navBar.style.transition = 'transform 0.5s';
      }
      prevScrollPos = currentScrollPos;
      
    }
  });

  // Mobile Nav Links
  let mob = document.querySelectorAll('.mob');

  mob.forEach(el => {
    el.addEventListener('click',()=>{
      console.log(el);
      mobileMenu.style.left = '-100%';
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    });
  });