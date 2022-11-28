class DataSource {
  static searchanime(keyword) {
    return fetch(`https://kitsu.io/api/edge/anime?filter[text]=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.data) {
            return Promise.resolve(responseJson.data);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataSource;