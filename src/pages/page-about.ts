import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/trio-team-member.js';
import '../components/trio-value-card.js';
import '../components/trio-cta-section.js';

@customElement('page-about')
export class PageAbout extends LitElement {
  @property({ type: Object }) data: any = {};
  @property({ type: String }) lang = 'en';
  static styles = css`
    :host { display: block; }
    .title { color: #111518; font-size: 32px; font-weight: 700; line-height: 1.2; padding: 16px; margin: 0; }
    .text { color: #111518; font-size: 16px; line-height: 1.5; padding: 4px 16px 12px; margin: 0; }
    .section-title { color: #111518; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; padding: 20px 16px 12px; margin: 0; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(158px, 1fr)); gap: 12px; padding: 16px; }
  `;
  render() {
    const a = this.data.about;
    const contactHref = this.lang === 'jp' ? '#/jp/contact' : '#/contact';
    return html`<p class="title">${a.pageTitle}</p><p class="text">${a.intro}</p><h2 class="section-title">${a.storyTitle}</h2><p class="text">${a.story}</p><h2 class="section-title">${a.teamTitle}</h2><div class="grid">${a.team.map((m: any) => html`<trio-team-member .name=${m.name} .role=${m.role}></trio-team-member>`)}</div><p class="text">${a.teamDescription}</p><h2 class="section-title">${a.valuesTitle}</h2><div class="grid">${a.values.map((v: any) => html`<trio-value-card .icon=${v.icon} .title=${v.title} .description=${v.description}></trio-value-card>`)}</div><trio-cta-section .title=${a.ctaTitle} .subtitle=${a.ctaSubtitle} .buttonText=${a.ctaButton} .buttonHref=${contactHref} tone="light"></trio-cta-section>`;
  }
}
