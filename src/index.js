import React from 'react';
import ReactDom from 'react-dom';
import SearchMovies from "./components/searchmovies";
class Main extends React.Component{
  render() {
    return(
      <div className = "container">
        <h1 className= "heading">React Movie search</h1>
        <SearchMovies/>
      </div>
    );

  }
}

ReactDom.render(<Main />, document.getElementById('root'));
