// import { useEffect, useState } from 'react'
// import './App.css'
// import Card from './components/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


// function App() {
  
//   const [search,setSearch] = useState("");
//   const [query,setQuery] = useState("pizza");
//   const [recipes,setRecipes] = useState([]);
//   const APP_KEY = "f9fa8aa79faa7ae8f7e76ba433501e78";
//   const APP_ID = "e6f1e5aa";

//   useEffect(() => {
//     fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     )
//       .then((res) => res.json())
//       .then((data) => setRecipes(data.hits))
//       // .then((data) => console.log(data.hits[0].recipe.image))
//   }, [query]);

//   const submitHandler = ()=>{
//     setQuery(search);
//     setSearch("");
//   }

//   return(
    
//     <div>
//       {/* <Button>Testinggg</Button> */}
//       <h1 className='heading'>Gourmet Galore</h1>
        
//       <section className = {"container"}>
//         <h2>Gourmet Galore: Savor the Flavors, Save the Favorites!</h2>
//         <p>"Gourmet Galore" is a React-based recipe book app where users can browse through various recipes, view detailed ingredients and health labels, and add their favorite recipes to a favorites list for easy access.</p>
      
//       <div>
//             <input type="text" placeholder="Enter food name" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
//             <button type='submit' onClick={submitHandler}>Search</button>
//         </div>
//         </section>
//       <div className='recipes'>
//         {recipes.map((item) =>{
//           return <Card res={item}/>
//         }) 
//       }
      
//       </div>
      

//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('pizza');
    const [recipes, setRecipes] = useState([]);
    const APP_KEY = 'f9fa8aa79faa7ae8f7e76ba433501e78';
    const APP_ID = 'e6f1e5aa';

    useEffect(() => {
        fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
            .then((res) => res.json())
            .then((data) => setRecipes(data.hits));
    }, [query]);

    const submitHandler = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className="App">
            {/* <header>
                <h1 className="heading">Gourmet Galore</h1>
            </header> */}

            <Container>
                <section>
                    <h2>
                        Gourmet Galore: Savor the Flavors, Save the Favorites!
                    </h2>
                    <p>
                        "Gourmet Galore" is a React-based recipe book app where
                        users can browse through various recipes, view detailed
                        ingredients and health labels, and add their favorite
                        recipes to a favorites list for easy access.
                    </p>
                </section>

                <Form onSubmit={submitHandler}>
                    <Form.Group as={Row}>
                        <Col md={8}>
                            <Form.Control
                                type="text"
                                placeholder="Enter food name"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Col>
                        <Col md={4}>
                            <Button type="submit">Search</Button>
                        </Col>
                    </Form.Group>
                </Form>

                <Row className="recipes">
                    {recipes.map((item, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card res={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default App;
