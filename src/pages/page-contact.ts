import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/trio-contact-form.js';
import '../components/trio-contact-info.js';

@customElement('page-contact')
export class PageContact extends LitElement {
  @property({ type: Object }) data: any = {};
  static styles = css`
    :host { display: block; }
    .head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; padding: 16px; }
    .box { display: flex; min-width: 288px; flex-direction: column; gap: 12px; }
    .title { color: #111518; font-size: 32px; font-weight: 700; line-height: 1.2; margin: 0; }
    .subtitle { color: #5e7387; font-size: 14px; line-height: 1.5; margin: 0; }
  `;
  render() {
    const c = this.data.contact;
    return html`<div class="head"><div class="box"><p class="title">${c.pageTitle}</p><p class="subtitle">${c.pageSubtitle}</p></div></div><trio-contact-form .content=${c}></trio-contact-form><trio-contact-info .content=${c}></trio-contact-info>`;
  }
}
