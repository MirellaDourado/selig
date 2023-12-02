class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="classMom">
      <section class="headerSection">
        <div>
        </div>
      </section>
      <header class="seligHeader">
        <div>
          <a href="/" class="logo"> <img src="/assets/selig-logo.png" alt="nome SeLiG em laranja"></a>
          <nav id="nav">
            <button class="btnMobile"> <i class="fa-solid fa-bars"></i> </button>
            <ul id="menu">
              <li> <a href="../selig"> A SeLiG </a></li>
              <li>
                <a href="/#services"> Nossos Serviços </a>
                <div class="hidenMenu">
                  <a href="/dentro-de-garantia">Assistência para produtos dentro de garantia</a>
                  <a href="/fora-de-garantia">Assistência para produtos fora de garantia</a>
                </div>
              </li>
              <li>
                <a href="#contact"> Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
    `
    const btnMobile = document.querySelector('.btnMobile'); 

    function toggleMenu() {
      const nav = document.querySelector('#nav');
      nav.classList.toggle('activate');
    }

    btnMobile.addEventListener('click', toggleMenu)
  }
}

customElements.define('header-component', Header);