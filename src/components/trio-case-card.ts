import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-case-card')
export class TrioCaseCard extends LitElement {
  @property({ type: String }) image = '';
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';

  static styles = css`
    :host { display: flex; }
    .case-card { display: flex; height: 100%; flex: 1; flex-direction: column; gap: 16px; border-radius: 8px; min-width: 240px; }
    .case-card-image-wrap { width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; }
    .case-card-image { width: 100%; height: 100%; object-fit: cover; display: block; }
    .case-card-body { display: flex; flex-direction: column; gap: 4px; }
    .case-card-title { color: #0e141b; font-size: 16px; font-weight: 500; line-height: 1.5; margin: 0; }
    .case-card-description { color: #4d7399; font-size: 14px; line-height: 1.5; margin: 0; }
  `;

  render() {
    return html`<div class="case-card"><div class="case-card-image-wrap"><img class="case-card-image" src="${this.image}" alt="${this.title}" /></div><div class="case-card-body"><p class="case-card-title">${this.title}</p><p class="case-card-description">${this.description}</p></div></div>`;
  }
}
