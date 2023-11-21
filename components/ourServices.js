class OurServices extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =`
    <style>
    .ourService {
      width: 100%;
      margin: auto;
      margin-top: 4rem;
      width: 100%;
    }
    .ourService > div:nth-of-type(1) { display: none;}
    
    .ourServiceCarousel {
      border-radius: 8px;
    }
    
    .ourService > div {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5em;
    }
    
    .homeCard {
      height: 50vh;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      text-align: center;
      text-decoration: none;
      color: inherit;
    }
    
    .homeCard > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    
    .homeCard > div > p:nth-of-type(1) {
      font-size: 1.5em;
    }
    
    .homeCard > div > p:nth-of-type(2) {
      font-size: 1em;
      color: #8A8A8A;
    }
    
    @media (min-width: 1200px) { 
      .ourService {
      width: 90%;
      } 

      .h2-config {
        font-size: 2.5em;
      }
    
      .icon {
        font-size: 5em;
        color: #333333;
      }
    
      .ourService > div:nth-of-type(2) {
      display: none;
      }
    
      .ourService > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5em;
      }
    
      .homeCard {
        height: 65vh;
        width: 29%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        text-align: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
    
    .homeCard:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    
    .homeCard div {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    
    .homeCard p:nth-of-type(1) {
      font-size: 1.3em;
    }
    
    .homeCard p:nth-of-type(2) {
      color: #8A8A8A;
      font-size: 0.8em;
    }
    
    .knowMoreBtn{
      color: #fff;
      border: 3px solid #ad0303;
      background-image: -webkit-linear-gradient(30deg, #ad0303 50%, transparent 50%);
      background-image: linear-gradient(30deg, #ad0303 50%, transparent 50%);
      background-size: 1000px;
      background-repeat: no-repeat;
      background-position: 0%;
      -webkit-transition: background 300ms ease-in-out;
      transition: background 300ms ease-in-out;
      border-radius: 10px;
      width: 8rem;
      text-decoration: none;
      height: 2rem;
      text-align: center;
      cursor: pointer;
    }
    
    .knowMoreBtn:hover {
      background-position: 100%;
      color: #ad0303;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    
    }
    </style>
    
      <section class="ourService" id="services">
        <h2 class='h-config h2-config'> Nossos Serviços </h2>
        <hr class='hr' />
        <div>
          <div class="homeCard">
          <i class="fa-solid fa-shield icon"></i>
            <div>
              <p>Assistência para produtos dentro de garantia</p>
              <p>Descubra marcas e produtos com assistência técnica autorizada para produtos dentro da garantia</p>
            </div>
            <a href='/dentro-de-garantia' class="knowMoreBtn">
              Saiba mais
            </a>
          </div>

          <div class="homeCard">
            <i class="fa-solid fa-circle-exclamation icon"></i>
            <div>
              <p> Assistência para produtos fora de garantia </p>
              <p> Descubra  marcas e produtos com assistência técnica autorizada para produtos fora da garantia</p>
            </div>
            <a href='/fora-de-garantia' class="knowMoreBtn">
              Saiba mais
            </a>
          </div>
     
          <div class="homeCard">
          <i class="fa-solid fa-wrench icon"></i>
            <div>
              <p> Assistência técnica especializada </p>
              <p> Descubra as marcas e produtos com assistência técnica especializada </p>
            </div>
            <a href='/especializada' class="knowMoreBtn">
              Saiba mais
            </a>
          </div>
        </div>
  </section>`
  }
}

customElements.define('our-services-component', OurServices);