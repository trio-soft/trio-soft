import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/trio-service-grid.js';
import '../components/trio-cta-section.js';

@customElement('page-services')
export class PageServices extends LitElement {
  @property({ type: Object }) data: any = {};
  @property({ type: String }) lang = 'en';
  static styles = css`
    :host { display: block; }
    .page-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; padding: 16px; }
    .page-head-box { display: flex; min-width: 288px; flex-direction: column; gap: 12px; }
    .page-title { color: #111518; font-size: 32px; font-weight: 700; line-height: 1.2; margin: 0; }
    .page-subtitle { color: #4d7499; font-size: 14px; line-height: 1.5; margin: 0; }
    .section-title { color: #0e151b; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; padding: 20px 16px 12px; margin: 0; }
    .grid-wrap { padding: 16px; }
  `;
  render() {
    const s = this.data.services;
    const contactHref = this.lang === 'jp' ? '#/jp/contact' : '#/contact';
    return html`<div class="page-head"><div class="page-head-box"><p class="page-title">${s.pageTitle}</p><p class="page-subtitle">${s.pageSubtitle}</p></div></div>${s.sections.map((section: any) => html`<h2 class="section-title">${section.title}</h2><div class="grid-wrap"><trio-service-grid .services=${section.cards}></trio-service-grid></div>`)}<trio-cta-section .title=${s.ctaTitle} .subtitle=${s.ctaSubtitle} .buttonText=${s.ctaButton} .buttonHref=${contactHref} tone="blue"></trio-cta-section>`;
  }
}
