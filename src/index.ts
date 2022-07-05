import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const themeList: Element | null = document.querySelector('.theme-btn');
const themeItems: NodeListOf<Element> = document.querySelectorAll('[data-theme]');
const themeBody: Element | null = document.querySelector('body');

if (themeList) {
  themeList.addEventListener('click', function(event) {
    const target = event.target as HTMLElement;

    themeItems.forEach(element => {
      element.classList.remove('theme-active');
      if (target) {
        target.classList.add('theme-active');
      }
    });
    if (target.dataset.theme === 'white' && themeBody) {
        themeBody.classList.add('bodyWhite');
    }
    if (target.dataset.theme === 'black' && themeBody) {
      themeBody.classList.remove('bodyWhite');
    }
  });
}