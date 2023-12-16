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
          <a href="/lg"> <img src="../assets/logos/lg_logo.png" class="brand" /> </a>
          <a href="/samsung"> <img src="../assets/logos/samsung_logo.png" class="brand" /> </a>
          <a href="/motorola"> <img src="../assets/logos/motorola_logo.png" class="brand" /> </a>
          <a href="/aoc"> <img src="../assets/logos/aoc_logo.png" class="brand" /> </a>
          <a href="/apple"> <img src="../assets/logos/apple_logo.png" class="brand" /> </a>
          <a href="/philips"> <img src="../assets/logos/philips_logo.png" class="brand" /> </a>
          <a href="/tcl"> <img src="../assets/logos/tcl_logo.png" class="brand" /> </a>
          <a href="/positivo"> <img src="../assets/logos/positivo_logo.png" class="brand"/> </a>
      </div>
    </div>
    </section>`

    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }

}

customElements.define('brands-component', Brands);