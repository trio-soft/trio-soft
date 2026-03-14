import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-footer')
export class TrioFooter extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: { privacyPolicy: string; termsOfService: string; copyright: string } = {
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    copyright: '© 2025 Trio-Soft. All rights reserved.',
  };

  static styles = css`
    :host {
      display: block;
    }
    .footer-outer {
      display: flex;
      justify-content: center;
    }
    .footer-inner {
      display: flex;
      max-width: 960px;
      flex: 1;
      flex-direction: column;
    }
    .footer-content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 40px 20px;
      text-align: center;
    }
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }
    .footer-link {
      color: #4d7399;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      min-width: 160px;
    }
    .footer-link:hover {
      color: #1572cf;
    }
    .footer-copyright {
      color: #4d7399;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }
  `;

  render() {
    const privacyHref = this.lang === 'jp' ? '#/jp/privacy' : '#/privacy';
    const termsHref = this.lang === 'jp' ? '#/jp/terms' : '#/terms';

    return html`
      <div class="footer-outer">
        <div class="footer-inner">
          <div class="footer-content">
            <div class="footer-links">
              <a class="footer-link" href="${privacyHref}">${this.data.privacyPolicy}</a>
              <a class="footer-link" href="${termsHref}">${this.data.termsOfService}</a>
            </div>
            <p class="footer-copyright">${this.data.copyright}</p>
          </div>
        </div>
      </div>
    `;
  }
}
