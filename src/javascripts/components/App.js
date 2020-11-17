import React from 'react';
import MovieList from './MovieList'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
    return  (
      <Router>   
          <MovieList/>
      </Router>
    )
}