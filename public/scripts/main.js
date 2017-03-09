console.log('main.js connected');
('use strict');

window.onload = () => {
  console.log('dom loaded');
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');
  const viewHeight = window.innerHeight;
  const body = document.querySelector('body');
  const barOne = document.querySelector('#bar-one');
  const barTwo = document.querySelector('#bar-two');
  const barThree = document.querySelector('#bar-three');
  const homeHeight = 0;
  const aboutHeight = viewHeight;
  const projectsHeight = viewHeight * 2;
  const contactHeight = viewHeight * 3;
  const projectOne = document.querySelector('#project-one-container');
  const projectTwo = document.querySelector('#project-two-container');
  const projectThree = document.querySelector('#project-three-container');
  const projectOneList = document.querySelector('#project-one-list');
  const projectTwoList = document.querySelector('#project-two-list');
  const projectThreeList = document.querySelector('#project-three-list');
  const projectClose = document.querySelector('#project-close');
  const projectInfo = document.querySelector('#project-info');

  function handleHamburgerClick() {
    nav.style.display = 'block';
    nav.className = 'navDrop';
  }

  function hideNav(e) {
    if (e.target !== hamburger && e.srcElement.nodeName !== 'SPAN') {
      nav.className = '';
    }
    if (e.target.className === 'not') {
      nav.className = '';
    }
  }

  function handleNavClick(e) {
    switch (e.target.innerText) {
      case 'Home':
        scrollTo(homeHeight, 300);
        break;
      case 'About':
        scrollTo(aboutHeight, 300);
        break;
      case 'Projects':
        scrollTo(projectsHeight, 300);
        break;
      case 'Contact':
        scrollTo(contactHeight, 300);
        break;
    }
  }

  function checkHamburger() {
    if (document.body.scrollTop > viewHeight * 3) {
      hamburger.childNodes[1].style.backgroundColor = '#355C7D';
      hamburger.childNodes[3].style.backgroundColor = '#355C7D';
      hamburger.childNodes[5].style.backgroundColor = '#355C7D';
    } else {
      hamburger.childNodes[1].style.backgroundColor = '';
      hamburger.childNodes[3].style.backgroundColor = '';
      hamburger.childNodes[5].style.backgroundColor = '';
    }
  }

  // scrolls in response to hamburger selection
  function scrollTo(target, duration) {
    const distance = target - document.body.scrollTop;
    const perTick = distance / duration * 10;
    const scroller = setInterval(
      () => {
        if (duration <= 0 || document.body.scrollTop === target) {
          clearInterval(scroller);
        } else {
          duration -= 10;
          document.body.scrollTop += perTick;
        }
      },
      10
    );
  }

  function handleProjectClick(e) {
    if (e.target.attributes[0].nodeValue == `project-one-image`) {
      console.log('clicked')
      projectInfo.setAttribute('class', 'showInfo');
      projectOneList.setAttribute('class', 'project-list');
    } else if (e.target.attributes[0].nodeValue == `project-two-image`) {
      projectInfo.setAttribute('class', '');
      projectTwoList.setAttribute('class', 'project-list');
    } else if (e.target.attributes[0].nodeValue == `project-three-image`) {
      projectInfo.setAttribute('class', '');
      projectThreeList.setAttribute('class', 'project-list');
    }
  }

  function handleProjectClose(e) {
    projectInfo.setAttribute('class', 'hidden');
    projectOneList.setAttribute('class', 'project-list hidden');
    projectTwoList.setAttribute('class', 'project-list hidden');
    projectThreeList.setAttribute('class', 'project-list hidden');
  }

  function moveBars() {
    let widthOne = first.getBoundingClientRect().left - window.innerWidth / 7;
    let widthTwo = window.innerWidth -
      window.innerWidth / 7 -
      last.getBoundingClientRect().right;
    barOne.style.width = `${widthOne}px`;
    barTwo.style.width = `${widthTwo}px`;
  }

  function checkInfoDiv() {
    console.log('info clicked')
  }

  hamburger.addEventListener('click', handleHamburgerClick);
  nav.addEventListener('click', handleNavClick);
  body.addEventListener('click', hideNav);
  window.addEventListener('scroll', checkHamburger);
  window.addEventListener('resize', moveBars);
  projectOne.addEventListener('click', handleProjectClick);
  projectTwo.addEventListener('click', handleProjectClick);
  projectThree.addEventListener('click', handleProjectClick);
  projectClose.addEventListener('click', handleProjectClose);

  projectInfo.addEventListener('click', checkInfoDiv)

  moveBars();
};
