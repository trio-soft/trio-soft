import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { USER_SVG, ROBOT_SVG } from '../icons.js';

@customElement('trio-team-member')
export class TrioTeamMember extends LitElement {
  @property({ type: String }) name = '';
  @property({ type: String }) role = '';
  @property({ type: Boolean }) isAI = false;

  static styles = css`
    :host { display: flex; }
    .card {
      display: flex; flex: 1; gap: 12px; border-radius: 8px;
      border: 1px solid #d5dce2; background: #f9fafb;
      padding: 16px; flex-direction: column;
    }
    .card.ai {
      background: #eef4ff;
      border-color: #b3caf5;
    }
    .icon { color: #111518; width: 24px; height: 24px; }
    .card.ai .icon { color: #3b5bdb; }
    .body { display: flex; flex-direction: column; gap: 4px; }
    .name { color: #111518; font-size: 16px; font-weight: 700; margin: 0; }
    .role { color: #5e7387; font-size: 14px; margin: 0; }
    .badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: #3b5bdb;
      background: #dbe4ff;
      border-radius: 4px;
      padding: 2px 6px;
      margin-top: 4px;
      width: fit-content;
    }
  `;

  render() {
    return html`
      <div class="card ${this.isAI ? 'ai' : ''}">
        <div class="icon">${unsafeHTML(this.isAI ? ROBOT_SVG : USER_SVG)}</div>
        <div class="body">
          <h2 class="name">${this.name}</h2>
          <p class="role">${this.role}</p>
          ${this.isAI ? html`<span class="badge">Digital Employee</span>` : ''}
        </div>
      </div>
    `;
  }
}
