import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description }=this.props;       // destructuring here
                                                // from props title and description will fetched and assigned to new variables
    return (
        
      <div>
          <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/news" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
