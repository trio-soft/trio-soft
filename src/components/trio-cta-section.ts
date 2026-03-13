import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-cta-section')
export class TrioCtaSection extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) buttonText = '';
  @property({ type: String }) buttonHref = '';
  @property({ type: String }) tone = 'blue';

  static styles = css`
    :host { display: block; }
    .section { display: flex; flex-direction: column; justify-content: flex-end; gap: 24px; padding: 40px 16px 80px; }
    .text { display: flex; flex-direction: column; gap: 8px; text-align: center; align-items: center; }
    .title { color: #0e141b; font-size: clamp(32px, 4vw, 36px); font-weight: 900; line-height: 1.2; letter-spacing: -0.033em; margin: 0; max-width: 720px; }
    .subtitle { color: #0e141b; font-size: 16px; line-height: 1.5; margin: 0; max-width: 720px; }
    .actions { display: flex; justify-content: center; }
    .btn { display: inline-flex; min-width: 84px; align-items: center; justify-content: center; border-radius: 9999px; height: 48px; padding: 0 20px; text-decoration: none; font-size: 16px; font-weight: 700; }
    .btn.blue { background: #1572cf; color: #f8fafc; }
    .btn.light { background: #bcd1e5; color: #111518; }
  `;

  render() {
    return html`<div class="section"><div class="text"><h2 class="title">${this.title}</h2>${this.subtitle ? html`<p class="subtitle">${this.subtitle}</p>` : ''}</div><div class="actions"><a class="btn ${this.tone}" href="${this.buttonHref}">${this.buttonText}</a></div></div>`;
  }
}
