import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function StarRating(props) {
  const starRating = props.rating / 2

  return (
    <>
    {[0, 1, 2, 3, 4].map(index =>
      <FaStar 
        key={index} 
        style={{color: (index < Math.floor(props.rating / 2)) ? 'maroon' : 'gray'}}/>
    )}

    {props.rating}
    </>
  )
}


