('use strict');

console.log(
  'Hello! Thanks for visiting my site. Drop me a line and let me know what you think!'
);

window.onload = function() {
  // declare node variables (alphebetical unless part of numbered set)
  const about = document.querySelector('#about');
  const aboutHeader = document.querySelector('#about-header');
  const barOne = document.querySelector('#bar-one');
  const barTwo = document.querySelector('#bar-two');
  const barThree = document.querySelector('#bar-three');
  const bio = document.querySelector('#bio');
  const body = document.querySelector('body');
  const bun1 = document.querySelector('#bun1');
  const bun2 = document.querySelector('#bun2');
  const bun3 = document.querySelector('#bun3');
  const contact = document.querySelector('#contact');
  const contactEmail = document.querySelector('#contact-email');
  const contactHeader = document.querySelector('#contact-header');
  const contactName = document.querySelector('#contact-name');
  const contactMessage = document.querySelector('#contact-message');
  const contactSend = document.querySelector('#contact-send');
  const enterProject = document.querySelector('#enter-project');
  const footer = document.querySelector('footer');
  const github = document.querySelector('#github');
  const hamburger = document.getElementById('hamburger');
  const mobileClue = document.getElementById('mobile-clue');
  const nav = document.querySelector('nav');
  const navHome = document.querySelector('#nav-home');
  const navAbout = document.querySelector('#nav-about');
  const navProjects = document.querySelector('#nav-projects');
  const navContact = document.querySelector('#nav-contact');
  const projects = document.querySelector('#projects');
  const projectClose = document.querySelector('#project-close');
  const projectHeader = document.querySelector('#project-header');
  const projectInfo = document.querySelector('#project-info');
  const projectOne = document.querySelector('#project-one-container');
  const projectTwo = document.querySelector('#project-two-container');
  const projectThree = document.querySelector('#project-three-container');
  const projectFour = document.querySelector('#project-four-container');
  const projectOneList = document.querySelector('#project-one-list');
  const projectTwoList = document.querySelector('#project-two-list');
  const projectThreeList = document.querySelector('#project-three-list');
  const projectFourList = document.querySelector('#project-four-list');
  const welcome = document.querySelector('#welcome');

  // seize viewport height for purposes of scrolling
  const viewHeight = window.innerHeight;
  const homeHeight = 0;
  const aboutHeight = about.getBoundingClientRect().top;
  const projectsHeight = projectHeader.getBoundingClientRect().top;
  const contactHeight = body.scrollHeight;

  // on hamburger click unhide nav with transition
  function handleHamburgerClick() {
    nav.style.display = 'block';
    nav.className = 'showNav';
  }

  // if nav, click elsewhere to close nav
  function hideNav(e) {
    if (e.target !== hamburger && e.srcElement.nodeName !== 'SPAN') {
      nav.className = '';
      clearColor();
    }
    if (e.target.className === 'not') {
      nav.className = '';
      clearColor();
    }
  }

  // 500ms after hiding the nav, remove highlight from nav items
  function clearColor(ele) {
    const highlight = setTimeout(function() {
      navHome.className = '';
      navAbout.className = '';
      navProjects.className = '';
      navContact.className = '';
    }, 500);
  }

  // scrolls in response to nav selection
  function scrollTo(target, duration) {
    const distance = target - document.body.scrollTop;
    const perTick = distance / duration * 10;
    const scroller = setInterval(function() {
      if (duration <= 0 || document.body.scrollTop === target) {
        clearInterval(scroller);
      } else {
        duration -= 10;
        document.body.scrollTop += perTick;
      }
    }, 10);
  }

  // scroll to relevant section
  function handleNavClick(e) {
    e.target.setAttribute('class', 'navClicked');
    switch (e.target.innerText) {
      case 'Home':
        body.scrollTop = 0;
        break;
      case 'About':
        body.scrollTop = aboutHeight;
        break;
      case 'Projects':
        body.scrollTop = projectsHeight;
        break;
      case 'Contact':
        body.scrollTop = contactHeight;
        break;
    }
  }

  function handleProjectClick(e) {
    //hide all project containers, project header, and mobile-clue
    projectOne.setAttribute('class', 'project-container hidden');
    projectTwo.setAttribute('class', 'project-container hidden');
    projectThree.setAttribute('class', 'project-container hidden');
    projectFour.setAttribute('class', 'project-container hidden');
    projectHeader.setAttribute('class', 'hidden');
    mobileClue.setAttribute('class', 'hidden');
    hamburger.setAttribute('class', 'hidden');
    hamburger.removeEventListener('click', handleHamburgerClick);

    //hide contact form
    contactName.setAttribute('class', 'hidden');
    contactHeader.setAttribute('class', 'hidden');
    contactSend.setAttribute('class', 'hidden');
    contactEmail.setAttribute('class', 'hidden');
    contactMessage.setAttribute('class', 'hidden');

    // reveal info div with relevant info list
    if (e.target.attributes[0].nodeValue == 'project-one-image') {
      projectInfo.setAttribute('class', 'show-info');
      projectOneList.setAttribute('class', 'project-list selected');
    } else if (e.target.attributes[0].nodeValue == 'project-two-image') {
      projectInfo.setAttribute('class', 'show-info');
      projectTwoList.setAttribute('class', 'project-list selected');
    } else if (e.target.attributes[0].nodeValue == 'project-three-image') {
      projectInfo.setAttribute('class', 'show-info');
      projectThreeList.setAttribute('class', 'project-list selected');
      enterProject.innerHTML = 'Ask for an in-person demo!';
    } else if (e.target.attributes[0].nodeValue == 'project-four-image') {
      projectInfo.setAttribute('class', 'show-info');
      projectFourList.setAttribute('class', 'project-list selected');
    }
  }

  // hide info div and all info lists, unhide contact forms, project containers, project header, mobile-clue
  function handleProjectClose(e) {
    projectInfo.setAttribute('class', 'hidden');
    projectOneList.setAttribute('class', 'project-list hidden');
    projectTwoList.setAttribute('class', 'project-list hidden');
    projectThreeList.setAttribute('class', 'project-list hidden');
    projectFourList.setAttribute('class', 'project-list hidden');
    projectOne.setAttribute('class', 'project-container');
    projectTwo.setAttribute('class', 'project-container');
    projectThree.setAttribute('class', 'project-container');
    projectFour.setAttribute('class', 'project-container');
    contactName.setAttribute('class', '');
    contactHeader.setAttribute('class', '');
    projectHeader.setAttribute('class', '');
    mobileClue.setAttribute('class', '');
    contactSend.setAttribute('class', '');
    contactEmail.setAttribute('class', '');
    contactMessage.setAttribute('class', '');
    hamburger.setAttribute('class', '');
    hamburger.addEventListener('click', handleHamburgerClick);
    enterProject.innerHTML = 'Show me!';
  }

  // if esc is pressed, close project info div and unhide everything else
  function escProject(e) {
    if (e.which === 27) {
      handleProjectClose();
    }
  }

  // set bar width to cover distance between beginning of opposite span
  function moveBars() {
    const widthOne =
      first.getBoundingClientRect().left -
      last.getBoundingClientRect().left -
      window.innerWidth / 55;
    const widthTwo =
      first.getBoundingClientRect().right -
      last.getBoundingClientRect().right -
      window.innerWidth / 55;
    const widthThree =
      title.getBoundingClientRect().right - title.getBoundingClientRect().left;

    const leftOne = last.getBoundingClientRect().left;
    const rightTwo = window.innerWidth - first.getBoundingClientRect().right;
    const leftThree = window.innerWidth / 2 - widthThree / 2;

    const barOneTop =
      (first.getBoundingClientRect().bottom -
        first.getBoundingClientRect().top) /
        2 +
      first.getBoundingClientRect().top;

    const barTwoTop =
      (last.getBoundingClientRect().bottom - last.getBoundingClientRect().top) /
        2 +
      last.getBoundingClientRect().top;

    barOne.style.width = widthOne + 'px';
    barTwo.style.width = widthTwo + 'px';
    barThree.style.width = widthThree + 'px';
    barOne.style.top = barOneTop + 'px';
    barTwo.style.top = barTwoTop + 'px';

    barOne.style.left = leftOne + 'px';
    barTwo.style.right = rightTwo + 'px';
    title.style.left = leftThree + 'px';
    barThree.style.left = leftThree + 'px';
  }

  // opens respective social media site on click
  function handleSocialClick(e) {
    if (e.target.id === 'twitter') {
      window.open('https://twitter.com/realdanpease', '_blank');
    } else if (e.target.id === 'github') {
      window.open('https://github.com/daniel-j-pease', '_blank');
    } else {
      window.open('https://www.linkedin.com/in/daniel-pease', '_blank');
    }
  }

  // opens respective project on click
  function handleEnterProjectClick(e) {
    const selected = document.querySelectorAll('.selected')[0].firstElementChild
      .innerHTML;
    switch (selected) {
      case 'BustleBoy':
        window.open('https://daniel-j-pease.github.io/bustleBoy', '_blank');
        break;
      case 'soccerFinder':
        window.open('https://ghostly-shadow-26256.herokuapp.com', '_blank');
        break;
      case 'Ice Cream Lifts':
        break;
      case 'My Two Cents':
        window.open('http://www.mytwocents.nyc/', '_blank');
        break;
    }
  }

  // adjust bar positions and length when orientatin changes
  function checkOrientation() {
    moveBars();
  }

  // assign all event listners
  hamburger.addEventListener('click', handleHamburgerClick);
  nav.addEventListener('click', handleNavClick);
  body.addEventListener('click', hideNav);

  window.addEventListener('resize', moveBars);
  window.addEventListener('keydown', escProject);
  projectOne.addEventListener('click', handleProjectClick);
  projectTwo.addEventListener('click', handleProjectClick);
  projectThree.addEventListener('click', handleProjectClick);
  projectFour.addEventListener('click', handleProjectClick);
  projectClose.addEventListener('click', handleProjectClose);
  enterProject.addEventListener('click', handleEnterProjectClick);
  twitter.addEventListener('click', handleSocialClick);
  github.addEventListener('click', handleSocialClick);
  linkedin.addEventListener('click', handleSocialClick);

  window.addEventListener('orientationchange', checkOrientation);

  // invoke moveBars to dynamically set pallet and bar width
  moveBars();
};
