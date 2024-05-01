import { LitElement, html, css } from "lit-element";

class Card extends LitElement{
  static get properties() {
    return {
      img: { type: String },
      name: { type: String }
    }
  }

  static get styles() {
    return css`
      .card{
        width: 100%;
        max-width: 450px;
        background-color: #2b3784;
        margin: 0 auto;
        margin-top: 80px;
        border-radius: 20px;
        padding: 10px;

        img{
          width: 100%;
          border-radius: 10px;
        }

        h3{
          text-align: center;
          font-size: 32px;
          color: white;
        }
      }
    `
  }


  render(){
    return html`
      <div class="card">
        <img src=${this.img} alt=${this.name} />
        <h3>${this.name}</h3>
      </div>
    `
  }
}

customElements.define("app1-card", Card)