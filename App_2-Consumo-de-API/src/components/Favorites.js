import { LitElement, html, css } from "lit-element";

class Favorites extends LitElement {

  static get styles(){
    return css`
    aside{
      width: 15%;
      position: fixed;
      top: 200px;
      border: 1px solid black;
      background-color: #f2f2f2;
      border-radius: 0px 10px 10px 0px;
      overflow: hidden;

      header{
        background-color: black;
        color: white;
        padding: 5px 0px;
        padding-left: 20px;
        font-size: 18px;
      }

      ul{
        list-style:none;
        padding:0px 10px;

        li{
          display: flex;
          justify-content: space-between;
          margin-top: 10px;

          button{
            background: none;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
    `
  }

  static get properties(){
    return{
      favList: { type: Array },
    }
  }

  constructor(){
    super()
    this.favList = [];
  }

  firstUpdated(){
    document.addEventListener("add-to-fav", this._addFav.bind(this))
  }

  _addFav = (e) => {
    if(!this.favList.some( fav => fav.name === e.detail.name)){
      
      this.favList = [...this.favList, e.detail]
    }else{
      alert("Ya existe en tu lista de favoritos")
    }

  }

  _deleteFav(id){
    const updateFavList = this.favList.filter( fav => fav.name != id )
    this.favList = updateFavList

  }

  render(){
    return html`
      <aside>
        <header>Favoritos ⭐</header>
        <ul>
          ${this.favList.map( fav => html`
            <li>
              <span>${fav.name}</span>
              <button @click=${() => this._deleteFav(fav.name)}>❌</button>
            </li>
          `)}
        </ul>
      </aside>
    `
  }
}

customElements.define("app2-favorites", Favorites)