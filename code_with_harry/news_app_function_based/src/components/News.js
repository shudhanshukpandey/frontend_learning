import React from 'react'
import NewsItem from './NewsItem'

export default function News(props) {
  return (
    <>
    <div className="container my-3">
      <h1 className="text-center">Indi-News Top {props.heading} Headlines</h1>
      <NewsItem/>

    </div>

    </>
  )
}
