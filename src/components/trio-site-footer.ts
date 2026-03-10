import { LitElement, html } from 'lit';

export class TrioSiteFooter extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer class="flex justify-center">
        <div class="flex max-w-[960px] flex-1 flex-col">
          <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <a class="text-[#4d7399] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
              <a class="text-[#4d7399] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
            </div>
            <p class="text-[#4d7399] text-base font-normal leading-normal">© 2025 Trio-Soft. All rights reserved.</p>
          </footer>
        </div>
      </footer>
    `;
  }
}

customElements.define('trio-site-footer', TrioSiteFooter);
