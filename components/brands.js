class Brands extends HTMLElement {
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
  
    .brandsWrapper {
      margin-top: 5rem;
    }
    
    @keyframes slide {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
    
    .logos {
      overflow: hidden;
      padding: 60px 0;
      white-space: nowrap;
      position: relative;
    }
    
    .logos:hover .logos-slide {
      animation-play-state: paused;
    }
    
    .logos-slide {
      display: inline-block;
      animation: 22s slide infinite linear;
    }
    
    .logos-slide img {
      height: 100px;
      margin: 0 15px;
      border-radius: 50%
    }

    </style>
    <section class="brandsWrapper">
      <h2 class="h-config h2-config"> Nossa Assistência Técnica </h2>
      <hr class="hr" />
      <div class="logos">
      <div class="logos-slide">
          <img src="../assets/lg_logo.png" class="brand" />
          <img src="../assets/samsung_logo.png" class="brand" />
          <img src="../assets/motorola_logo.png" class="brand" />
          <img src="../assets/aoc_logo.png" class="brand" />
          <img src="../assets/apple_logo.png" class="brand" />
          <img src="../assets/philco_logo.png" class="brand" />
          <img src="../assets/philips_logo.png" class="brand" />
          <img src="../assets/tcl_logo.png" class="brand" />
          <img src="../assets/positivo_logo.png" class="brand"/>
      </div>
    </div>
    </section>`

    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }

}

customElements.define('brands-component', Brands);