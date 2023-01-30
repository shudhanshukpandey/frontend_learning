import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description, imageUrl, readMore, author, date }=this.props;       // destructuring here
                                                // from props title and description will fetched and assigned to new variables
    return (
        
      <div>
          <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date( date).toGMTString()}</small></p>
                <a href={readMore} target="_blank" className="btn btn-primary">Read More</a>
                {/* target='_blank' will open a new tab on new click for the link */}
                {/* converting datetime to gmt using function toGMTString() */}
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
