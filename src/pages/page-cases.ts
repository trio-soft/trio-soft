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
      max-width: 960px;
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
    .actions-container {
      display: flex;
      flex: 1;
      gap: 0.75rem;
      flex-wrap: wrap;
      max-width: 480px;
      justify-content: center;
    }
    .btn {
      display: flex;
      min-width: 84px;
      max-width: 480px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 9999px;
      height: 2.5rem;
      padding: 0 1rem;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.5;
      letter-spacing: 0.015em;
      border: none;
      flex-grow: 1;
      text-decoration: none;
    }
    .btn-primary {
      background-color: #bcd1e5;
      color: #111518;
    }
    .btn-secondary {
      background-color: #eaedf0;
      color: #111518;
    }
    .truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>

        <trio-case-list .cases=${this.data.items} .scrollable=${false}></trio-case-list>

        <div class="footer-actions">
          <div class="actions-container">
            <button class="btn btn-primary">
              <span class="truncate">${this.data.viewAll}</span>
            </button>
            <a href="${this.lang === 'jp' ? '#/jp/contact' : '#/contact'}" class="btn btn-secondary">
              <span class="truncate">${this.data.contactUs}</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
