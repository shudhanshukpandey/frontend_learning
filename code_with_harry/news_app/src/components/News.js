import React, { Component } from 'react'
import NewsItem from './NewsItem'     // shift+alt+ arrow will copy current line

export class News extends Component {

  articles= [
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "India's Adani begins record share sale as short seller triggers $44 billion rout - Reuters",
      "description": "Shares of India's Adani Enterprises <a href=\"https://www.reuters.com/companies/ADEL.NS\" target=\"_blank\">(ADEL.NS)</a> sank 15% on Friday as a scathing report by a U.S. short seller triggered a rout in the conglomerate's listed firms, casting doubts on how inv…",
      "url": "https://www.reuters.com/business/indias-adani-kicks-off-245-bln-share-sale-while-under-short-seller-attack-2023-01-27/",
      "urlToImage": "https://www.reuters.com/resizer/MxRQHI8W78Ia0-QiffNwI1lH7Mc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5RCPGPMXWVJZLPNNKC6LBHIJ7A.jpg",
      "publishedAt": "2023-01-27T08:41:00Z",
      "content": "MUMBAI, Jan 27 (Reuters) - Shares of India's Adani Enterprises (ADEL.NS) sank 15% on Friday as a scathing report by a U.S. short seller triggered a rout in the conglomerate's listed firms, casting do… [+3967 chars]"
    },
    {
      "source": { "id": "bloomberg", "name": "Bloomberg" },
      "author": null,
      "title": "Stock Market Today: Dow, S&P Live Updates for Jan. 27 - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=b6dd6284-9e20-11ed-a314-41534f556c4f&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMS0yNi9hc2lhLXN0b2Nrcy10by1yYWxseS1hcy10ZWNoLXB1bGxzLXMtcC01MDAtaGlnaGVyLW1hcmtldHMtd3JhcA==",
      "urlToImage": null,
      "publishedAt": "2023-01-27T06:43:00Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
    },
    {
      "source": { "id": null, "name": "The Moscow Times" },
      "author": "Daria Andriievska for AFP",
      "title": "Russian Missiles Kill 11 in Ukraine After Tank Pledge - The Moscow Times",
      "description": "A blistering wave of Russian strikes targeting Ukraine's energy infrastructure killed 11 people on Thursday, a day after Germany and the United States pledged heavy tanks for Kyiv.",
      "url": "https://www.themoscowtimes.com/2023/01/26/russian-missiles-kill-11-in-ukraine-after-tank-pledge-a80051",
      "urlToImage": "https://static.themoscowtimes.com/image/og/b8/80051__b86ece4a7f0a30f0280d6b08980572dd.jpg",
      "publishedAt": "2023-01-27T06:41:45Z",
      "content": "A blistering wave of Russian strikes targeting Ukraine's energy infrastructure killed 11 people on Thursday, a day after Germany and the United States pledged heavy tanks for Kyiv.\r\nThe stepped-up mi… [+4743 chars]"
    },
    {
      "source": { "id": null, "name": "SamMobile" },
      "author": "SamMobile, Asif Iqbal Shaik",
      "title": "Corning and Samsung confirm Galaxy S23 features Gorilla Glass Victus 2 - SamMobile - Samsung news",
      "description": "Usually, Samsung is the first in the smartphone industry to incorporate Corning's new Gorilla Glass protection. A few months ago, ...",
      "url": "https://www.sammobile.com/news/samsung-confirm-galaxy-s23-gorilla-glass-victus-2/",
      "urlToImage": "https://www.sammobile.com/wp-content/uploads/2023/01/Samsung-Galaxy-S23-Series-720x405.jpg",
      "publishedAt": "2023-01-27T06:22:00Z",
      "content": "Usually, Samsung is the first in the smartphone industry to incorporate Cornings new Gorilla Glass protection. A few months ago, Corning unveiled Gorilla Glass Victus 2 and promised that it would be … [+1218 chars]"
    },
    {
      "source": { "id": null, "name": "ESPN" },
      "author": "Jeff Borzello",
      "title": "Billy Packer, 82, longtime Final Four basketball analyst, dies - ESPN",
      "description": "Longtime college basketball commentator Billy Packer, the voice of the NCAA tournament for more than 30 years, died Thursday night. He was 82.",
      "url": "https://www.espn.com/mens-college-basketball/story/_/id/35535286/billy-packer-82-long-final-four-basketball-analyst-dies",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0127%2Fr1123045_2_1296x1296_1%2D1.jpg",
      "publishedAt": "2023-01-27T05:48:45Z",
      "content": "Longtime college basketball commentator Billy Packer, the voice of the NCAA tournament for more than 30 years, died Thursday night. He was 82.\r\nPacker's two sons, Mark and Brandt, announced the news … [+5729 chars]"
    },
    {
      "source": { "id": null, "name": "Eurasiantimes.com" },
      "author": "Tanmay Kadam",
      "title": "How To Kill An Abrams! Russian ‘Experts’ Issue A Guidebook On Where & How To Destroy The US Main Battle Tank - EurAsian Times",
      "description": "An image has resurfaced showing vulnerabilities of the American-made M1 Abrams Tanks with instructions on where to hit the Abrams tanks and with what weapons. The image is being circulated by and among Russian netizens shortly after the US agreed to supply Uk…",
      "url": "https://eurasiantimes.com/how-to-kill-an-abrams-russian-experts-issue-a-guidebook-on-where-how-to-destroy-the-us-main-battle-tank/",
      "urlToImage": "https://eurasiantimes.com/wp-content/uploads/2023/01/Whwre-to-hit-Abrams.jpg",
      "publishedAt": "2023-01-27T05:25:30Z",
      "content": "An image has resurfaced on social media showing vulnerabilities of the American-made M1 Abrams Tanks with instructions on where to hit the tank and using what weapons. \r\nUS President Joe Biden, on Ja… [+5100 chars]"
    },
    {
      "source": { "id": null, "name": "DW (English)" },
      "author": "Deutsche Welle",
      "title": "Egypt unveils 4,300-year-old mummy, tombs - DW (English)",
      "description": "Archaeologists found the gold-covered mummy inside a limestone sarcophagus that had remained shut for more than four millennia. It was among a number of recent discoveries, including four tombs found outside Cairo.",
      "url": "https://www.dw.com/en/egypt-unveils-4300-year-old-mummy-tombs/a-64530366",
      "urlToImage": "https://static.dw.com/image/64529694_6.jpg",
      "publishedAt": "2023-01-27T05:05:39Z",
      "content": "Egypt on Thursday announced a series of new archaeological discoveries found in the Saqqara necropolis south of Cairo, including a mummy said to be 4,300 years old.\r\n\"This mummy may be the oldest and… [+1771 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Jori Epstein",
      "title": "Cowboys give Mike McCarthy huge vote of confidence, while Kellen Moore's status is much more murky - Yahoo Sports",
      "description": "Dallas is running it back with its head coach for another season, but a shake-up elsewhere on staff has already begun.",
      "url": "https://sports.yahoo.com/cowboys-give-mike-mccarthy-huge-vote-of-confidence-while-kellen-moores-status-is-much-more-murky-032508883.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/lUwR50zYHBCyQdV_yxbG0g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDY-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/d2b6a350-9df0-11ed-b77e-818afb37259d",
      "publishedAt": "2023-01-27T03:25:00Z",
      "content": "Jerry Jones and Mike McCarthy met this week to discuss the Dallas Cowboys future.\r\nJones, the team owner, didnt simply express confidence in head coach McCarthys ability to win in 2023. Jones summone… [+6201 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Eric Levenson, Melissa Alonso, Jamiel Lynch, Christina Maxouris",
      "title": "5 former Memphis officers indicted on murder and kidnapping charges in Tyre Nichols' death as nation braces for release of police video - CNN",
      "description": "Five former Memphis police officers who were fired for their actions during the arrest of Tyre Nichols earlier this month were indicted on charges including murder and kidnapping, Shelby County District Attorney Steve Mulroy announced Thursday.",
      "url": "https://www.cnn.com/2023/01/26/us/tyre-nichols-memphis-thursday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230125184201-02-tyre-nichols.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-01-27T03:16:00Z",
      "content": "Five former Memphis police officers who were fired for their actions during the arrest of Tyre Nichols earlier this month were indicted on charges including murder and kidnapping, Shelby County Distr… [+9876 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Patrick Marley, Yvonne Wingett Sanchez",
      "title": "Arizona Republicans exempt lawmakers from the state's open-records law - The Washington Post",
      "description": "GOP legislators, stung by the public scrutiny of Ginni Thomas’s emails and the work of the Cyber Ninjas, retreats into secrecy.",
      "url": "https://www.washingtonpost.com/politics/2023/01/26/arizona-legislature-transparency-open-records-law/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ADTC6PDB54I6ZDHDSRKNBNDNII.jpg&w=1440",
      "publishedAt": "2023-01-27T03:15:00Z",
      "content": "Comment on this story\r\nPHOENIX Arizona Republicans shielded legislators from the states open-records law this week a move that comes months after the release of thousands of documents detailing exten… [+7028 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Half Moon Bay mass shooting suspect says he was bullied at job in television interview - KPIX CBS SF Bay Area",
      "description": "Team coverage on the latest developments in the Half Moon Bay mass shooting investigation (1-26-2023)",
      "url": "https://www.youtube.com/watch?v=wqrt-N-OGNw",
      "urlToImage": "https://i.ytimg.com/vi/wqrt-N-OGNw/maxresdefault.jpg",
      "publishedAt": "2023-01-27T01:56:04Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Best Plays From NBA All-Star Starter Luka Doncic | 2022-23 NBA Season - NBA",
      "description": "Luka Doncic is making his 4th #NBAAllStar appearance. Drafted as the 3rd overall pick in the 2018 NBA Draft out of Slovenia, Luka has three All-NBA First Tea...",
      "url": "https://www.youtube.com/watch?v=fytzeKzoh7g",
      "urlToImage": "https://i.ytimg.com/vi/fytzeKzoh7g/maxresdefault.jpg",
      "publishedAt": "2023-01-27T01:47:51Z",
      "content": null
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Israeli troops kill 7 Palestinian gunmen, 2 civilians in Jenin clash, Palestinians say - Reuters",
      "description": "Israeli commandos killed seven gunmen and two civilians in a raid on a flashpoint town in the occupied West Bank on Thursday, Palestinian officials said, stirring fear of further flare-ups after the largest single death toll in years of fighting.",
      "url": "https://www.reuters.com/world/middle-east/israeli-troops-kill-three-jenin-clash-with-palestinian-gunmen-medics-say-2023-01-26/",
      "urlToImage": "https://www.reuters.com/resizer/ZLy6O4nnAr1j0Nu3wuXttgANRbU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y3WUKDY6S5PHTI5VSJXBSSDFKY.jpg",
      "publishedAt": "2023-01-27T01:04:00Z",
      "content": "JENIN, West Bank, Jan 26 (Reuters) - Israeli commandos killed seven gunmen and two civilians in a raid on a flashpoint town in the occupied West Bank on Thursday, Palestinian officials said, stirring… [+4559 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Prince Andrew booted from Buckingham Palace | 7NEWS - 7NEWS Australia",
      "description": "Controversial member of the royal family Prince Andrew has reportedly been booted from Buckingham Palace. There’s now growing widespread speculation as to wh...",
      "url": "https://www.youtube.com/watch?v=vP4g-3B9rMw",
      "urlToImage": "https://i.ytimg.com/vi/vP4g-3B9rMw/maxresdefault.jpg",
      "publishedAt": "2023-01-27T01:02:23Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Has Earth's Core Stopped Spinning? | January 27, 2023 - CNN 10",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSbSGWs_ZmmE",
      "urlToImage": null,
      "publishedAt": "2023-01-27T01:00:10Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Asteroid 2023 BU: Space rock passes closer than some satellites - BBC",
      "description": "About the size of a bus, the space rock whipped over the southern tip of South America.",
      "url": "https://www.bbc.com/news/science-environment-64411469",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7FC8/production/_128421723_gettyimages-1365125730.jpg",
      "publishedAt": "2023-01-27T00:57:17Z",
      "content": "Now it's over, we can say it: a biggish asteroid passed by Earth a short while ago.\r\nAbout the size of a minibus, the space rock, known as 2023 BU, whipped over the southern tip of South America just… [+3514 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Dead Space Remake Video Review - GameSpot",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRW8vYfi1bQ0",
      "urlToImage": null,
      "publishedAt": "2023-01-27T00:51:01Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Will McDuffie",
      "title": "Kemp declares state of emergency after protests, mobilizes National Guard - ABC News",
      "description": "Police arrested six people Saturday after demonstrations escalated in Atlanta.",
      "url": "https://abcnews.go.com/US/kemp-declares-state-emergency-after-protests-mobilizes-national/story?id=96701465",
      "urlToImage": "https://s.abcnews.com/images/US/brian-kemp-ap-jt-230126_1674778839241_hpMain_16x9_992.jpg",
      "publishedAt": "2023-01-27T00:49:41Z",
      "content": "Georgia Gov. Brian Kemp declared a state of emergency Thursday in response to ongoing protests in downtown Atlanta.\r\nKemp ordered the state's defense department to mobilize up to 1,000 state National… [+2235 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Alexander Nazaryan",
      "title": "'Extremely disconcerting': NIH didn't track U.S. funds going to Chinese virus research, watchdog finds - Yahoo News",
      "description": "The National Institutes of Health failed to provide adequate oversight of an American organization that funded controversial research at the Wuhan Institute ...",
      "url": "https://news.yahoo.com/extremely-disconcerting-nih-didnt-track-us-funds-going-to-chinese-virus-research-watchdog-finds-004808475.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/lS0atxgIS17zsXwZuWBFmw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/69610201-9db5-11ed-bbd6-79b8a54d184b",
      "publishedAt": "2023-01-27T00:48:00Z",
      "content": "The Wuhan Institute of Virology in Wuhan, China, in 2021. (Hector Retamal/AFP via Getty Images)\r\nThe National Institutes of Health failed to provide adequate oversight of an American organization tha… [+7268 chars]"
    },
    {
      "source": { "id": null, "name": "SFGate" },
      "author": "Amanda Bartlett",
      "title": "'It may never come back': Rare green comet visible over Bay Area tonight - SFGATE",
      "description": "A rare green comet is passing through our solar system for the first time in 50,000 years, and Bay Area stargazers might be able to see it.",
      "url": "https://www.sfgate.com/news/article/green-comet-watching-bay-area-17741696.php",
      "urlToImage": "https://s.hdnux.com/photos/01/31/22/75/23408493/5/rawImage.jpg",
      "publishedAt": "2023-01-27T00:42:46Z",
      "content": "A rare green comet is passing through our solar system for the first time in 50,000 years, and over the weekend, Bay Area stargazers could have the best chance of spotting it in the night sky. Dubbed… [+4603 chars]"
    }
  ]

  constructor(){
    super();                            // if super not called inside a constructor it will throw a error?
    console.log("hello i am running inside a constructor");

    this.state={
      articles: this.articles,
      loading: false,
      page: 1
      
    }
  }



  async componentDidMount(){

    //an asysnk function can wait inside its own body
    console.log("inside cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8e2f3e13986e42e39850c9c1474338de&page=1";

    let data= await fetch(url);    //will return a promise, will wait till await is resolved
    
    
    let parsedData=await data.json();   // parsing returned promise object to json
    console.log(parsedData);

    this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults});


  }
   handlenextclick= async()=>{
    console.log("next click")
    if(this.state.page+1 > Math.ceil(this.state.totalArticles/20))
    {

    }
    else{

      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8e2f3e13986e42e39850c9c1474338de&page=${this.state.page+1}&pageSize=20`;
  
      let data= await fetch(url);    //will return a promise, will wait till await is resolved
      
      
      let parsedData=await data.json();   // parsing returned promise object to json
      console.log(parsedData);
  
      this.setState({});
  
      this.setState(
        {
          page:this.state.page+1,
          articles:parsedData.articles
        }
      )
    }

  }

   handleprevclick=  async ()=>{             
    console.log("prev click")

    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=8e2f3e13986e42e39850c9c1474338de&page=${this.state.page-1}&pageSize=20`;

    let data= await fetch(url);    //will return a promise, will wait till await is resolved
    
    
    let parsedData=await data.json();   // parsing returned promise object to json
    console.log(parsedData);

    this.setState({});

    this.setState(
      {
        page:this.state.page-1,
        articles:parsedData.articles
      }
    )
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2>
          NewsAppp - Top Hedlines
        </h2>
        {/*  mapping articles item so that it becomes dynamic
             add unique key to the after map div and return eact card with props
             in case of functiin based component remove 'this.state'
        */}

          <div className='row'>
        {this.state.articles.map((element)=>{
           return  <div className='col-md-4' key={element.url}>

            <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} readMore={element.url}/>
              </div>


        })}
            {/* <div className='col-md-4'>

          <NewsItem title="casper" description="casper is a ghost" imageUrl="https://www.reuters.com/resizer/MxRQHI8W78Ia0-QiffNwI1lH7Mc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5RCPGPMXWVJZLPNNKC6LBHIJ7A.jpg" readMore="https://www.reuters.com/business/indias-adani-kicks-off-245-bln-share-sale-while-under-short-seller-attack-2023-01-27/"/>
            </div> */}



            {/* <div className='col-md-4'>

          <NewsItem title="jasper" description="casper is a ghost"/>
            </div>
            <div className='col-md-4'>

          <NewsItem title="nasper" description="casper is a ghost"/>
            </div> */}

          </div>
          <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>prev</button>
          <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>next</button>

          </div>
      </div>
    )
  }
}

export default News
