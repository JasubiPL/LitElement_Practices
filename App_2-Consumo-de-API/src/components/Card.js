import { LitElement, css, html } from "lit-element";

class Card extends LitElement{
  static get styles(){
    return css`
      .card{
        background-color: #2d572c;
        width: 100%;
        border-radius: 5px;
        padding: 10px;
        text-align:center;
        color: white;

        img {
          border-radius: 5px;
          width:100%;
        }

      }
    `
  }

  static get properties(){
    return {
      urlImg: { type: String },
      name: { type: String }
    }
  }

  render(){
    return html`
      <div class="card">
        <img src=${this.urlImg} alt=${this.name} />
        <h3>${this.name}</h3>
      </div>
    `
  }
}

customElements.define("app2-card", Card)