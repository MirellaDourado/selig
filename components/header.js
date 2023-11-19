class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<section class="classMom">
    <section class="headerSection">
      <div>
        <a target="_blank" rel='noopener noreferrer'href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0'> FALE CONOSCO </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.instagram.com/assistenciaselig/'> INSTAGRAM </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.tiktok.com/assistenciaselig/'>  TIKTOK </a>
          <a target="_blank" rel='noopener noreferrer'href='https://www.linkedin.com/company/assistencia-selig/'> LINKEDIN </a>
      </div>
    </section>
    <header class="seligHeader">
      <div>
        <a href="/" class="logo"> <img src="/assets/selig-logo.png" alt="nome SeLiG em laranja"></a>
        <nav id="nav">
          <button class="btnMobile"> MENU </button>
          <ul id="menu">
            <li> <a href="../pages/selig.html"> A SeLiG </a></li>
            <li>
              <a href="/#services"> Nossos Serviços </a>
              <div class="hidenMenu">
                <a href="/dentro-de-garantia">Assistência para produtos dentro de garantia</a>
                <a href="/fora-de-garantia">Assistência para produtos fora de garantia</a>
                <a href="/especializada">Assistência técnica especializada</a>
              </div>
            </li>
            <li>
              <a href="/#contact"> Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </section>`
  }
}

customElements.define('header-component', Header);