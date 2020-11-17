import React, {useContext, useState} from 'react'
import {MovieContext} from './MovieList'
import {useHistory, useParams} from 'react-router-dom'

export default function ViewCourse() {
  let {movies, setMoves} = useContext(MovieContext)
  let {mid} = useParams()
  let movie = mid ? movies.find(m => m.id == mid) : {}

  let [id, setId] = useState(movie.id)
  let [year, setYear] = useState(movie.year)
  let [rated, setRated] = useState(movie.rated)
  let [genre, setGenre] = useState(movie.genre)
  let [title, setTitle] = useState(movie.title)
  let [poster, setPoster] = useState(movie.poster)
  let [plot, setPlot] = useState(movie.plot)
  let [rating, setRating] = useState(movie.rating)
  let [votes, setVotes] = useState(movie.votes)
  let [imdbID, setImdbID] = useState(movie.imdbID)
  let [reviews, setReviews] = useState(movie.reviews)

  const history = useHistory()

}