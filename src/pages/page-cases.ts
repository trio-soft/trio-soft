import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('page-cases')
export class PageCases extends LitElement {
  @property({ type: Object }) data: any = {};
  @property({ type: String }) lang = 'en';
  static styles = css`
    :host { display: block; }
    .page-title { color: #111518; font-size: 32px; font-weight: 700; line-height: 1.2; padding: 16px; margin: 0; }
    .section-title { color: #111518; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; padding: 20px 16px 12px; margin: 0; }
    .item { padding: 16px; }
    .row { display: flex; align-items: stretch; justify-content: space-between; gap: 16px; border-radius: 12px; }
    .text { display: flex; flex-direction: column; gap: 4px; flex: 2; }
    .client, .desc { color: #5e7387; font-size: 14px; line-height: 1.5; margin: 0; }
    .title { color: #111518; font-size: 16px; font-weight: 700; line-height: 1.3; margin: 0; }
    .img-wrap { flex: 1; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; }
    .img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .actions { display: flex; justify-content: center; }
    .actions-inner { display: flex; flex: 1; gap: 12px; flex-wrap: wrap; padding: 12px 16px; max-width: 480px; justify-content: center; }
    .btn { display: inline-flex; min-width: 84px; flex: 1; align-items: center; justify-content: center; border-radius: 9999px; height: 40px; padding: 0 16px; font-size: 14px; font-weight: 700; text-decoration: none; }
    .btn.primary { background: #bcd1e5; color: #111518; }
    .btn.secondary { background: #eaedf0; color: #111518; }
  `;
  render() {
    const c = this.data.cases;
    const contactHref = this.lang === 'jp' ? '#/jp/contact' : '#/contact';
    return html`<p class="page-title">${c.pageTitle}</p>${c.items.map((item: any) => html`<h2 class="section-title">${item.client}</h2><div class="item"><div class="row"><div class="text"><p class="client">${item.client}</p><p class="title">${item.title}</p><p class="desc">${item.description}</p></div><div class="img-wrap"><img class="img" src="${item.image}" alt="${item.client}" /></div></div></div>`)}<div class="actions"><div class="actions-inner"><a class="btn primary" href="#">${c.viewAll}</a><a class="btn secondary" href="${contactHref}">${c.contactUs}</a></div></div>`;
  }
}
