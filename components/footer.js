class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="seligFooter">
      <div>
        <a> A SeLiG </a>
        <a> Assistência técnica autorizada para produtos fora de garantia </a>
        <a> Assistência técnica autorizada para produtos fora de garantia </a>
        <a> Assistência técnica especializada </a>
      </div>
      <div>
        <img src="/assets/selig-logo.png" alt='palavra SeLiG escrita na cor laranja' />
        <div>
          <a target="_blank" rel='noopener noreferrer' href='https://goo.gl/maps/XBSgCpbbJbU3ymFV6'> <span> Endereço: </span> Rua Bahia, 176 - Pituba, Salvador - BA, 41830-160</a>
          <a target="_blank" rel='noopener noreferrer' href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0'> <span> Telefone: </span> (71) 2203-7800 </a>
        </div>
        <div>
          <a target="_blank" rel='noopener noreferrer' href='https://www.instagram.com/assistenciaselig/'>
            <i class="fa-brands fa-instagram" style="color: #333333;"></i>
          </a>
          <a>
            <i class="fa-brands fa-tiktok" style="color: #333333;"></i>
          </a>
          <a>
          <i class="fa-brands fa-linkedin-in" style="color: #333333;"></i>
          </a>
        </div>
      </div>
      <p style={{ fontSize: '0.8em' }}> Copyright © 2006-2023 SELIG. Todos os direitos reservados. </p>
    </footer>`
  }
}

customElements.define('footer-component', Footer);