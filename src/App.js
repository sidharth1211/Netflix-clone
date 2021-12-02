import Row from "./components/Row";
import requests from './requests.js'
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      {/* Banner */}
      <Nav/>
      <Banner fetchUrl/>
      <Row title = "Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow = {true}/>
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title = "Romance" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
