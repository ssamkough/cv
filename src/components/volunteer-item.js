const template = document.createElement('template');
template.innerHTML = `
  <style>
    header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
    }
  </style>
  <section>
    <header>
      <strong class="organization"></strong>
      <span>
        <span class="start-month"></span> <span class="start-year"></span> - <span class="end-month"></span> <span class="end-year"></span>
      </span>
    </header>
    <em class="role-title"></em>
  </section>
`;

class VolunteerItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('.organization').innerText = this.getAttribute('organization');
        this.shadowRoot.querySelector('.role-title').innerText = this.getAttribute('role-title');
        this.shadowRoot.querySelector('.start-month').innerText = this.getAttribute('start-month');
        this.shadowRoot.querySelector('.start-year').innerText = this.getAttribute('start-year');
        this.shadowRoot.querySelector('.end-month').innerText = this.getAttribute('end-month') || 'present';
        this.shadowRoot.querySelector('.end-year').innerText = this.getAttribute('end-year');
    }
}

customElements.define('volunteer-item', VolunteerItem);
