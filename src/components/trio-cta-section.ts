import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-cta-section')
export class TrioCtaSection extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) buttonText = '';
  @property({ type: String }) buttonHref = '';
  @property({ type: String }) lang = 'en';

  static styles = css`
    :host { display: block; }
    .cta-wrap { padding: 20px 16px; }
    .cta-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      padding: 40px 0;
      background: #f8fafc;
      border-radius: 12px;
    }
    .cta-text { display: flex; flex-direction: column; gap: 12px; text-align: center; align-items: center; }
    .cta-title {
      color: #0e141b;
      font-size: 28px;
      font-weight: 900;
      line-height: 1.2;
      letter-spacing: -0.033em;
      margin: 0;
      max-width: 720px;
    }
    .cta-subtitle {
      color: #0e141b;
      font-size: 16px;
      line-height: 1.5;
      margin: 0;
      max-width: 720px;
      opacity: 0.8;
    }
    .cta-action { display: flex; justify-content: center; }
    .cta-button {
      display: inline-flex;
      min-width: 120px;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 48px;
      padding: 0 24px;
      background: #1572cf;
      color: #f8fafc;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.015em;
      text-decoration: none;
    }
  `;

  render() {
    const href = this.buttonHref || (this.lang === 'jp' ? '#/jp/contact' : '#/contact');
    return html`
      <div class="cta-wrap">
        <div class="cta-box">
          <div class="cta-text">
            <h2 class="cta-title">${this.title}</h2>
            ${this.subtitle ? html`<p class="cta-subtitle">${this.subtitle}</p>` : ''}
          </div>
          <div class="cta-action">
            <a class="cta-button" href="${href}">${this.buttonText}</a>
          </div>
        </div>
      </div>
    `;
  }
}
