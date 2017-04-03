('use strict');

window.onload = () => {
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
  const aboutHeight = about.getBoundingClientRect().top
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
    let highlight = setTimeout(
      () => {
        navHome.className = '';
        navAbout.className = '';
        navProjects.className = '';
        navContact.className = '';
      },
      500
    );
  }

  // scrolls in response to nav selection
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

  // scroll to relevant section
  function handleNavClick(e) {
    switch (e.target.innerText) {
      case 'Home':
        body.scrollTop = 0;
        e.target.setAttribute('class', 'red');
        break;
      case 'About':
        document.body.scrollTop = aboutHeight;
        e.target.setAttribute('class', 'red');
        break;
      case 'Projects':
        document.body.scrollTop = projectsHeight;
        e.target.setAttribute('class', 'red');
        break;
      case 'Contact':
        document.body.scrollTop = contactHeight;
        e.target.setAttribute('class', 'red');
        break;
    }
  }

  // remove?
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

  function handleProjectClick(e) {
    //hide all project containers, project header, and mobile-clue
    projectOne.setAttribute('class', 'project-container hidden');
    projectTwo.setAttribute('class', 'project-container hidden');
    projectThree.setAttribute('class', 'project-container hidden');
    projectFour.setAttribute('class', 'project-container hidden');
    projectHeader.setAttribute('class', 'hidden');
    mobileClue.setAttribute('class', 'hidden');

    //hide contact form
    contactName.setAttribute('class', 'hidden');
    contactHeader.setAttribute('class', 'hidden');
    contactSend.setAttribute('class', 'hidden');
    contactEmail.setAttribute('class', 'hidden');
    contactMessage.setAttribute('class', 'hidden');

    // reveal info div with relevant info list
    if (e.target.attributes[0].nodeValue == `project-one-image`) {
      projectInfo.setAttribute('class', 'showInfo');
      projectOneList.setAttribute('class', 'project-list');
    } else if (e.target.attributes[0].nodeValue == `project-two-image`) {
      projectInfo.setAttribute('class', 'showInfo');
      projectTwoList.setAttribute('class', 'project-list');
    } else if (e.target.attributes[0].nodeValue == `project-three-image`) {
      projectInfo.setAttribute('class', 'showInfo');
      projectThreeList.setAttribute('class', 'project-list');
    } else if (e.target.attributes[0].nodeValue == `project-four-image`) {
      projectInfo.setAttribute('class', 'showInfo');
      projectFourList.setAttribute('class', 'project-list');
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
  }

  // set bar width to cover distance between beginning of opposite span
  function moveBars() {
    let widthOne = first.getBoundingClientRect().left -
      last.getBoundingClientRect().left -
      window.innerWidth / 55;
    let widthTwo = first.getBoundingClientRect().right -
      last.getBoundingClientRect().right -
      window.innerWidth / 55;
    let widthThree = title.getBoundingClientRect().right -
      title.getBoundingClientRect().left;

    let leftOne = last.getBoundingClientRect().left;
    let rightTwo = window.innerWidth - first.getBoundingClientRect().right;
    let leftThree = window.innerWidth / 2 - widthThree / 2;
    barOne.style.width = `${widthOne}px`;
    barTwo.style.width = `${widthTwo}px`;
    barThree.style.width = `${widthThree}px`;

    barOne.style.left = `${leftOne}px`;
    barTwo.style.right = `${rightTwo}px`;
    title.style.left = `${leftThree}px`;
    barThree.style.left = `${leftThree}px`;
  }

  // unfinished; randomize color pallet
  function colorizer() {
    // array of pallet object names
    const pallets = ['mountain', 'meadow', 'cave', 'dusk'];

    // object of color pallet objects
    const colors = {
      mountain: {
        background: 'lightblue',
        barsHeaders: 'green',
        text: 'blue',
        footer: 'green',
        welcome: 'green'
      },
      meadow: {
        background: '#da7d2d',
        barsHeaders: 'yellow',
        text: 'orange',
        footer: 'yellow',
        welcome: 'yellow'
      },
      cave: {
        background: '#fadfad',
        barsHeaders: 'pink',
        text: 'yellow',
        footer: 'pink',
        welcome: 'pink'
      },
      dusk: {
        background: 'green',
        barsHeaders: 'purple',
        text: 'palegoldenrod',
        footer: 'orange',
        welcome: 'purple'
      }
    };

    // chose random index of pallet name array
    let picker = Math.floor(Math.random() * pallets.length);

    // set overall background color to given pallet's background color
    welcome.style.backgroundColor = colors[pallets[picker]].background;
    about.style.backgroundColor = colors[pallets[picker]].background;
    portfolio.style.backgroundColor = colors[pallets[picker]].background;
    contact.style.backgroundColor = colors[pallets[picker]].background;
    body.style.backgroundColor = colors[pallets[picker]].background;

    // set navs, bars, headers to given pallet's barsHeader color
    nav.style.backgroundColor = colors[pallets[picker]].barsHeaders;
    contactHeader.style.color = colors[pallets[picker]].barsHeaders;
    aboutHeader.style.color = colors[pallets[picker]].barsHeaders;
    projectHeader.style.color = colors[pallets[picker]].barsHeaders;
    bun1.style.backgroundColor = colors[pallets[picker]].barsHeaders;
    bun2.style.backgroundColor = colors[pallets[picker]].barsHeaders;
    bun3.style.backgroundColor = colors[pallets[picker]].barsHeaders;
    barOne.style.backgroundColor = colors[pallets[picker]].barsHeaders;
    barTwo.style.backgroundColor = colors[pallets[picker]].barsHeaders;
    barThree.style.backgroundColor = colors[pallets[picker]].barsHeaders;

    // set text elements to given pallet's text color
    // remember to standardize li color
    // projectOneList.style.color = colors[pallets[picker]].text;
    // projectTwoList.style.color = colors[pallets[picker]].text;
    // projectThreeList.style.color = colors[pallets[picker]].text;
    contactSend.style.color = colors[pallets[picker]].text;
    nav.style.color = colors[pallets[picker]].text;
    bio.style.color = colors[pallets[picker]].text;
    first.style.color = colors[pallets[picker]].text;
    last.style.color = colors[pallets[picker]].text;
    mobileClue.style.color = colors[pallets[picker]].text;
    title.style.color = colors[pallets[picker]].text;

    // set footer elements given pallet's footer color
    github.style.backgroundColor = colors[pallets[picker]].footer;
    contactSend.style.backgroundColor = colors[pallets[picker]].footer;
    footer.style.backgroundColor = colors[pallets[picker]].footer;
    twitter.style.backgroundColor = colors[pallets[picker]].footer;
    linkedin.style.backgroundColor = colors[pallets[picker]].footer;
  }

  function handleSocialClick(e) {
    if (e.target.id === 'twitter') {
      window.open('https://twitter.com/realdanpease', '_blank');
    } else if (e.target.id === 'github') {
      window.open('https://github.com/daniel-j-pease', '_blank');
    } else {
      window.open('https://www.linkedin.com/in/daniel-pease', '_blank');
    }
  }

  // assign all event listners
  hamburger.addEventListener('click', handleHamburgerClick);
  nav.addEventListener('click', handleNavClick);
  body.addEventListener('click', hideNav);

  // window.addEventListener('scroll', checkHamburger);
  window.addEventListener('resize', moveBars);
  projectOne.addEventListener('click', handleProjectClick);
  projectTwo.addEventListener('click', handleProjectClick);
  projectThree.addEventListener('click', handleProjectClick);
  projectFour.addEventListener('click', handleProjectClick);
  projectClose.addEventListener('click', handleProjectClose);
  twitter.addEventListener('click', handleSocialClick);
  github.addEventListener('click', handleSocialClick);
  linkedin.addEventListener('click', handleSocialClick);

  window.addEventListener('orientationchange', checkOrientation)

  // invoke moveBars and colorizer to dynamically set pallet and bar width
  moveBars();
  colorizer();

  function checkOrientation() {
    console.log('change')
    moveBars();
  }
};
