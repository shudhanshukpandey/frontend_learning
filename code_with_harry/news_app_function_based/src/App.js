import logo from './logo.svg';
import './App.css';
import Spinner from './components/Spinner';
import NavBar from './components/NavBar';
import NewsItem from './components/NewsItem';
import News from './components/News';

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div>

<NavBar/>
{/* <News country="in" catogery="general"/> */}
<Routes>
  <Route exact path="/" element=             {<News key="general" country="in" catogery="general"/>}/>
  <Route exact path="/about" element=        {<News key="about" country="in" catogery="about"/>}/>
  <Route exact path="/business" element=     {<News key="business" country="in" catogery="business"/>}/>
  <Route exact path="/entertainment" element={<News key="entertainment" country="in" catogery="entertainment"/>}/>
  <Route exact path="/science" element=      {<News key="science" country="in" catogery="science"/>}/>
  <Route exact path="/general" element=      {<News key="general" country="in" catogery="general"/>}/>
  <Route exact path="/health" element=       {<News key="health" country="in" catogery="health"/>}/>
  <Route exact path="/sports" element=       {<News key="sports" country="in" catogery="sports"/>}/>
  <Route exact path="/tech" element=         {<News key="tech" country="in" catogery="technology"/>}/>
</Routes>         
         
</div>

      

    </>
    
  );
}

export default App;
