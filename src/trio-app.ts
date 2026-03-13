import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { en } from './data/en';
import { jp } from './data/jp';
import './components/trio-header';
import './components/trio-footer';
import './pages/page-home';
import './pages/page-services';
import './pages/page-cases';
import './pages/page-about';
import './pages/page-contact';
import './components/trio-language-selector';

@customElement('trio-app')
export class TrioApp extends LitElement {
  @state()
  private route = window.location.hash || '#/';

  @state()
  private lang = this.route.startsWith('#/jp') ? 'jp' : 'en';

  static styles = css`
    :host {
      display: block;
      min-h-screen: 100vh;
      font-family: 'Inter', 'Noto Sans', sans-serif;
      background-color: #f8fafc; /* slate-50 */
      color: #0e141b;
    }
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex-grow: 1;
    }
  `;

  constructor() {
    super();
    window.addEventListener('hashchange', () => {
      this.route = window.location.hash || '#/';
      this.lang = this.route.startsWith('#/jp') ? 'jp' : 'en';
      window.scrollTo(0, 0);
    });
  }

  render() {
    const data = this.lang === 'jp' ? jp : en;
    
    return html`
      <div class="app-container">
        ${this.route === '#/language' 
          ? html`<trio-language-selector .data=${data.language}></trio-language-selector>`
          : html`
            <trio-header .lang=${this.lang} .data=${data}></trio-header>
            <main>
              ${this.renderPage(data)}
            </main>
            <trio-footer .lang=${this.lang} .data=${data.footer}></trio-footer>
          `}
      </div>
    `;
  }

  private renderPage(data: any) {
    const path = this.lang === 'jp' ? this.route.replace('#/jp', '') || '/' : this.route.replace('#', '') || '/';
    
    switch (path) {
      case '/':
        return html`<page-home .lang=${this.lang} .data=${data.home}></page-home>`;
      case '/services':
        return html`<page-services .lang=${this.lang} .data=${data.services}></page-services>`;
      case '/cases':
        return html`<page-cases .lang=${this.lang} .data=${data.cases}></page-cases>`;
      case '/about':
        return html`<page-about .lang=${this.lang} .data=${data.about}></page-about>`;
      case '/contact':
        return html`<page-contact .lang=${this.lang} .data=${data.contact}></page-contact>`;
      default:
        return html`<page-home .lang=${this.lang} .data=${data.home}></page-home>`;
    }
  }
}
