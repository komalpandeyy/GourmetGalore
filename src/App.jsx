import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("pizza");
  const [recipes,setRecipes] = useState([]);
  const APP_KEY = "f9fa8aa79faa7ae8f7e76ba433501e78";
  const APP_ID = "e6f1e5aa";

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits))
      // .then((data) => console.log(data.hits[0].recipe.image))
  }, [query]);

  const submitHandler = ()=>{
    setQuery(search);
    setSearch("");
  }

  return(
    
    <div>
      
      <section className={'header'}>
      <h1 className={'title'}>GOURMET <img className={"logo"} src={'https://cdn4.vectorstock.com/i/1000x1000/22/08/chef-logo-template-vector-30172208.jpg'}></img> GALORE</h1>
      <div className={'search'}>
          <input type="text" className = {"search-bar"}placeholder="Enter food name" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
          <button type='submit' onClick={submitHandler} className={'search-button'}>Search</button>
      </div>
      </section>

      <div className='recipes'>
        {recipes.map((item) =>{
          return <Card res={item}/>
        }) 
      }
      
      </div>
      

    </div>
  )
}

export default App