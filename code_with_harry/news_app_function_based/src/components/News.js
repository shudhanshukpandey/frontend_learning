import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'

import PropTypes from 'prop-types'
import Spinner from './Spinner';

export default function News(props) {

  const [articles, setArticles]=useState([]);          //workings as this.state and this.setsState
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResult,setTotalResult]=useState(0);

  // document.title=`${capitalize(props.catogery)}-Indi-News`

  const capitalize=(string)=>{
    return string.CharAt(0).toUpperCase()+string.slice(1);

  }
    const updateNews = async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catogery}&apiKey=8e2f3e13986e42e39850c9c1474338de&page=${page-1}&pageSize=5`;
    
      let data= await fetch(url);

      let parsedData=await data.json();

      setArticles(parsedData.articles);
      setTotalResult(parsedData.totalResult);
      setLoading(false);    
    }

    useEffect(()=>{
        updateNews(); 
      },[]
    )

    
  const handlenextclick= async()=>{
    console.log("next click")
    if(!(page+1 > Math.ceil(totalResult/20)))
    {


      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catogery}&apiKey=8e2f3e13986e42e39850c9c1474338de&page=${page+1}&pageSize=5`;
      
      setLoading(true);


      let data= await fetch(url);    //will return a promise, will wait till await is resolved
      
      
      let parsedData=await data.json();   // parsing returned promise object to json
      console.log(parsedData);
  
      setPage(page+1);
      setArticles(parsedData.articles);
      setLoading(false);
    }

  }

  const handleprevclick=  async ()=>{             
    console.log("prev click")

    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catogery}&apiKey=8e2f3e13986e42e39850c9c1474338de&page=${page-1}&pageSize=5`;

    setLoading(true);

    let data= await fetch(url);    //will return a promise, will wait till await is resolved
    
    
    let parsedData=await data.json();   // parsing returned promise object to json
    console.log(parsedData);

    setPage(page-1);
    setArticles(parsedData.articles);
    setLoading(false);


  }
  

  return (
    <>
    <div className="container my-3">
      <h1 className="text-center">Indi-News Top {props.heading} Headlines</h1>

      {loading && <Spinner/>}

      <div className='row'>
        {!loading && articles.map((element)=>{
           return  <div className='col-md-4' key={element.url}>

            <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} readMore={element.url} author={element.author} date ={element.publishedAt}/>
      </div>


        })}
      </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handleprevclick}>prev</button>
        <button disabled={page+1 > Math.ceil(totalResult/20)} type="button" className="btn btn-dark" onClick={handlenextclick}>next</button>
            {/* button diasble login implemented for next */}
      </div>
    </div>
    </>
    )
}
News.protoType={
  country: PropTypes.string,
  catogery: PropTypes.string
  

}

News.defaultProps={
  country:"in",
  catogery:"general"

}
