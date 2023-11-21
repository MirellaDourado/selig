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
      margin-top: 4rem;
      padding: 1em;
    }
    
    .socialArea > div {
      margin: auto;
      margin-top: 2.5em;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .socialArea > a {
      width: 80%;
      margin-top: 1.5em;
      height: 15vh;
      border-radius: 15px;
      text-decoration: none;
    }
    
    .socialArea > a > button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      font-size: 1.5em;  
      color: white;
      background-color: #ad0303;
      margin-bottom: 3em;
      border: none;
    }
    .socialArea > a :hover {
      background-color: #930101;
      cursor: pointer;
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
    
      .socialArea > button {
        font-size: 1.2em; 
        height: 10vh;
      }
    
      .socialArea > div > a {
        font-size: 1.5em;
      }
    
      .socialArea > div > a > p {
        font-size: 0.6em;
      }
    }
    
    @media (min-width: 1200px) and (max-width: 1919px) {
    
      .socialArea > button {
        height: 15vh;
        font-size: 1.5em;  
      }
    
      .socialArea > div > a {
        font-size: 2.5em;
      }
    }
    </style>

    <div class=socialArea id="contact">
    <h2 class='h-config h2-config'> Siga Nossas Redes Sociais </h2>
    <hr class='hr'/>
    <div>
      <a target="_blank" rel='noopener noreferrer'href='https://www.instagram.com/assistenciaselig/'>
        <i class="fa-brands fa-instagram" style="color: #333333; font-size: 2.3em"></i>
      <p style="color: #333333"> Instagram </p>
      </a>
      <a>
        <i class="fa-brands fa-tiktok" style="color: #333333;font-size: 2.2em; margin-bottom: 10px"></i>
      <p style="color: #333333"> TikTok </p>
      </a>
      <a>
        <i class="fa-brands fa-linkedin-in" style="color: #333333; font-size: 2.3em"></i>  
        <p style="color: #333333"> LinkedIn </p>
      </a>
    </div>
    <a href='https://api.whatsapp.com/send/?phone=557122037800&text&type=phone_number&app_absent=0'>
      <button>
        <p> Fale com a nossa equipe <i class="fa-brands fa-whatsapp" style="margin-left: 0.2em; font-size: 1.2em;"></i></p>
        </button>
    </a>
  </div>`
  }
  
}

customElements.define('socialarea-component', SocialArea);