'use strict';

let importManager;
(function() {
  importManager = new ImportManager();
  importManager.loadContent('home');
})();

function homePressed() {
  importManager.loadContent('home');
}

function projectsPressed(project) {
  const navs = [];
  if (!!project) {
    importManager.loadContent(`${project}`);
    navs.push(`${project}`);
  } else {
    importManager.loadContent('projects');
  }
  importManager.selectNavBarActiveItems(navs);
}

function contactPressed() {
  importManager.loadContent('contact');
}
