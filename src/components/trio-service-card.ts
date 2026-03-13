import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  GEAR_SVG, APP_WINDOW_SVG, ROBOT_SVG, PRESENTATION_CHART_SVG,
  CLOUD_SVG, LIGHTBULB_SVG, GLOBE_24_SVG, DEVICE_MOBILE_SVG,
  CODE_SVG, VIDEO_SVG, CHART_LINE_SVG, HEADSET_SVG,
  USERS_SVG, BRIEFCASE_SVG, LIST_CHECKS_SVG, USER_SVG, ROCKET_SVG
} from '../icons.js';

const ICON_MAP: Record<string, string> = {
  'gear': GEAR_SVG,
  'app-window': APP_WINDOW_SVG,
  'robot': ROBOT_SVG,
  'presentation-chart': PRESENTATION_CHART_SVG,
  'cloud': CLOUD_SVG,
  'lightbulb': LIGHTBULB_SVG,
  'globe': GLOBE_24_SVG,
  'device-mobile': DEVICE_MOBILE_SVG,
  'code': CODE_SVG,
  'video': VIDEO_SVG,
  'chart-line': CHART_LINE_SVG,
  'headset': HEADSET_SVG,
  'users': USERS_SVG,
  'briefcase': BRIEFCASE_SVG,
  'list-checks': LIST_CHECKS_SVG,
  'user': USER_SVG,
  'rocket': ROCKET_SVG,
};

export function getIcon(name: string): string {
  return ICON_MAP[name] || ICON_MAP['gear'];
}

@customElement('trio-service-card')
export class TrioServiceCard extends LitElement {
  @property({ type: String }) icon = 'gear';
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';

  static styles = css`
    :host {
      display: flex;
      flex: 1;
    }
    .service-card {
      display: flex;
      flex: 1;
      gap: 12px;
      border-radius: 8px;
      border: 1px solid #d0dbe7;
      background: #f8fafc;
      padding: 16px;
      flex-direction: column;
    }
    .service-card-icon {
      color: #0e141b;
      width: 24px;
      height: 24px;
    }
    .service-card-icon svg {
      width: 24px;
      height: 24px;
    }
    .service-card-body {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .service-card-title {
      color: #0e141b;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.3;
      margin: 0;
    }
    .service-card-description {
      color: #4d7399;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      margin: 0;
    }
  `;

  render() {
    return html`
      <div class="service-card">
        <div class="service-card-icon">${unsafeHTML(getIcon(this.icon))}</div>
        <div class="service-card-body">
          <h2 class="service-card-title">${this.title}</h2>
          <p class="service-card-description">${this.description}</p>
        </div>
      </div>
    `;
  }
}
