console.log('main.js connected');
'use strict';

window.onload = () => {
  console.log('dom loaded');
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");
  const viewHeight = window.innerHeight;
  const body = document.querySelector("body");
  const barOne = document.querySelector("#bar-one");
  const barTwo = document.querySelector("#bar-two");
  const barThree = document.querySelector("#bar-three");
  const homeHeight = 0;
  const aboutHeight = viewHeight;
  const projectsHeight = viewHeight * 2;
  const contactHeight = viewHeight * 3;

  // barOne.style.display = "block";
  // barTwo.style.display = "block";
  // barThree.style.display = "block";

  function handleHamburgerClick() {
    nav.style.display = "block";
    nav.className = "reveal";
  }

  function hideNav(e) {
    if (e.target !== hamburger && e.srcElement.nodeName !== "SPAN") {
      nav.className = ""
    }
    if (e.target.className === "not") {
      nav.className = "";
    }
  }

  function handleNavClick(e) {
    // call scrollTo on the intended position
    if (e.target.innerText === "Home") {
      scrollTo(homeHeight, 300);
    } else if (e.target.innerText === "About") {
      scrollTo(aboutHeight, 300);
    } else if (e.target.innerText === "Projects") {
      scrollTo(projectsHeight, 300);
    } else if (e.target.innerText === "Contact") {
      scrollTo(contactHeight, 300);
    }
  };

  function checkHamburger() {
    if (document.body.scrollTop > viewHeight * 3) {
      hamburger.childNodes[1].style.backgroundColor = "#355C7D";
      hamburger.childNodes[3].style.backgroundColor = "#355C7D";
      hamburger.childNodes[5].style.backgroundColor = "#355C7D";
    } else {
      hamburger.childNodes[1].style.backgroundColor = "";
      hamburger.childNodes[3].style.backgroundColor = "";
      hamburger.childNodes[5].style.backgroundColor = "";
    };
  };

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

  function moveBars() {
    // barOne.style.top = `${firstBarTop}px`;
    // barOne.style.left = `${firstBarLeft + 10}px`;
    // barOne.style.width = `${posFirstLeft - firstBarLeft - 15}px`;
    //
    // barTwo.style.top = `${lastBarTop}px`;
    // barTwo.style.width = `${posFirstRight - posLastRight - 20}px`;
    // barTwo.style.left = `${posFirstRight - barTwo.offsetWidth - 10}px`;
  }

  hamburger.addEventListener("click", handleHamburgerClick);
  nav.addEventListener("click", handleNavClick);
  body.addEventListener("click", hideNav);
  window.addEventListener("scroll", checkHamburger);

  moveBars();
};
