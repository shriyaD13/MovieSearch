 import React, {useState} from "react";
 import MovieCard from "./movieCard";
 import './style.css';
 export default function SearchMovies()
 {
      const [query,setQuery] = useState('');
      const [movies,setMovies] = useState([]);


      const searchMovies = async(e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=524f5c45d35e414c4b97c130f1a759b7&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
          const res = await fetch(url);
          const data = await res.json();
          setMovies(data.results);
        }catch(err){
          console.error(err);
        }
      }


      return(
        <>
          <form className = "form" onSubmit= {searchMovies}>
            <label className = "label" htmlFor = "query">Movie Name</label>
            <input className = "input" type= "text" name = "query" placeholder= "i.e. Harry potter"
            value = {query} onChange= {(e)=>setQuery(e.target.value)}
            />
            <button className = "button" type = "submit">Search</button>
          </form>
          <div className = "card-list">
            {movies.filter(movie=> movie.poster_path).map(movie=>(
              <MovieCard movie={movie} />
            ))}
      </div>



        </>
      )
 }
