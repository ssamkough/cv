const template = document.createElement('template');
template.innerHTML = `
  <style>
    header {
      width: 100%;
      display: flex;     
      justify-content: space-between;
    }
  </style>
  <section>
    <header>
      <section>
        <div>
         <span class="company"></span><strong class="role-title"></strong>
        </div>
      </section>
      <section>
        <strong>
          <span class="start-month"></span> <span class="start-year"></span> - <span class="end-month"></span> <span class="end-year"></span>
        </strong>
      </section>
    </header>
    <main>
      <div><slot name="description" /></div>
      <div><u class="technologies-underline"></u><span class="technologies"></span></div>
    </main>
  </section>
`;

class DetailedCareerItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('.company').innerText = this.getAttribute('company');
    this.shadowRoot.querySelector('.company').style.fontWeight = this.getAttribute('role-title') ? '800' : '500';
    this.shadowRoot.querySelector('.company').style.fontStyle = this.getAttribute('role-title') ? 'none' : 'italic';
    this.shadowRoot.querySelector('.role-title').innerText = this.getAttribute('role-title') ? " | " + this.getAttribute('role-title') : "";
    this.shadowRoot.querySelector('.start-month').innerText = this.getAttribute('start-month');
    this.shadowRoot.querySelector('.start-year').innerText = this.getAttribute('start-year');
    this.shadowRoot.querySelector('.end-month').innerText = this.getAttribute('end-month') || 'present';
    this.shadowRoot.querySelector('.end-year').innerText = this.getAttribute('end-year');
    this.shadowRoot.querySelector('.technologies').innerText = this.getAttribute('technologies') ? ': ' + this.getAttribute('technologies') : '';
    this.shadowRoot.querySelector('.technologies-underline').innerText = this.getAttribute('technologies') ? 'technologies' : '';
  }
}

customElements.define('detailed-career-item', DetailedCareerItem);
