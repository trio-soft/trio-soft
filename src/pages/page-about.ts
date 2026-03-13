import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../components/trio-cta-section';
import { USER_SVG, LIGHTBULB_SVG, USERS_SVG, ROCKET_SVG } from '../icons';

@customElement('page-about')
export class PageAbout extends LitElement {
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
    .header-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 1rem;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0;
      min-width: 288px;
    }
    .text-content {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.5;
      color: #111518;
      padding: 0.25rem 1rem 0.75rem;
      margin: 0;
    }
    .section-heading {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      padding: 1.25rem 1rem 0.75rem;
      margin: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
      gap: 0.75rem;
      padding: 1rem;
    }
    .card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid #d5dce2;
      background-color: #f9fafb; /* gray-50 */
    }
    .card-icon {
      color: #111518;
      width: 24px;
      height: 24px;
    }
    .card-title {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.2;
      color: #111518;
      margin: 0;
    }
    .card-desc {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.5;
      color: #5e7387;
      margin: 0;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header-section">
          <h1 class="page-title">${this.data.pageTitle}</h1>
        </div>
        <p class="text-content">${this.data.intro}</p>

        <h2 class="section-heading">${this.data.storyTitle}</h2>
        <p class="text-content">${this.data.story}</p>

        <h2 class="section-heading">${this.data.teamTitle}</h2>
        <div class="grid">
          ${this.data.team.map((member: any) => html`
            <div class="card">
              <div class="card-icon">${unsafeHTML(USER_SVG)}</div>
              <div class="title-group">
                <h3 class="card-title">${member.name}</h3>
                <p class="card-desc">${member.role}</p>
              </div>
            </div>
          `)}
        </div>
        <p class="text-content">${this.data.teamDescription}</p>

        <h2 class="section-heading">${this.data.valuesTitle}</h2>
        <div class="grid">
          ${this.data.values.map((value: any) => html`
            <div class="card">
              <div class="card-icon">
                <!-- Simple mapping for icons -->
                ${value.icon === 'lightbulb' ? unsafeHTML(LIGHTBULB_SVG) : ''}
                ${value.icon === 'users' ? unsafeHTML(USERS_SVG) : ''}
                ${value.icon === 'rocket' ? unsafeHTML(ROCKET_SVG) : ''}
              </div>
              <div class="title-group">
                <h3 class="card-title">${value.title}</h3>
                <p class="card-desc">${value.description}</p>
              </div>
            </div>
          `)}
        </div>

        <trio-cta-section 
          .title=${this.data.ctaTitle} 
          .subtitle=${this.data.ctaSubtitle}
          .buttonText=${this.data.ctaButton}
          .lang=${this.lang}>
        </trio-cta-section>
      </div>
    `;
  }
}
