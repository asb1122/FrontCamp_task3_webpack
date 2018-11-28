import NewsSource from "./NewsSource.js";

const newsBar = document.getElementById('news-bar');

export default class NewsBoard {

    constructor(apiKey){
        this.apiKey = apiKey;
    }

    getNewsSources() {
        fetch("https://newsapi.org/v2/sources?apiKey=" + this.apiKey)
            .then(function(response) {
                response.json().then(function(data) {
                    for(let source of data.sources) {
                        let sourcesLink = document.createElement('div');
                        let sourceId = source.id;
                        sourcesLink.setAttribute('id', sourceId);
                        sourcesLink.setAttribute('tabindex', '0');
                        sourcesLink.textContent = source.name;
                        sourcesLink.onclick = function(e){
                            let newsSource = new NewsSource(sourceId, this.apiKey);
                            newsSource.getNewsItems();
                        }
                        newsBar.appendChild(sourcesLink);
                    }
                });
            })
            .catch(function(err) {
                console.log("Error occured : " + err);
                alert("Please reload page");
            });
    }

}