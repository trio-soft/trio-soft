import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('page-terms')
export class PageTerms extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: any = {};

  static styles = css`
    :host {
      display: block;
      padding: 1.25rem 0;
    }
    .container {
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0 0 1.5rem 0;
      padding: 1rem;
    }
    .content {
      font-size: 16px;
      line-height: 1.6;
      color: #111518;
      padding: 0 1rem;
    }
    .content h3 {
      font-size: 20px;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
    .content p {
      margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .content { font-size: 14px; }
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>
        <div class="content">
          ${unsafeHTML(this.data.content)}
        </div>
      </div>
    `;
  }
}
