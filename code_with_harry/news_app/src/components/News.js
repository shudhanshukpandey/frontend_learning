import React, { Component } from 'react'
import NewsItem from './NewsItem'     // shift+alt+ arrow will copy current line

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>
          NewsAppp - Top Hedlines
        </h2>
          <div className='row'>
            <div className='col-md-4'>

          <NewsItem title="casper" description="casper is a ghost"/>
            </div>
            <div className='col-md-4'>

          <NewsItem title="jasper" description="casper is a ghost"/>
            </div>
            <div className='col-md-4'>

          <NewsItem title="nasper" description="casper is a ghost"/>
            </div>

          </div>
      </div>
    )
  }
}

export default News
