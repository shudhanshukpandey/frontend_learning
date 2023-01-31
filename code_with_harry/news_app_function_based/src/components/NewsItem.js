
export default function NewsItem(props) {

  return (
    <div>
          <div className="card">
            <img src={props.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className='card-text'><small className='text-muted'>By {props.author?props.author:"Unknown"} on {new Date(props.date).toGMTString()}</small></p>
                <a href={props.readMore} target="_blank" className="btn btn-primary">Read More</a>
                {/* target='_blank' will open a new tab on new click for the link */}
                {/* converting datetime to gmt using function toGMTString() */}
            </div>
            </div>
      </div>
  )
}
