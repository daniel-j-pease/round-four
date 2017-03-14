('use strict');

const test = require('./colors.js')

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
const footer = document.querySelector('footer');

const contactName = document.querySelector('#contact-name');
const contactEmail = document.querySelector('#contact-email');
const contactMessage = document.querySelector('#contact-message');
const contactSend = document.querySelector('#contact-send');
const bun1 = document.querySelector('#bun1')
const bun2 = document.querySelector('#bun2')
const bun3 = document.querySelector('#bun3')
const welcome = document.querySelector('#welcome')
const about = document.querySelector('#about')
const projects = document.querySelector('#projects')
const contact = document.querySelector('#contact')
const aboutHeader = document.querySelector('#about-header')
const projectHeader = document.querySelector('#project-header')
const contactHeader = document.querySelector('#contact-header')
const github = document.querySelector('#github')

function handleHamburgerClick() {
  nav.style.display = 'block';
  nav.className = 'showNav';
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
  console.log('clicked')
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

  //hide all project containers
  projectOne.setAttribute('class', 'project-container hidden')
  projectTwo.setAttribute('class', 'project-container hidden')
  projectThree.setAttribute('class', 'project-container hidden')

  //hide contact form
  contactName.setAttribute('class', 'hidden')
  contactHeader.setAttribute('class', 'hidden')
  contactSend.setAttribute('class', 'hidden')
  contactEmail.setAttribute('class', 'hidden')
  contactMessage.setAttribute('class', 'hidden')

  if (e.target.attributes[0].nodeValue == `project-one-image`) {
    projectInfo.setAttribute('class', 'showInfo');
    projectOneList.setAttribute('class', 'project-list');
  } else if (e.target.attributes[0].nodeValue == `project-two-image`) {
    projectInfo.setAttribute('class', 'showInfo');
    projectTwoList.setAttribute('class', 'project-list');
  } else if (e.target.attributes[0].nodeValue == `project-three-image`) {
    projectInfo.setAttribute('class', 'showInfo');
    projectThreeList.setAttribute('class', 'project-list');
  }
}

function handleProjectClose(e) {
  projectInfo.setAttribute('class', 'hidden');
  projectOneList.setAttribute('class', 'project-list hidden');
  projectTwoList.setAttribute('class', 'project-list hidden');
  projectThreeList.setAttribute('class', 'project-list hidden');
  projectOne.setAttribute('class', 'project-container')
  projectTwo.setAttribute('class', 'project-container')
  projectThree.setAttribute('class', 'project-container')
  contactName.setAttribute('class', '')
  contactHeader.setAttribute('class', '')
  contactSend.setAttribute('class', '')
  contactEmail.setAttribute('class', '')
  contactMessage.setAttribute('class', '')
}

function moveBars() {
  let widthOne = first.getBoundingClientRect().left - window.innerWidth / 7;
  let widthTwo = window.innerWidth -
    window.innerWidth / 7 -
    last.getBoundingClientRect().right;
  barOne.style.width = `${widthOne}px`;
  barTwo.style.width = `${widthTwo}px`;
}

function colorizer() {
  const pallets = [
    'mountain',
    'meadow',
    'cave',
    'dusk'
  ]

  const colors = {
    mountain: {
      'background': '#fafafa',
      'barsHeaders': 'green',
      'text': 'white',
      'footer': 'green',
      'welcome': 'green'
    },
    meadow: {
      'background': '#da7d2d',
      'barsHeaders': 'yellow',
      'text': 'orange',
      'footer': 'yellow',
      'welcome': 'yellow'
    },
    cave: {
      'background': '#fadfad',
      'barsHeaders': 'pink',
      'text': 'yellow',
      'footer': 'pink',
      'welcome': 'pink'
    },
    dusk: {
      'background': '#green',
      'barsHeaders': 'purple',
      'text': 'green',
      'footer': 'purple',
      'welcome': 'purple'
    }
  }

  let picker = Math.floor(Math.random() * pallets.length)
  console.log(picker);

  welcome.style.backgroundColor = colors[pallets[picker]].background;
  about.style.backgroundColor = colors[pallets[picker]].background;
  portfolio.style.backgroundColor = colors[pallets[picker]].background;
  contact.style.backgroundColor = colors[pallets[picker]].background;

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


  projectOneList.style.backgroundColor = colors[pallets[picker]].text;
  projectTwoList.style.backgroundColor = colors[pallets[picker]].text;
  projectThreeList.style.backgroundColor = colors[pallets[picker]].text;
  contactSend.style.color = colors[pallets[picker]].text;
  nav.style.color = colors[pallets[picker]].text;

  github.style.backgroundColor = colors[pallets[picker]].footer;
  contactSend.style.backgroundColor = colors[pallets[picker]].footer;
  footer.style.backgroundColor = colors[pallets[picker]].footer;

}

window.onload = () => {

  console.log('dom loaded');
  hamburger.addEventListener('click', handleHamburgerClick);
  nav.addEventListener('click', handleNavClick);
  body.addEventListener('click', hideNav);
  // window.addEventListener('scroll', checkHamburger);
  window.addEventListener('resize', moveBars);
  projectOne.addEventListener('click', handleProjectClick);
  projectTwo.addEventListener('click', handleProjectClick);
  projectThree.addEventListener('click', handleProjectClick);
  projectClose.addEventListener('click', handleProjectClose);

  moveBars();
  colorizer();
  console.log(github)
};
