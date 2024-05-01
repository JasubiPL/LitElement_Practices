import { LitElement, html, css } from "lit-element";
import "../components/NavBar.js"
import "../components/Card.js"

class Home extends LitElement {

  render() {
    return html`
      <app1-navbar></app1-navbar>
      <main>
        <app1-card img="img/spiderman.jpeg" name="Spiderman"></app1-card>
      </main>
    `;
  }
}

customElements.define("app1-home", Home);
