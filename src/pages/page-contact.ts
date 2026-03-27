import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

const FORMSPREE_URL = 'https://formspree.io/f/mreyloqo';

@customElement('page-contact')
export class PageContact extends LitElement {
  @property({ type: String }) lang = 'en';
  @property({ type: Object }) data: any = {};

  @state() private _status: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  @state() private _errorMessage = '';

  @query('form') private _form!: HTMLFormElement;

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
    .title-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      min-width: 288px;
    }
    .page-title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: -0.015em;
      color: #111518;
      margin: 0;
    }
    .page-subtitle {
      font-size: 14px;
      font-weight: normal;
      line-height: 1.5;
      color: #5e7387;
      margin: 0;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.75rem 1rem;
      max-width: 480px;
    }
    .field-label {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #111518;
      padding-bottom: 0.5rem;
      margin: 0;
    }
    .form-input {
      display: flex;
      width: 100%;
      min-width: 0;
      flex: 1;
      border-radius: 0.75rem;
      color: #111518;
      border: 1px solid #d5dce2;
      background-color: #f9fafb;
      height: 3.5rem;
      padding: 0.9375rem;
      font-size: 16px;
      font-family: inherit;
      box-sizing: border-box;
    }
    .form-input:focus {
      outline: none;
      border-color: #1572cf;
    }
    .form-textarea {
      min-height: 9rem;
      resize: none;
    }
    .btn-container {
      display: flex;
      padding: 0.75rem 1rem;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }
    .btn-submit {
      display: flex;
      min-width: 84px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      height: 2.5rem;
      padding: 0 1.5rem;
      background-color: #1572cf;
      color: #f8fafc;
      font-size: 14px;
      font-weight: bold;
      border: none;
      font-family: inherit;
    }
    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .status-message {
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
      padding: 0 1rem;
    }
    .status-success {
      color: #16a34a;
    }
    .status-error {
      color: #dc2626;
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
    .info-text {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.5;
      color: #111518;
      padding: 0.25rem 1rem 0.75rem;
      margin: 0;
    }
    .map-container {
      display: flex;
      padding: 0.75rem 1rem;
    }
    .map-wrapper {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: 0.75rem;
      overflow: hidden;
    }
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
    @media (max-width: 768px) {
      .page-title { font-size: 24px; }
      .title-group { min-width: 0; }
    }
  `;

  private async _handleSubmit(e: Event) {
    e.preventDefault();
    this._status = 'submitting';
    this._errorMessage = '';

    const formData = new FormData(this._form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        this._status = 'success';
        this._form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          this._errorMessage = data.errors.map((err: any) => err.message).join(', ');
        } else {
          this._errorMessage = this.lang === 'jp'
            ? 'フォームの送信中に問題が発生しました。'
            : 'Oops! There was a problem submitting your form.';
        }
        this._status = 'error';
      }
    } catch {
      this._errorMessage = this.lang === 'jp'
        ? 'フォームの送信中に問題が発生しました。'
        : 'Oops! There was a problem submitting your form.';
      this._status = 'error';
    }
  }

  private _renderStatusMessage() {
    if (this._status === 'success') {
      const msg = this.lang === 'jp' ? 'お問い合わせありがとうございます！' : 'Thanks for your submission!';
      return html`<p class="status-message status-success">${msg}</p>`;
    }
    if (this._status === 'error') {
      return html`<p class="status-message status-error">${this._errorMessage}</p>`;
    }
    return '';
  }

  render() {
    const isSubmitting = this._status === 'submitting';

    return html`
      <div class="container">
        <div class="header-section">
          <div class="title-group">
            <h1 class="page-title">${this.data.pageTitle}</h1>
            <p class="page-subtitle">${this.data.pageSubtitle}</p>
          </div>
        </div>

        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.nameLabel}</p>
              <input class="form-input" name="name" placeholder="${this.data.namePlaceholder}" required />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.emailLabel}</p>
              <input class="form-input" name="email" type="email" placeholder="${this.data.emailPlaceholder}" required />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.subjectLabel}</p>
              <input class="form-input" name="subject" placeholder="${this.data.subjectPlaceholder}" />
            </label>
          </div>
          <div class="form-group">
            <label>
              <p class="field-label">${this.data.messageLabel}</p>
              <textarea class="form-input form-textarea" name="message" placeholder="${this.data.messagePlaceholder}" required></textarea>
            </label>
          </div>

          <div class="btn-container">
            <button class="btn-submit" type="submit" ?disabled=${isSubmitting}>
              ${isSubmitting ? (this.lang === 'jp' ? '送信中...' : 'Submitting...') : this.data.submit}
            </button>
          </div>
        </form>

        ${this._renderStatusMessage()}

        <h2 class="section-heading">${this.data.infoTitle}</h2>
        <p class="info-text">${this.data.address}</p>
        <p class="info-text">${this.data.phone}</p>
        <p class="info-text">${this.data.email}</p>

        <div class="map-container">
          <div class="map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13000.749442277467!2d139.6295169!3d35.4501557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cf783637a3d%3A0xf5fc887b7ca7b451!2z5pel5pys44CSMjMxLTAwMDQgS2FuYWdhd2EsIFlva29oYW1hLCBOYWthIFdhcmQsIE1vdG9oYW1hY2jFjSwgMy1jaMWNbWXiiJIyMS0yIOODmOODquOCquOCuemWouWGheODk-ODqyA0NDE0!5e0!3m2!1szh-TW!2sde!4v1753498457617!5m2!1szh-TW!2sde" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    `;
  }
}
