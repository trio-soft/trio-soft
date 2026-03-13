import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './trio-case-card.js';
import type { CaseCard } from '../data/en.js';

@customElement('trio-case-list')
export class TrioCaseList extends LitElement {
  @property({ type: Array }) cases: CaseCard[] = [];
  @property({ type: Boolean }) scrollable = false;
  @property({ type: String }) lang = 'en';

  static styles = css`
    :host {
      display: block;
    }
    .case-list-scrollable {
      display: flex;
      overflow-x: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .case-list-scrollable::-webkit-scrollbar {
      display: none;
    }
    .case-list-scrollable .case-list-inner {
      display: flex;
      align-items: stretch;
      padding: 16px;
      gap: 12px;
    }
    .case-list-vertical .case-list-inner {
      display: flex;
      flex-direction: column;
    }
  `;

  render() {
    const isHorizontal = !this.scrollable;
    const cls = this.scrollable ? 'case-list-scrollable' : 'case-list-vertical';
    return html`
      <div class="${cls}">
        <div class="case-list-inner">
          ${this.cases.map(c => html`
            <trio-case-card
              .image="${c.image}"
              .title="${c.title}"
              .description="${c.description}"
              .client="${c.client || ''}"
              .horizontal="${isHorizontal}"
              .lang="${this.lang}"
            ></trio-case-card>
          `)}
        </div>
      </div>
    `;
  }
}
