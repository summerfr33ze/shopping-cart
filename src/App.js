
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from "./Home.js"
import Movies from "./Movies.js"





function App() {
  
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }
  const navigateToMovies = () => {
    navigate('/movies')
  }

  return (
    <div>
      <div className="header">
            <div className="title">BLOCKBUSTER</div>
            <div>
                <button onClick={navigateHome}>Home</button>
                <button onClick={navigateToMovies}>Movies</button>
            </div>
        </div>

   
      <Routes>
        <Route path="/" element={<Home navigate={navigateToMovies} />  } />
        <Route path="/Movies" element={<Movies />}  />
      </Routes>
    </div>
  );
}

export default App;
