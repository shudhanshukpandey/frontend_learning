import React, { Component } from 'react'
import NewsItem from './NewsItem'     // shift+alt+ arrow will copy current line

export class News extends Component {
  render() {
    return (
      <div>
          this is a news component
         
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
      </div>
    )
  }
}

export default News
