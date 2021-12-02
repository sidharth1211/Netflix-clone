

const API_KEY = "0d9313f74e7d809784d3a842d43e0fbe"

const requests = { 
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `/discover/movie?api_key=0d9313f74e7d809784d3a842d43e0fbe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
    fetchHorrorMovies: `/discover/movie?api_key=0d9313f74e7d809784d3a842d43e0fbe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
    fetchRomanceMovies: `/discover/movie?api_key=0d9313f74e7d809784d3a842d43e0fbe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
    fetchDocumentaries: `/discover/movie?api_key=0d9313f74e7d809784d3a842d43e0fbe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
}

export default requests;