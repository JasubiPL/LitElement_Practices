import { LitElement, html } from "lit-element";
import "./pages/HomePage.js"

class App extends LitElement{
  render() {
    return html`
      <app2-homepage></app2-homepage>
    `;
  }
}

customElements.define("app2-app", App)