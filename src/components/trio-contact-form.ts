import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-contact-form')
export class TrioContactForm extends LitElement {
  @property({ type: Object }) content: any = {};

  static styles = css`
    :host { display: block; }
    .field-row { display: flex; max-width: 480px; flex-wrap: wrap; align-items: flex-end; gap: 16px; padding: 12px 16px; }
    .field-label-wrap { display: flex; flex-direction: column; min-width: 160px; flex: 1; }
    .field-label { color: #111518; font-size: 16px; font-weight: 500; padding-bottom: 8px; }
    .field-input, .field-textarea {
      width: 100%; border-radius: 12px; color: #111518; border: 1px solid #d5dce2; background: #f8fafc;
      padding: 15px; font-size: 16px; line-height: 1.5; box-sizing: border-box;
    }
    .field-input { height: 56px; }
    .field-textarea { min-height: 144px; resize: vertical; }
    .submit-row { display: flex; padding: 12px 16px; justify-content: flex-start; }
    .submit-btn {
      display: inline-flex; min-width: 84px; align-items: center; justify-content: center; border-radius: 9999px; height: 40px;
      padding: 0 16px; background: #bcd1e5; color: #111518; font-size: 14px; font-weight: 700; border: none;
    }
  `;

  render() {
    const c = this.content;
    return html`
      ${[['nameLabel','namePlaceholder','input'],['emailLabel','emailPlaceholder','email'],['subjectLabel','subjectPlaceholder','input']].map(([label, ph, type]) => html`
        <div class="field-row"><label class="field-label-wrap"><span class="field-label">${c[label]}</span><input class="field-input" type="${type === 'email' ? 'email' : 'text'}" placeholder="${c[ph]}" /></label></div>
      `)}
      <div class="field-row"><label class="field-label-wrap"><span class="field-label">${c.messageLabel}</span><textarea class="field-textarea" placeholder="${c.messagePlaceholder}"></textarea></label></div>
      <div class="submit-row"><button class="submit-btn" type="button">${c.submit}</button></div>
    `;
  }
}
