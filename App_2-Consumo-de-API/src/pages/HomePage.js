import { LitElement, html, css } from "lit-element"
import "../components/Card.js"

class HomePage extends LitElement{

  static get properties(){
    return {
      data: { type: Array }
    }
  }

  static get styles(){
    return css`
      nav{
        background-color: black;
        text-align: center;
        color: white;
        padding: 5px 20px;
      }

      main{
        margin: 0 auto;
        max-width: 70%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 30px;
        padding-top: 20px;
      }
    `
  }

  constructor(){
    super()
    this.data = [];
  }

  firstUpdated(){
    this.getData()
  }

  async getData(){
    try{
      const resp = await fetch("https://rickandmortyapi.com/api/character") 
      const characters = await resp.json()

      this.data = characters.results
      console.log(this.data.results)
    }catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  }

  render(){
    return html`
      <nav> <h1>Consimo de API</h1> </nav>

      <main>
        ${this.data.map(character => html`
          <app2-card urlImg=${ character.image } name=${character.name}></app2-card>
        `)}
      </main>

    `
  }
}

customElements.define("app2-homepage", HomePage)