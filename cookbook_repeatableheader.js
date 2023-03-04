const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  /* Header/logo Title */
  .header {
    padding: 40px;
    text-align: center;
    background: #f9688d;
    color: white;
  }
  
  /* Increase the font size of the heading */
  .header h1 {
    font-size: 40px;
  }
  </style>
  <div class="header">
    <h1>Granny Eileen's Digital Cookbook</h1>
    <p>Some <b>delicious</b> recipes from best cook ever.</p>
    </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);