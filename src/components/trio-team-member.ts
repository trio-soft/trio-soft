import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { USER_SVG } from '../icons.js';

@customElement('trio-team-member')
export class TrioTeamMember extends LitElement {
  @property({ type: String }) name = '';
  @property({ type: String }) role = '';

  static styles = css`
    :host { display: flex; }
    .card { display: flex; flex: 1; gap: 12px; border-radius: 8px; border: 1px solid #d5dce2; background: #f9fafb; padding: 16px; flex-direction: column; }
    .icon { color: #111518; width: 24px; height: 24px; }
    .body { display: flex; flex-direction: column; gap: 4px; }
    .name { color: #111518; font-size: 16px; font-weight: 700; margin: 0; }
    .role { color: #5e7387; font-size: 14px; margin: 0; }
  `;

  render() { return html`<div class="card"><div class="icon">${unsafeHTML(USER_SVG)}</div><div class="body"><h2 class="name">${this.name}</h2><p class="role">${this.role}</p></div></div>`; }
}
