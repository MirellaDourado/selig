class SocialArea extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    p {
      margin: 0;
    }
    
    .socialArea {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 4rem 0;
      padding: 1em;
    }
    
    .socialArea > div {
      margin: auto;
      margin-top: 2.5em;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10rem;
    }
    .socialArea > a {
      width: 80%;
      margin-top: 1.5em;
      height: 6rem;
      border-radius: 15px;
      text-decoration: none;
    }
    
    .socialArea > div > a {
      color: inherit;
      text-decoration: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    @media (max-width: 480px) {

      .socialArea > div > a {
        font-size: 1.6em;
      }
    }
    
    @media (min-width: 1200px) and (max-width: 1919px) {
    
      .socialArea > div > a {
        font-size: 2.5em;
      }

      .socialArea > div {
        gap: 20rem;
      }

    }
    </style>

    <div class=socialArea id="contact">
    <h2 class='h-config h2-config'> Nossas Redes Sociais </h2>
    <hr class='hr'/>
    <div>
      <a href='https://www.instagram.com/assistenciaselig/'>
        <i class="fa-brands fa-instagram" style="color: #333333; font-size: 2.3em"></i>  
        <p style="color: #333333"> Instagram </p>
      </a>
      <a href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0'>
        <i class="fa-brands fa-whatsapp" style="color: #333333; font-size: 2.3em"></i>
        <p>WhatsApp</p>
      </a>
    </div>
  </div>`
  }
  
}

customElements.define('socialarea-component', SocialArea);