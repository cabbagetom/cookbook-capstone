const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
  /* Footer */
  .footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #534859;
  color: white;
  text-align: center;
  }
  </style>
  <div class="footer">
  <h4>Made with love by Tom, 2023</h4>
    </div>

`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);