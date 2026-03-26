/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show menu
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Close menu
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

// Remove menu on link click
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
   navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
   const header = document.getElementById('header')
   // When the scroll is greater than 50 viewport height, add the scroll-header class
   this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')

if (contactForm) {
   contactForm.addEventListener('submit', function(e) {
      e.preventDefault()

      const name = document.getElementById('contact-name').value
      const email = document.getElementById('contact-email').value
      const message = document.getElementById('contact-message').value

      if (name && email && message) {
         console.log('Message sent:', {name, email, message})
         contactForm.reset()
         alert('Message sent successfully!')
      }
   })
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher on the page than 350 viewport height, show the scroll-up button
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__link[href*=' + sectionId + ']')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         sectionsClass?.classList.add('active-link')
      } else {
         sectionsClass?.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400
})

sr.reveal(`.home__data, .home__images, .about__data, .about__img, .services__card, .projects__card`)
