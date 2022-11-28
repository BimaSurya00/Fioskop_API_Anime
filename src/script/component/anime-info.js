class animeInfo extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set anime(data) {
      this._anime = data.attributes;
      this.render();
    }
   
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: flex;
            margin: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            width: 200px;
          }
          
          .poster_path {
            border-radius: 10px;
            width: 100%;
            height: auto;
            max-height: 250px;
            object-fit: cover;
            object-position: center;
          }
          
          
          .anime-info {
            padding: 24px;
          }
          
          .anime-info > h2 {
            font-weight: lighter;
            margin-top: 20px;
          }
          
          .anime-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; 
          }
          span{
            font-size: 15px;
            border-radius: 50px;
            border: 2px solid #434242;
            padding: 5px;
          }

          @media only screen and (max-width: 600px) {
            :host {
              width: 300px;
            }
          }
          
        </style>
        <div>
        <img class="poster_path" src="${this._anime.posterImage.small}" alt="${this._anime.titles.en_jp}">
        <div class="anime-info">
          <span class="${this._anime.averageRating}">${this._anime.averageRating}</span>
          <h2>${this._anime.titles.en_jp}</h2>
          <p>${this._anime.synopsis}</p>
        </div>
      `;
    }
  }
   
  customElements.define('anime-info', animeInfo);