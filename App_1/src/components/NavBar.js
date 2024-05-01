import { LitElement, html, css } from "lit-element";

class NavBar extends LitElement{
  static get styles(){
    return css`
      nav{
        display: flex;
        justify-content: space-between;
        background-color: #333; 
        padding: 10px 20px;

        span {
          color: #fff;
          font-size: 24px
        }

        .options{
          display:flex;
          gap: 10px;
          color: white;
          list-style: none;
          cursor: pointer;
        }
      }
    `
  }


  render(){
    return html`
      <nav>
        <span>App 1</span>
        <ul class="options">
          <li>OPT 1</li>
          <li>OPT 2</li>
          <li>OPT 3</li>
          <li>OPT 4</li>
        </ul>
      </nav>
    `
  }
}

customElements.define("app1-navbar", NavBar)