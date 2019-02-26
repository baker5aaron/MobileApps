const observableModule = require("tns-core-modules/data/observable");

var req = new Request( 'https://newsapi.org/v2/top-headlines?country=us&apiKey=897f3b65db2b4e1fbbdf783cc1f7b470' );
fetch( req ).then( function( response ) {
        response.json().then( function( val ) {
            console.log( `Populating UI with ${val.articles.length} news articles` );
            
        }
}


/*function BrowseViewModel() {
    const viewModel = observableModule.fromObject({
       news: {source: Source, author: string, title: string, description: string, url: string, urlToImage: string, publishedAt: string}
    })

    return viewModel;
}

module.exports = BrowseViewModel;
*/