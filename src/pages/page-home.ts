import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/trio-hero.js';
import '../components/trio-service-grid.js';
import '../components/trio-case-list.js';
import '../components/trio-news-item.js';
import '../components/trio-cta-section.js';

@customElement('page-home')
export class PageHome extends LitElement {
  @property({ type: Object }) data: any = {};
  @property({ type: String }) lang = 'en';

  static styles = css`
    :host { display: block; }
    .section-title { color: #0e141b; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; padding: 20px 16px 12px; margin: 0; }
    .intro-wrap { display: flex; flex-direction: column; gap: 32px; padding: 20px 16px; }
    .intro-head { display: flex; flex-direction: column; gap: 12px; }
    .intro-title { color: #0e141b; font-size: 28px; font-weight: 900; line-height: 1.2; letter-spacing: -0.033em; margin: 0; max-width: 720px; }
    .intro-desc { color: #0e141b; font-size: 16px; line-height: 1.5; margin: 0; max-width: 720px; opacity: 0.8; }
    .news-list { display: flex; flex-direction: column; }
  `;

  render() {
    const h = this.data;
    if (!h) return html`<div>Loading...</div>`;
    const servicesHref = this.lang === 'jp' ? '#/jp/services' : '#/services';
    const contactHref = this.lang === 'jp' ? '#/jp/contact' : '#/contact';
    const heroImage = this.lang === 'jp' ? '/img/hero-jp.jpg' : '/img/hero-en.jpg';
    return html`
      <trio-hero .title=${h.heroTitle} .subtitle=${h.heroSubtitle} .buttonText=${h.heroButton} .buttonHref=${servicesHref} .backgroundImage=${heroImage}></trio-hero>
      <h2 class="section-title">${h.expertiseTitle}</h2>
      <div class="intro-wrap"><div class="intro-head"><h2 class="intro-title">${h.expertiseSubtitle}</h2><p class="intro-desc">${h.expertiseDescription}</p></div><trio-service-grid .services=${h.services}></trio-service-grid></div>
      <h2 class="section-title">${h.casesTitle}</h2>
      <trio-case-list .cases=${h.cases} .scrollable=${true}></trio-case-list>
      <h2 class="section-title">${h.newsTitle}</h2>
      <div class="news-list">${h.news.map((item: any) => html`<trio-news-item .category=${item.category} .title=${item.title} .description=${item.description} .image=${item.image}></trio-news-item>`)}</div>
      <trio-cta-section .title=${h.ctaTitle} .buttonText=${h.ctaButton} .buttonHref=${contactHref} tone="blue"></trio-cta-section>
    `;
  }
}
