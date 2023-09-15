import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home.jsx';
import MovieDetail from './MovieDetail'; 

function App() {
  return (
    <Router basename='movie-project'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/movies/:id" element={<MovieDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;