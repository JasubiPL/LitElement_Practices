import { LitElement, html, css } from "lit-element"

class DataCharacter extends LitElement{
  static get properties(){
    return{
      dataChar: { type: Object , },
    }
  }

  constructor(){
    super();
    this.dataChar = {};
  }

  closeModal(){
    this.dispatchEvent(new CustomEvent("close-modal"))
  }

  _addToFav(id, name){
    const data = { id, name}
    this.dispatchEvent(new CustomEvent("add-to-fav", { detail: data}))
  }


  static get styles(){
    return css`
      .modal-container{
        width: 100vw;
        height: 100dvh;
        background-color: rgba(0,0,0, .5);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .character-card{
        background-color: white;
        display: flex;
        padding: 20px;
        border-radius: 10px;

        .character-card__image{
          width: 40%;
          display:flex;
          aspect-ratio: 13/16;

          img{
            display: flex;
            width:100%;
            object-fit:cover;
          }
        }

        .character-card__data {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items:flex-start;
          padding: 0px 20px;
          width: 50%;

          ul {
            list-style: none;
            font-family: arial;
            padding: 0;

            span{
              font-weight: bolder;
              color:#2d572c;
              
            }
          }

          div{
            display: flex;
            justify-content: space-between;
            width: 100%;

            button{
            background-color:#2d572c;
            padding: 5px 10px;
            border: none;
            font-size: 18px;
            border-radius: 3px;
            color:white;
          }
          }
        }
      }
    `
  }



  render(){
    return html`
    <section class="modal-container">
      <div class="character-card">
        <div class="character-card__image">
          <img src="${this.dataChar.image}" alt="${this.dataChar.name}" />
        </div>
        <div class="character-card__data">
          <ul>
            <li><span>Nombre:</span> ${this.dataChar.name}</li>
            <li><span>Estatus:</span> ${this.dataChar.status}</li>
            <li><span>Especie:</span> ${this.dataChar.species}</li>
            <li><span>Genero:</span> ${this.dataChar.gender}</li>
          </ul>

          <div >
            <button @click=${this.closeModal}>Cerrar</button>
            <button @click=${() => this._addToFav(this.dataChar.id, this.dataChar.name) } >Favorito ⭐</button>
          </div>


        </div>
      </div>
    </section>
    `
  }
}

customElements.define("app2-datacharacter", DataCharacter)