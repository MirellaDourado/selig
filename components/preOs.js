class preOs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .preOs {
        margin: auto;
        margin-top: 4rem;
      }
      
      .preOsWrapper {
        display: none;
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
        margin: 2rem 0;
      }
      
      .homeCard > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-bottom: 2pc;
      }
      
      .homeCard > div > h3 {
        font-size: 1.6em;
      }
      
      .homeCard > div > button {
        padding: 1rem;
        border-radius: 8px;
        background-color: white;
        color: black;
        border: 2px #ad0303 solid;
      }
      
      
      @media (min-width: 1024px) {
      
        .preOsCarousel {
          display: none;
        }
      
        .preOsWrapper {
          width: 90%;
          height: 70vh;
          margin: auto;
          border-radius: 15px;
          /* background-size: ; */
          margin-top: 1.5em;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          display: flex;
          flex-direction: column;
          align-items: end;
          position: relative;
        }
        
        .preOsWrapper > div {
          height: 50%;
          width: 60vw;
          background: #FFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
        
        .preOsWrapper > div:nth-of-type(1) {
          border-bottom: 3px rgba(50, 50, 93, 0.25) solid;
          border-radius: 15px 15px 0;
        }
        
        .preOsWrapper > div:nth-of-type(2) {
          box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
          width: 50vw;
          border-radius: 15px 0 15px 15px;
        }
        
        .meet-pre-os a {
          margin-bottom: 10%;
        }
        
        .seePreOs > p, .meetPreOs > p {
          width: 80%;
          text-align: center;
        }
      
        .seePreOs > a > button, .meetPreOs > a > button {
          background-color: transparent;
          margin: auto;
          color: #fff;
        }
        
        .seePreOs > a, .meetPreOs > a {
          border: 3px solid #ad0303;
          background-image: -webkit-linear-gradient(30deg, #ad0303 50%, transparent 50%);
          background-image: linear-gradient(30deg, #ad0303 50%, transparent 50%);
          background-size: 1000px;
          background-repeat: no-repeat;
          background-position: 0%;
          display: flex;
          align-items: center;
          text-decoration: none;
          -webkit-transition: background 300ms ease-in-out;
          transition: background 300ms ease-in-out;
          border-radius: 10px;
          width: 20%;
          height: 20%;
          cursor: pointer;
        }
        
        
        .seePreOs > a:hover, .meetPreOs > a:hover {
          background-position: 100%;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        }
      
        .seePreOs > a:hover > button, .meetPreOs > a:hover > button {
          color: #ad0303
        } 
        
      }
      </style>
      <section class=preOs>
        <h2 class="h-config h2-config"> Agilize o seu antendimento </h2>
        <hr class="hr" />
        <div class="preOsWrapper">
          <img src="../assets/pexels-mart-production-7709179.jpg" style="border-radius: 15px; position: absolute; height: 70vh; left: 0px; z-index: -1;"/>
          <div class="meetPreOs">
            <h3 class="h-config h3-config"> Conheça a pre-OS </h3>
            <p>Agilize o seu atendimento no momento da visita a nossa loja utilizando a pre-OS. Você poderá agendar sua assistência de uma maneira mais rápida e personalizada, podendo verificar o andamento do seu equipamente preenchendo o formulário.</p>
            <a href='https://websolution.care-br.com/selig/pre_os.php' target='_blank'  rel="noreferrer"> <button> Preencher OS </button> </a>
          </div>
          <div class="seePreOs">
            <h3 class="h-config h3-config"> Consulte sua OS </h3>
            <p> Caso já tenha preenchido uma pre-OS e deseje saber o andamento da nossa assistência, clique no botão abaixo, informe o seu nome e o número da OS que deseja ver. </p>
            <a href='https://websolution.care-br.com/selig/' target='_blank'  rel="noreferrer" > <button> Consultar OS </button> </a>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('pre-os-component', preOs);