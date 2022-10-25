const template = document.createElement('template');
template.innerHTML = `
  <style>
    section {
        display: flex;
        flex-direction: column;
    }
    
    a {
        color: #0000ee;
    }
  </style>
  <section>
    <header>
        <a class="title" target="_blank" rel="noopener noreferrer"></a>
        <span class="github-container"> | <a class="github" target="_blank" rel="noopener noreferrer">github</a></span>
    </header>
    <span><strong>technologies</strong>: <span class="technologies"></span></span>
  </section>
`;

class ProjectItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('.title').innerText = this.getAttribute('title');
        this.shadowRoot.querySelector('.title').href = this.getAttribute('url');
        this.shadowRoot.querySelector('.github').href = this.getAttribute('github');
        this.shadowRoot.querySelector('.technologies').innerText = this.getAttribute('technologies');

        if (!this.getAttribute('github')) this.shadowRoot.querySelector('.github-container').style.display = 'none';
    }
}

customElements.define('project-item', ProjectItem);
