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

    .ourService > div {
      display: flex;
      justify-content: center;
      gap: 6rem;
      margin-top: 1.5em;
    }

    .serviceCard {
      background-color: #ad0303;
      text-align: center;
      display: flex;
      align-items: center;
      color: white;
      height: 10rem;
      width: 12rem;
      border-radius: 15px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      text-decoration: none;
    }

    .serviceCard:active {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      color: white;
      text-decoration: none
    }

    .serviceCard > span {
      margin: auto;
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
        margin-top: 1.5em;
        gap: 10rem;
      }
    
      .cardHome {
        height: 65vh;
        width: 29%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        text-align: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        background-color: white;
        border-radius: 10px;
      }
    
    .cardHome:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    
    .cardHome div {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    
    .cardHome p:nth-of-type(1) {
      font-size: 1.3em;
    }
    
    .cardHome p:nth-of-type(2) {
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
      height: 3rem;
      width: 10rem;
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
          <div class="cardHome">
          <i class="fa-solid fa-shield icon"></i>
            <div>
              <p>Assistência para produtos dentro de garantia</p>
              <p>Descubra marcas e produtos com assistência técnica autorizada para produtos dentro da garantia</p>
            </div>
            <a href='/dentro-de-garantia' class="knowMoreBtn">
              Saiba mais
            </a>
          </div>

          <div class="cardHome">
            <i class="fa-solid fa-circle-exclamation icon"></i>
            <div>
              <p> Assistência para produtos fora de garantia </p>
              <p> Descubra  marcas e produtos com assistência técnica autorizada para produtos fora da garantia</p>
            </div>
            <a href='/fora-de-garantia' class="knowMoreBtn">
              Saiba mais
            </a>
          </div>
        </div>

        <div style="width: 95%; margin: auto; margin-top: 3rem">
          <a href="/dentro-de-garantia" class="serviceCard"> 
            <span> Para Dentro de garantia </span> </a>
          <a href="/fora-de-garantia" class="serviceCard">
            <span> Para Fora de garantia </span> </a>
        </div>
      </section>`
  }
}

customElements.define('our-services-component', OurServices);