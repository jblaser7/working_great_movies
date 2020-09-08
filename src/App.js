import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
     movies: [
       {
         name: 'The fly',
         rank:8,
         id:1
       },
       {
         name:'A clockwork orange',
         rank:8,
         id:2

       },
       {
        name: 'Alien',
        rank:8,
        id:3
       },
       {
         name:'Tron',
         rank:9,
         id:4
       },
       {
         name: 'Back to the future',
         rank:9,
         id:5
       },
       {
         name:'Robocop',
         rank:8,
         id:6
       },
       {
         name:'contact',
         rank:8,
         id:7
       },
       {
         name: 'minority report',
         rank:8,
         id:8
       } 
     ],
     searchField:''
  };
}

/*componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=[]&t=Game of Thrones&Season=1&Episode=1') 
        .then(response=>console.log(response))
}
*/
handleChange = e => {
  this.setState({ searchField: e.target.value })
  }
  
//handleChange(e) {
 // this.setState({ searchField: e.target.value })
//}
  render() {
        const { movies, searchField } = this.state;
        const filteredMovies = movies.filter(movie =>
          movie.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
    <div className="App">
      <h1>Search Movies</h1>
      <SearchBox
        placeholder='search movies'
        handleChange={this.handleChange}/>
      <CardList movies = {filteredMovies}/>
    </div>
    );
  }
}

export default App;
/*
const fetchData = async(searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            apikey:'',
            s: searchTerm
        }
    });
    if(response.data.Error){
       return []
    }
    return response.data.Search;
};

async  fetchData(searchTerm) {
     const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')




    const fetchData = async(searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            apikey:'',
            s: searchTerm
        }
    });
    if(response.data.Error){
       return []
    }
    return response.data.Search;
};

  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
    apikey: '',
    i: movie.imdbID
    }
  });


*/