'use strict';

class ImportManager {
  constructor() {
    this.supportsImports = ('import' in document.createElement('link'));
    history.pushState({contentId: 'home'}, 'home', '#');
    if (this.supportsImports) {
      console.log('importing supported by browser');
    } else {
      console.log('importing not supported by browser');
    }
    this.bindToWindowEvents();
  }

  loadContent(contentId) {
    this.deSelectNavBarItems();
    if (this.supportsImports) {
      this.loadContentWithImports(contentId);
    } else {
      this.loadContentWithoutImports(contentId);
    }
    this.selectNavBarActiveItems([contentId]);
  }

  // noinspection JSMethodCanBeStatic
  loadContentWithImports(contentId) {
    const linkElem = document.querySelector(`link[rel="import"]#${contentId}-import`);
    const content = linkElem.import;
    const innerBody = content.querySelector('body');
    this.replaceContentInMain(innerBody.innerHTML, contentId);
  }

  loadContentWithoutImports(contentId) {
    const linkElem = document.querySelector(`link[rel="import"]#${contentId}-import`);
    const href = linkElem.getAttribute('href');
    const xhttp = new XMLHttpRequest();

    const context = this;
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        context.replaceContentInMain(this.responseText, contentId);
      }
    };

    xhttp.open('GET', href, true);
    xhttp.send();
  }

  // noinspection JSMethodCanBeStatic
  replaceContentInMain(content, contentId) {
    document.getElementById('main-content').innerHTML = content;
    const data = {contentId};
    history.pushState(data, contentId, '#');
  }

  // noinspection JSMethodCanBeStatic
  bindToWindowEvents() {
    window.addEventListener('popstate', (event) => {
      const state = event.state;
      if (!!state) {
        const contentId = state.contentId;
        this.loadContent(contentId);
      }
    });
  }

  // noinspection JSMethodCanBeStatic
  deSelectNavBarItems() {
    const activeClasses = document.getElementsByClassName('uk-active');
    for (let i = 0; i < activeClasses.length; i++) {
      activeClasses.item(i).classList.remove('uk-active');
    }
  }

  selectNavBarActiveItems(items) {
    items.forEach((item) => {
      document.getElementById(`${item}-nav`).classList.add('uk-active');
    });
  }
}
