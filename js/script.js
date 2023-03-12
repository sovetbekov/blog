const menuOpenIcon = document.querySelector(".hamburger-icon");
const sideMenuCloseIcon = document.querySelector(".hamburger-icon-close");
const sideMenu = document.querySelector(".side-menu");
const openIconTop = document.querySelector(".hamburger-icon div:first-of-type");
const openIconBottom = document.querySelector(
  ".hamburger-icon div:last-of-type"
);
const desktopMenu = document.querySelector(".desktop-menu");
var openNav = false;
var isMobile;
var winWidth;
var navRight = document.querySelector(".nav-right");
var navLeft = document.querySelector(".nav-left");
var nav = document.querySelector("nav");

// MENU OPEN/CLOSE
function openAnimation() {
  //opening animation for desktop nav
  openIconTop.style.webkitTransform = "rotate(-45deg) translateY(6px)";
  openIconBottom.style.webkitTransform = "rotate(45deg) translateY(-6px)";
  desktopMenu.style.webkitTransform = "scaleX(1)";
  desktopMenu.style.opacity = "1";
}

function closeAnimation() {
  //closing animation for desktop nav
  openIconTop.style.webkitTransform = "rotate(0deg) translateY(0px)";
  openIconBottom.style.webkitTransform = "rotate(0deg) translateY(0px)";
  desktopMenu.style.webkitTransform = "scaleX(0)";
  desktopMenu.style.opacity = "0";
}

var desktopFunction = function() {
  //eventlistener function for desktop nav
  if (openNav === false) {
    openAnimation();
    openNav = true;
  } else if (openNav === true) {
    closeAnimation();
    openNav = false;
  }
};

var mobileOpenFunction = function() {
  //eventlistener function for opening mobile nav
  sideMenu.classList.add("side-menu-open");
  openNav = true;
};

var mobileCloseFunction = function() {
  //eventlistener function for closing mobile nav
  sideMenu.classList.remove("side-menu-open");
  openNav = false;
};

window.onload = function() {
  //determines which nav is functioning on load of page
  winWidth = window.innerWidth;
  if (winWidth <= 991) {
    //if mobile width, then mobile nav functions
    isMobile = true;
    sideMenu.style.display = "block";
    menuOpenIcon.addEventListener("click", mobileOpenFunction);
    sideMenuCloseIcon.addEventListener("click", mobileCloseFunction);
  } else if (winWidth > 991) {
    //if desktop width, then desktop nav functions
    isMobile = false;
    desktopMenu.style.display = "flex";
    menuOpenIcon.addEventListener("click", desktopFunction);
  }
  // if (winWidth <= 499) {
  //   nav.style.display = "flex";
  //   nav.appendChild(navRight);
  //   nav.appendChild(navLeft);
  // }
};

window.onresize = function() {
  //determines which nav is functioning on resize of page
  winWidth = window.innerWidth;
  if (winWidth <= 991) {
    //if mobile width
    if (isMobile === false) {
      //and previous nav was desktop
      isMobile = true;
      desktopMenu.style.display = "none"; //reverse desktop nav functions
      menuOpenIcon.removeEventListener("click", desktopFunction);
      closeAnimation();
      openNav = false;
      sideMenu.style.display = "block"; //add mobile nav functions
      menuOpenIcon.addEventListener("click", mobileOpenFunction);
      sideMenuCloseIcon.addEventListener("click", mobileCloseFunction);
    }
  } else if (winWidth > 991) {
    //if desktop width
    if (isMobile === true) {
      //and previous nav was mobile
      isMobile = false;
      sideMenu.style.display = "none"; //reverse mobile nav functions
      menuOpenIcon.removeEventListener("click", mobileOpenFunction);
      sideMenuCloseIcon.removeEventListener("click", mobileCloseFunction);
      sideMenu.classList.remove("side-menu-open");
      openNav = false;
      desktopMenu.style.display = "flex"; //add desktop nav functions
      menuOpenIcon.addEventListener("click", desktopFunction);
    }
  }
};




////////////////////////////////




// function([string1, string2],target id,[color1,color2])    
consoleText(['welcome', 'to the blog of', 'Talgat Sovetbekov.'], 'text',['#','#','#']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}