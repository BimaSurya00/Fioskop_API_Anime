import './anime-info.js';
 
class anime extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  set animes(animes) {
    this._animes = animes;
    this.render();
  }
 
  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.shadowDOM.innerHTML = '';
    this._animes.forEach(data =>  {
      const animeElement = document.createElement('anime-info');
      animeElement.anime = data;
      this.shadowDOM.appendChild(animeElement);
    });
  }
}
 
customElements.define('anime-list', anime);