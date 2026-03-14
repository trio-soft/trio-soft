import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { LOGO_SVG, GLOBE_SVG } from '../icons.js';
import type { NavItem } from '../data/en.js';

@customElement('trio-header')
export class TrioHeader extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: { brand: string; nav: NavItem[]; getStarted: string } = {
    brand: 'Trio-Soft',
    nav: [],
    getStarted: 'Get Started',
  };

  static styles = css`
    :host { display: block; }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
      border-bottom: 1px solid #e7edf3;
      padding: 12px 16px;
      gap: 1rem;
      background: #f8fafc;
    }
    .header-brand { display: flex; align-items: center; gap: 16px; color: #0e141b; }
    .header-logo { width: 16px; height: 16px; }
    .header-brand-name {
      font-size: 18px; font-weight: 700; color: #111518; text-decoration: none; letter-spacing: -0.015em;
    }
    .header-right { display: flex; flex: 1; justify-content: flex-end; gap: 32px; align-items: center; }
    .header-nav { display: flex; align-items: center; gap: 36px; }
    .header-nav-link { color: #0e141b; font-size: 14px; font-weight: 500; text-decoration: none; }
    .header-actions { display: flex; gap: 8px; }
    .header-cta-btn {
      display: flex; min-width: 84px; cursor: pointer; align-items: center; justify-content: center; border-radius: 9999px;
      height: 40px; padding: 0 16px; background: #1572cf; color: #f8fafc; font-size: 14px; font-weight: 700;
      letter-spacing: 0.015em; border: none; text-decoration: none;
    }
    .header-lang-btn {
      display: flex; cursor: pointer; align-items: center; justify-content: center; border-radius: 9999px;
      height: 40px; min-width: 40px; padding: 0 10px; background: #e7edf3; color: #0e141b; text-decoration: none; border: none;
    }
    @media (max-width: 900px) {
      .header { padding: 12px 16px; }
      .header-nav { gap: 16px; }
    }
  `;

  render() {
    const langHref = '#/language';
    const homeHref = this.lang === 'jp' ? '#/jp/' : '#/';
    const contactHref = this.lang === 'jp' ? '#/jp/contact' : '#/contact';

    return html`
      <header class="header">
        <div class="header-brand">
          <div class="header-logo">${unsafeHTML(LOGO_SVG)}</div>
          <a class="header-brand-name" href="${homeHref}">${this.data.brand}</a>
        </div>
        <div class="header-right">
          <nav class="header-nav">
            ${this.data.nav.map(item => html`<a class="header-nav-link" href="${item.href}">${item.label}</a>`)}
          </nav>
          <div class="header-actions">
            <a class="header-lang-btn" href="${langHref}" title="Change language">${unsafeHTML(GLOBE_SVG)}</a>
          </div>
        </div>
      </header>
    `;
  }
}
