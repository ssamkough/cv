const template = document.createElement('template');
template.innerHTML = `
  <style>
    summary {
      cursor: pointer;
    }
  </style>
  <details>
    <summary>
          <span>
            <strong class="company"></strong> | <strong class="role-title"></strong>
          </span>
          <strong style="float: right;">
            <span class="start-month"></span> <span class="start-year"></span> - <span class="end-month"></span> <span class="end-year"></span>
          </strong>
    </summary>
    <slot />
  </details>
`;

class CareerToggler extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('.company').innerText = this.getAttribute('company');
        this.shadowRoot.querySelector('.role-title').innerText = this.getAttribute('role-title');
        this.shadowRoot.querySelector('.start-month').innerText = this.getAttribute('start-month');
        this.shadowRoot.querySelector('.start-year').innerText = this.getAttribute('start-year');
        this.shadowRoot.querySelector('.end-month').innerText = this.getAttribute('end-month') || 'present';
        this.shadowRoot.querySelector('.end-year').innerText = this.getAttribute('end-year');
    }
}

customElements.define('career-toggler', CareerToggler);
