import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getIcon } from './trio-service-card.js';

@customElement('trio-value-card')
export class TrioValueCard extends LitElement {
  @property({ type: String }) icon = 'lightbulb';
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';

  static styles = css`
    :host { display: flex; }
    .card { display: flex; flex: 1; gap: 12px; border-radius: 8px; border: 1px solid #d5dce2; background: #f9fafb; padding: 16px; flex-direction: column; }
    .icon { color: #111518; width: 24px; height: 24px; }
    .title { color: #111518; font-size: 16px; font-weight: 700; margin: 0; }
    .description { color: #5e7387; font-size: 14px; line-height: 1.5; margin: 0; }
  `;

  render() { return html`<div class="card"><div class="icon">${unsafeHTML(getIcon(this.icon))}</div><h2 class="title">${this.title}</h2><p class="description">${this.description}</p></div>`; }
}
