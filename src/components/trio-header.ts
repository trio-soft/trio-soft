import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { LOGO_SVG, GLOBE_SVG } from '../icons.js';
import type { NavItem } from '../data/en.js';

@customElement('trio-header')
export class TrioHeader extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: String }) brandName = 'Trio-Soft';
  @property({ type: Array }) navItems: NavItem[] = [];
  @property({ type: String }) getStarted = 'Get Started';

  static styles = css`
    :host {
      display: block;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
      border-bottom: 1px solid #e7edf3;
      padding: 12px 40px;
    }
    .header-brand {
      display: flex;
      align-items: center;
      gap: 16px;
      color: #0e141b;
    }
    .header-logo {
      width: 16px;
      height: 16px;
    }
    .header-brand-name {
      font-size: 18px;
      font-weight: 700;
      color: #111518;
      text-decoration: none;
      letter-spacing: -0.015em;
    }
    .header-right {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 32px;
    }
    .header-nav {
      display: flex;
      align-items: center;
      gap: 36px;
    }
    .header-nav-link {
      color: #0e141b;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
    }
    .header-nav-link:hover {
      color: #1572cf;
    }
    .header-actions {
      display: flex;
      gap: 8px;
    }
    .header-cta-btn {
      display: flex;
      min-width: 84px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 40px;
      padding: 0 16px;
      background: #1572cf;
      color: #f8fafc;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.015em;
      border: none;
      text-decoration: none;
    }
    .header-cta-btn:hover {
      background: #1260b0;
    }
    .header-lang-btn {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 40px;
      width: 40px;
      background: #e7edf3;
      color: #0e141b;
      text-decoration: none;
      border: none;
    }
    .header-lang-btn:hover {
      background: #d0dbe7;
    }
  `;

  render() {
    const langHref = this.lang === 'jp' ? '#/language' : '#/language';
    const homeHref = this.lang === 'jp' ? '#/jp/' : '#/';
    const contactHref = this.lang === 'jp' ? '#/jp/contact' : '#/contact';

    return html`
      <header class="header">
        <div class="header-brand">
          <div class="header-logo">${unsafeHTML(LOGO_SVG)}</div>
          <a class="header-brand-name" href="${homeHref}">${this.brandName}</a>
        </div>
        <div class="header-right">
          <nav class="header-nav">
            ${this.navItems.map(item => html`
              <a class="header-nav-link" href="${item.href}">${item.label}</a>
            `)}
          </nav>
          <div class="header-actions">
            <a class="header-cta-btn" href="${contactHref}">${this.getStarted}</a>
            <a class="header-lang-btn" href="${langHref}" title="Change language">
              ${unsafeHTML(GLOBE_SVG)}
            </a>
          </div>
        </div>
      </header>
    `;
  }
}
