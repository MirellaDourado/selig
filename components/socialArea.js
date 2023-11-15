class SocialArea extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
  this.innerHTML = ``
  }
  
}

customElements.define('socialArea-component', SocialArea);