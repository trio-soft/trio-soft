import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '../components/trio-cta-section';
import { USERS_SVG, ROCKET_SVG, LIGHTBULB_SVG, GEAR_SVG, GLOBE_24_SVG, LIST_CHECKS_SVG, BRIEFCASE_SVG } from '../icons';

const iconMap: Record<string, string> = {
  users: USERS_SVG,
  rocket: ROCKET_SVG,
  lightbulb: LIGHTBULB_SVG,
  gear: GEAR_SVG,
  globe: GLOBE_24_SVG,
};

@customElement('page-careers')
export class PageCareers extends LitElement {
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
      margin: 0;
      padding: 1rem;
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
    .text-content {
      font-size: 16px;
      line-height: 1.6;
      color: #111518;
      padding: 0.25rem 1rem 0.75rem;
      margin: 0;
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
    .value-card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem;
      border-radius: 0.5rem;
      border: 1px solid #d5dce2;
      background-color: #f9fafb;
    }
    .value-icon {
      color: #1572cf;
      width: 24px;
      height: 24px;
    }
    .value-title {
      font-size: 16px;
      font-weight: bold;
      color: #111518;
      margin: 0;
    }
    .value-desc {
      font-size: 14px;
      line-height: 1.6;
      color: #5e7387;
      margin: 0;
    }
    .culture-list {
      padding: 0.5rem 1rem 0.75rem 2.5rem;
      margin: 0;
    }
    .culture-list li {
      font-size: 15px;
      line-height: 1.8;
      color: #333;
    }
    .job-card {
      margin: 1rem;
      padding: 1.5rem;
      border-radius: 0.75rem;
      border: 1px solid #d5dce2;
      background: #fff;
    }
    .job-title {
      font-size: 20px;
      font-weight: bold;
      color: #111518;
      margin: 0 0 0.5rem;
    }
    .job-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 14px;
      color: #5e7387;
    }
    .job-meta span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .job-desc {
      font-size: 15px;
      line-height: 1.6;
      color: #333;
      margin: 0 0 1rem;
    }
    .job-section-title {
      font-size: 15px;
      font-weight: 700;
      color: #111518;
      margin: 1rem 0 0.5rem;
    }
    .job-list {
      padding-left: 1.25rem;
      margin: 0;
    }
    .job-list li {
      font-size: 14px;
      line-height: 1.7;
      color: #333;
    }
    .json-ld { display: none; }
  `;

  private getJsonLd() {
    if (!this.data.jobs?.length) return '';
    const job = this.data.jobs[0];
    const schema = {
      '@context': 'https://schema.org/',
      '@type': 'JobPosting',
      title: job.title,
      description: job.description,
      datePosted: '2025-03-15',
      employmentType: ['FULL_TIME', 'CONTRACTOR'],
      jobLocationType: 'TELECOMMUTE',
      applicantLocationRequirements: { '@type': 'Country', name: 'Japan' },
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Trio-Soft',
        sameAs: 'https://trio-soft.biz',
        logo: 'https://trio-soft.biz/logo.png',
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Yokohama',
          addressRegion: 'Kanagawa',
          addressCountry: 'JP',
        },
      },
    };
    return JSON.stringify(schema);
  }

  render() {
    const responsibilitiesLabel = this.lang === 'jp' ? '主な業務内容' : 'Responsibilities';
    const requirementsLabel = this.lang === 'jp' ? '必須スキル・経験' : 'Requirements';
    const niceToHaveLabel = this.lang === 'jp' ? '歓迎スキル' : 'Nice to Have';

    return html`
      <div class="container">
        <h1 class="page-title">${this.data.pageTitle}</h1>

        <h2 class="section-heading">${this.data.introTitle}</h2>
        <p class="text-content">${this.data.intro}</p>

        <h2 class="section-heading">${this.data.valuesTitle}</h2>
        <div class="values-grid">
          ${this.data.values?.map((v: any) => html`
            <div class="value-card">
              <div class="value-icon">${unsafeHTML(iconMap[v.icon] || USERS_SVG)}</div>
              <h3 class="value-title">${v.title}</h3>
              <p class="value-desc">${v.description}</p>
            </div>
          `)}
        </div>

        <h2 class="section-heading">${this.data.cultureTitle}</h2>
        <ul class="culture-list">
          ${this.data.cultureItems?.map((item: string) => html`<li>${item}</li>`)}
        </ul>

        <h2 class="section-heading">${this.data.jobsTitle}</h2>
        ${this.data.jobs?.map((job: any) => html`
          <div class="job-card">
            <h3 class="job-title">${job.title}</h3>
            <div class="job-meta">
              <span>📍 ${job.location}</span>
              <span>💼 ${job.type}</span>
              ${job.salary ? html`<span>💰 ${job.salary}</span>` : ''}
            </div>
            <p class="job-desc">${job.description}</p>
            <div class="job-section-title">${responsibilitiesLabel}</div>
            <ul class="job-list">
              ${job.responsibilities?.map((r: string) => html`<li>${r}</li>`)}
            </ul>
            <div class="job-section-title">${requirementsLabel}</div>
            <ul class="job-list">
              ${job.requirements?.map((r: string) => html`<li>${r}</li>`)}
            </ul>
            <div class="job-section-title">${niceToHaveLabel}</div>
            <ul class="job-list">
              ${job.niceToHave?.map((r: string) => html`<li>${r}</li>`)}
            </ul>
          </div>
        `)}

        <trio-cta-section
          .title=${this.data.applyTitle}
          .subtitle=${this.data.applySubtitle}
          .buttonText=${this.data.applyButton}
          .buttonHref=${this.lang === 'jp' ? '#/jp/contact' : '#/contact'}
          .lang=${this.lang}>
        </trio-cta-section>

        <script class="json-ld" type="application/ld+json" .textContent=${this.getJsonLd()}></script>
      </div>
    `;
  }
}
