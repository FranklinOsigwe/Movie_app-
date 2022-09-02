import './App.css';
// import Header from './Header';
import { useEffect ,useState} from 'react';
import MovieCards from './MovieCards';
import SearchIcon from "./search.svg";

// const movie1 = {
//     "Title": "Title Shot",
//     "Year": "1979",
//     "imdbID": "tt0080027",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjExZjNjOTctNDdmMC00NWRlLWE1MzctOTkxN2MyNTE4NzRiXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
// }



const API_URL = 'http://www.omdbapi.com?apikey=708b23a2';



    
function App() {
    const [movies, setMovies] = useState([])
    const [searchTerm , setSearchTerm] = useState('')

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.Search)
        setMovies(data.Search)
    }
    
    useEffect(() => {
        searchMovies();
    }, [])
    
    return (
        <div className='app'>
            <h1>Movie village</h1>

            <div className="search">
                <input placeholder="search movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
            </div>


            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie, idx) => (
                            <MovieCards movie={movie} key={ idx} />
                        ))}
                    </div>
                ) : (
                        <div className='empty'>
                         <h3>Movie not found</h3>
                        </div>
               )
            }

            
            
           

            
        </div>
   

    )









































  
//   const [movies, setMovies] = useState([])
//   const [searchTerm, setSearchTerm] = useState('charlie')
  
//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`)
//     const data = await response.json()
//     console.log(data.Search)

//     setMovies(data.Search)
//  }
//   //708b23a2
  
//  useEffect(() => {
//    searchMovies();
//   }, [])
  
//   return (
//     <div className="app" >
//       <h1>Movie land</h1>
      
//       <div className="search">
//         <input placeholder="search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

//         <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
//       </div>

//       {
//         movies?.length > 0 ? (
          
//       <div className="container">
//              {movies.map((movie, idx) => ( 
//                <MovieCards movie={movie} key={idx} />
//         ))}
//       </div>
//         ) : (
//             <div className="empty">
//              <h3>Movie not found</h3> 
//           </div>  
//         )
//       }
      

//       </div>
//   );
}

export default App;
