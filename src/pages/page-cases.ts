import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/trio-case-list';

@customElement('page-cases')
export class PageCases extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: any = {};

  static styles = css`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #0e141b;
      margin: 0;
      min-width: 288px;
    }
    .footer-actions {
      display: flex;
      justify-content: center;
      padding: 0.75rem 1rem;
    }
    .btn-contact {
      display: inline-flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 2.5rem;
      padding: 0 1.5rem;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 0.015em;
      border: none;
      text-decoration: none;
      background-color: #1572cf;
      color: #f8fafc;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>

        <trio-case-list .cases=${this.data.items} .scrollable=${false} .lang=${this.lang}></trio-case-list>

        <div class="footer-actions">
          <a href="${this.lang === 'jp' ? '#/jp/contact' : '#/contact'}" class="btn-contact">
            ${this.data.contactUs}
          </a>
        </div>
      </div>
    `;
  }
}
