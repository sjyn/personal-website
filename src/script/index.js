const HOME = 'home';
const CONTACT = 'contact';
const PROJECTS = 'projects/projects';
const RECIPIECE = 'projects/recipiece';

let darkMode = true;

function loadHtml(routeId) {
  const req = new XMLHttpRequest();
  req.open('GET', `./html/${routeId}.html`);
  req.send();
  req.onload = () => {
    document.getElementById('main-content').innerHTML = req.responseText;
  };
}

function setFocused(navId) {
  const navs = document.querySelectorAll('[id$=nav]');
  navs.forEach((nav) => {
    nav.classList.remove('uk-active');
  });
  document.getElementById(`${navId}-nav`).classList.add('uk-active');
}

function toggleDarkMode() {
  const styleLink = document.getElementById('theme-style');
  if (darkMode) {
    styleLink.setAttribute('href', 'style/light-theme.css');
  } else {
    styleLink.setAttribute('href', 'style/dark-theme.css');
  }
  darkMode = !darkMode;
}

const router = new Navigo(null, true, '#');
router.on({
  [CONTACT]: () => {
    loadHtml(CONTACT);
    setFocused(CONTACT);
  },
  [PROJECTS]: () => {
    loadHtml(PROJECTS);
    setFocused('projects');
  },
  [RECIPIECE]: () => {
    loadHtml(RECIPIECE);
    setFocused('projects');
  },
  [HOME]: () => {
    loadHtml(HOME);
    setFocused('home');
  }
});
router.on(() => {
  loadHtml('home');
  setFocused('home');
});

router.resolve();

