class Brands extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    .brandsWrapper {
      background-color: #eeeeeea9;
      display: flex;
      flex-direction: column;
      padding: 1.5em;
      width: 90%;
      margin: auto;
      margin-top: 4rem;
    }
    
    .brandsCarousel {
      flex-direction: row;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;
      grid-row-start: 2;
      grid-row-end: 5;
      align-items: flex-end;
      height: 13rem;
      flex-direction: row;
    }
    
    .brandsCarousel > div {
      display: flex;
      flex-direction: row;
      margin: auto;
    }
    
    .brandsCarousel > div > div {
      height: 13rem;
      width: 7rem;
      margin: auto;
      display: flex;
      align-items: center;
      position: relative;
    }
      
    .card {
      display: flex;
      text-decoration: none;
      color: black;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 10rem;
      height: 10rem;
      align-items: center;
    }
    
    .cardWrapper > a > img {
      width: 6rem;
      border-radius: 50%;
    }
    
    .brandsCarousel::-webkit-scrollbar {
      display: none;
    }
    
    .brandsWrapper > div:nth-of-type(1) {
      display: none;
    }
    
    @media (min-width: 1200px) {
     
      .brandsWrapper > div:nth-of-type(1) {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        margin: auto;
        margin-top: 2.5em;
      }
      
      .brandsWrapper > div:nth-of-type(1) > div {
        display: flex;
        width: 100%;
        height: 50%;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
      }
      
      .brand {
        width: 8rem;
        border-radius: 50%;
      }
      
      .brandWrapper {
        display: flex;
        gap: 1em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .brandWrapper > div {
        background-color: white;
        border-radius: 50%;
        height: 9em;
        width: 9em;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    
      .brandsCarousel {
        display: none;
      }
    }
    </style>
    <section class="brandsWrapper">
      <h2 class="h-config h2-config"> Nossa Assistência Técnica </h2>
      <hr class="hr" />
      <div>
        <div>
          <div class="brandWrapper">
            <div>  
              <img src="../assets/lg_logo.png" class="brand" />
            </div>
            <Link to='/lg'>SAIBA MAIS</Link>
          </div>
          <div class="brandWrapper">
            <div>
              <img src="../assets/samsung_logo.png" class="brand" />
            </div>
            <Link to='/samsung'>SAIBA MAIS</Link>
          </div>
          <div class="brandWrapper">
            <div>
              <img src="../assets/motorola_logo.png" class="brand" />
            </div>
            <Link to='/motorola'>SAIBA MAIS</Link>
          </div>
          <div class="brandWrapper">
            <div>
              <img src="../assets/aoc_logo.png" class="brand" />
            </div>
            <Link to='/aoc'> SAIBA MAIS</Link>
          </div>
          <div class="brandWrapper">
            <div>
              <img src="../assets/apple_logo.png" class="brand" />
            </div>
            <Link to='/apple'> SAIBA MAIS</Link>
          </div>
        </div>
        <div>
          <div class="brandWrapper">
            <div>
              <img src="../assets/philco_logo.png" class="brand" />
            </div>
            <Link to='/philco'> SAIBA MAIS</Link>
          </div>
          <div class="brandWrapper">
            <div>
              <img src="../assets/philips_logo.png" class="brand" />
            </div>
            <Link to='/philips'> SAIBA MAIS</Link>
          </div>
          <div class="brandWrapper">
            <div>
              <img src="../assets/tcl_logo.png" class="brand" />
            </div>
            <Link to='/tcl'> SAIBA MAIS </Link>
          </div>
          <div class="brandWrapper">
            <div>
              <img src="../assets/positivo_logo.png" class="brand"/>
            </div>
            <Link to='/positivo'> SAIBA MAIS </Link>
          </div>
        </div>
      </div>
    </section>`
  }
}

customElements.define('brands-component', Brands);