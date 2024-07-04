import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';


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
    //setSearch("");
  }

  return(
    <div className='container'>
      <h1>Gourmet Galore</h1>
        <div>
            <input type="text" placeholder="Enter food name" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
            <button type='submit' onClick={submitHandler}>Search</button>
        </div>
      <section>
        <h2>Caption</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium unde eveniet mollitia natus a velit minima tempore molestias, quasi tempora nulla consequatur neque iure laboriosam ipsam voluptas. Tempore, ad vitae.</p>
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
