import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('trio-news-item')
export class TrioNewsItem extends LitElement {
  @property({ type: String }) category = '';
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';
  @property({ type: String }) image = '';

  static styles = css`
    :host { display: block; }
    .news-item { display: flex; align-items: stretch; justify-content: space-between; gap: 16px; border-radius: 12px; padding: 16px; }
    .news-item-text { display: flex; flex-direction: column; gap: 4px; flex: 2; }
    .news-item-category, .news-item-description { color: #4d7399; font-size: 14px; line-height: 1.5; margin: 0; }
    .news-item-title { color: #0e141b; font-size: 16px; font-weight: 700; line-height: 1.3; margin: 0; }
    .news-item-image-wrap { flex: 1; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; }
    .news-item-image { width: 100%; height: 100%; object-fit: cover; display: block; }
    @media (max-width: 768px) {
      .news-item { flex-direction: column; }
      .news-item-image-wrap { aspect-ratio: 16/9; }
    }
  `;

  render() {
    return html`<div class="news-item"><div class="news-item-text"><p class="news-item-category">${this.category}</p><p class="news-item-title">${this.title}</p><p class="news-item-description">${this.description}</p></div><div class="news-item-image-wrap"><img class="news-item-image" src="${this.image}" alt="${this.title}" /></div></div>`;
  }
}
