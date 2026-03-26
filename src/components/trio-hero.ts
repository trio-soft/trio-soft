import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-hero')
export class TrioHero extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) buttonText = '';
  @property({ type: String }) buttonHref = '';
  @property({ type: String }) backgroundImage = '/hero-en.jpg';

  static styles = css`
    :host { display: block; }
    .hero-container { padding: 16px; }
    .hero-banner {
      position: relative;
      display: flex;
      min-height: 480px;
      flex-direction: column;
      gap: 24px;
      border-radius: 12px;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 40px;
      overflow: hidden;
    }
    .hero-image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%);
    }
    .hero-content { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 24px; align-items: flex-start; }
    .hero-text { display: flex; flex-direction: column; gap: 8px; }
    .hero-title {
      color: white; font-size: clamp(36px, 5vw, 48px); font-weight: 900;
      line-height: 1.2; letter-spacing: -0.033em; margin: 0;
    }
    .hero-subtitle { color: white; font-size: 16px; line-height: 1.5; margin: 0; max-width: 720px; }
    .hero-btn {
      display: inline-flex; min-width: 84px; align-items: center; justify-content: center;
      border-radius: 9999px; height: 48px; padding: 0 20px; background: #1572cf; color: #f8fafc;
      font-size: 16px; font-weight: 700; letter-spacing: 0.015em; text-decoration: none;
    }
    @media (max-width: 768px) {
      .hero-banner { min-height: 320px; padding: 24px 16px; }
      .hero-title { font-size: 28px; }
      .hero-subtitle { font-size: 14px; }
    }
  `;

  render() {
    return html`
      <div class="hero-container">
        <div class="hero-banner">
          <img class="hero-image" src="${this.backgroundImage}" alt="" />
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">${this.title}</h1>
              <p class="hero-subtitle">${this.subtitle}</p>
            </div>
            <a class="hero-btn" href="${this.buttonHref}">${this.buttonText}</a>
          </div>
        </div>
      </div>
    `;
  }
}
