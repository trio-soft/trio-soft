import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './trio-service-card.js';
import type { ServiceCard } from '../data/en.js';

@customElement('trio-service-grid')
export class TrioServiceGrid extends LitElement {
  @property({ type: Array }) services: ServiceCard[] = [];

  static styles = css`
    :host {
      display: block;
    }
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
      gap: 12px;
      padding: 0;
    }
    @media (max-width: 768px) {
      .service-grid { grid-template-columns: 1fr; }
    }
  `;

  render() {
    return html`
      <div class="service-grid">
        ${this.services.map(svc => html`
          <trio-service-card
            .icon="${svc.icon}"
            .title="${svc.title}"
            .description="${svc.description}"
          ></trio-service-card>
        `)}
      </div>
    `;
  }
}
