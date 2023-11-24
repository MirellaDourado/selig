class Partners extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>     
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background: #f2f2f2;
    }
    
    @keyframes slide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
    
    .partners {
      overflow: hidden;
      padding: 60px 0;
      white-space: nowrap;
      position: relative;
    }
    
    .partners:hover .partners-slide {
      animation-play-state: paused;
    }
    
    .partners-slide {
      display: inline-block;
      animation: 30s slide infinite linear;
    }
    
    .partners-slide img {
      height: 100px;
      margin: 0 15px;
      border-radius: 50%
    }

    </style>
    <section>
      <div class="partners">
      <div class="partners-slide">
          <img src="../assets/parceiros/casasBahia_logo.png" />
          <img src="../assets/parceiros/fast_logo.png"  />
          <img src="../assets/parceiros/ferreiraCosta_logo.png"  />
          <img src="../assets/parceiros/gazin_logo.png"  />
          <img src="../assets/parceiros/guaibim_logo.png"  />
          <img src="../assets/parceiros/hapvida_logo.png"  />
          <img src="../assets/parceiros/magalu_logo.png"  />
          <img src="../assets/parceiros/portugues_logo.png"  />
      </div>
    </div>
    </section>`

    var copy = document.querySelector(".partners-slide").cloneNode(true);
    document.querySelector(".partners").appendChild(copy);
  }

}

customElements.define('partners-component', Partners);