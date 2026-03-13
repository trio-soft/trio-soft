import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { CARET_RIGHT_SVG } from '../icons.js';

@customElement('trio-language-selector')
export class TrioLanguageSelector extends LitElement {
  @property({ type: Object }) content: any = {};

  static styles = css`
    :host { display: block; }
    .wrap { display: flex; flex: 1; justify-content: center; align-items: center; padding: 20px 16px; }
    .inner { display: flex; flex-direction: column; max-width: 960px; width: 100%; }
    .center { display: flex; flex-direction: column; gap: 32px; align-items: center; justify-content: center; padding: 80px 0; }
    .text { display: flex; flex-direction: column; gap: 16px; text-align: center; }
    .title { color: #0e141b; font-size: 36px; font-weight: 900; letter-spacing: -0.033em; margin: 0; }
    .subtitle { color: #4d7399; font-size: 16px; margin: 0; }
    .list { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 448px; }
    .card { display: flex; align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px; border: 1px solid #d0dbe7; background: white; padding: 24px; text-decoration: none; color: inherit; }
    .left { display: flex; align-items: center; gap: 16px; }
    .flag { display: flex; height: 48px; width: 48px; align-items: center; justify-content: center; border-radius: 9999px; background: #e7edf3; font-size: 24px; }
    .name { color: #0e141b; font-size: 18px; font-weight: 700; margin: 0; }
    .desc { color: #4d7399; font-size: 14px; margin: 0; }
  `;

  renderCard(item: any) {
    return html`<a class="card" href="${item.href}"><div class="left"><div class="flag">${item.flag}</div><div><p class="name">${item.name}</p><p class="desc">${item.desc}</p></div></div><div>${unsafeHTML(CARET_RIGHT_SVG)}</div></a>`;
  }

  render() {
    const c = this.content;
    return html`<div class="wrap"><div class="inner"><div class="center"><div class="text"><h1 class="title">${c.title}</h1><p class="subtitle">${c.subtitle}</p></div><div class="list">${this.renderCard(c.en)}${this.renderCard(c.jp)}</div></div></div></div>`;
  }
}
