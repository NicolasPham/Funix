'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//////////////////////////////////////////////////
//define function
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//////////////////////////////////////////////////
//Add event to element

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////
// Smooth Scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords.y);
  console.log(
    'Height / Width viewport: ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: 'smooth' });
}); //add window.pageYOffset to make it absolute to the top instead of relative

//////////////////////////////////////////////////
// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Components ======================

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  //Guard Clause: whenever we don't click on the button, it should return nothing
  if (!clicked) return;

  //Remove active tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );

  //active tab
  clicked.classList.add('operations__tab--active');

  //avtivate content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Navbar faded animation ======================
function handleHover(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//another way
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navigation ======================
//OLD WAY =========
// window.addEventListener('scroll', function () {
//   const initialY = section1.getBoundingClientRect();
//   console.log('Intial: ', initialY.top);
//   console.log(window.scrollY);
//   if (window.scrollY > initialY.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//NEW WAY =======
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  if (!entries[0].isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //'-' show that the margin apply on top of the header
});
headerObserver.observe(header);

//Reveal Sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); //unobserve after we done the work
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});
allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

//Lazy IMG ======================
const allLazyImgs = document.querySelectorAll('.features__img');

const lazyImgLoading = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const imgElement = entry.target;
  const url = imgElement.dataset.src;

  imgElement.src = url;
  imgElement.classList.remove('lazy-img');
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(lazyImgLoading, {
  root: null,
  threshold: 1,
  rootMargin: '30px',
});
allLazyImgs.forEach(img => {
  imgObserver.observe(img);
});

//Slider ======================
function slider() {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  let curSlide = 0;

  const createDots = function () {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide=${i} ></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(d => d.classList.remove('dots__dot--active'));
    const dot = document.querySelector(`.dots__dot[data-slide="${slide}"]`);
    dot.classList.add('dots__dot--active');
  };

  const goToSlide = function (slideNumber) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - slideNumber)}%)`;
    });
    activeDot(slideNumber);
  };

  const nextSlide = function () {
    if (curSlide < slides.length - 1) curSlide++;
    else curSlide = 0;
    goToSlide(curSlide);
  };
  const previousSlide = function () {
    if (curSlide > 0) curSlide--;
    else curSlide = slides.length - 1;
    goToSlide(curSlide);
  };

  createDots();
  goToSlide(0);

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`;
  });

  btnLeft.addEventListener('click', previousSlide);
  btnRight.addEventListener('click', nextSlide);
  //using keyboard
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && previousSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  //Create Dots
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = e.target.dataset.slide;
      goToSlide(curSlide);
    }
  });
}
slider();
