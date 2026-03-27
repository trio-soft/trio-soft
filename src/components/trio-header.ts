import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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

  @state() private _menuOpen = false;

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
      position: relative;
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
    .hamburger {
      display: none;
      cursor: pointer;
      background: none;
      border: none;
      font-size: 24px;
      color: #0e141b;
      padding: 4px 8px;
      line-height: 1;
    }
    .mobile-nav {
      display: none;
    }

    @media (max-width: 768px) {
      .header-nav { display: none; }
      .hamburger { display: flex; align-items: center; }
      .mobile-nav {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #f8fafc;
        border-bottom: 1px solid #e7edf3;
        padding: 8px 0;
        z-index: 100;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }
      .mobile-nav[hidden] { display: none; }
      .mobile-nav-link {
        color: #0e141b;
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        padding: 12px 24px;
        border-bottom: 1px solid #e7edf3;
      }
      .mobile-nav-link:last-child { border-bottom: none; }
      .mobile-nav-link:hover { background: #eef2f6; }
    }

    @media (max-width: 900px) and (min-width: 769px) {
      .header { padding: 12px 16px; }
      .header-nav { gap: 16px; }
    }
  `;

  private _toggleMenu() {
    this._menuOpen = !this._menuOpen;
  }

  private _closeMenu() {
    this._menuOpen = false;
  }

  render() {
    const langHref = '#/language';
    const homeHref = this.lang === 'jp' ? '#/jp/' : '#/';

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
          <button class="hamburger" @click=${this._toggleMenu} aria-label="Toggle menu">☰</button>
        </div>
        <nav class="mobile-nav" ?hidden=${!this._menuOpen}>
          ${this.data.nav.map(item => html`<a class="mobile-nav-link" href="${item.href}" @click=${this._closeMenu}>${item.label}</a>`)}
        </nav>
      </header>
    `;
  }
}
