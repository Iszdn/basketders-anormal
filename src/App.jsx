import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  function datalar(){
    fetch("https://northwind.vercel.app/api/categories").then(res=>res.json()).then(items=>setProducts(items))
  }
  useEffect(() => {
    datalar()
  }, [])
  
  function handleBasket(x){
    setBasket([...basket,x])
  }
  function handleRemove(){
    
  }
  return (
    <>

{
<table>
  <thead>

    <tr>
      <th>id</th>
      <th>name</th>
      <th>description</th>
      <th>count</th>
      <th>settings</th>
      
    </tr>
  </thead>
  <tbody>
    {
      basket.map((x)=>(
        <tr>
      <td>{x.id}</td>
      <td>{x.name}</td>
      <td>{x.description}</td>
     <td>
      <button>+</button>1<button>-</button>
     </td>
     <td><button onClick={()=>handleRemove(x)}>remove</button></td>
    </tr>
      ))
    }
  </tbody>
</table>
    }


{/* table with products  */}
    {
<table>
  <thead>

    <tr>
      <th>id</th>
      <th>name</th>
      <th>description</th>
      <th>add basket</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map((x)=>(
        <tr>
      <td>{x.id}</td>
      <td>{x.name}</td>
      <td>{x.description}</td>
      <td><button onClick={()=>handleBasket(x)}>add</button></td>
    </tr>
      ))
    }
  </tbody>
</table>
    }
    </>
  );
}

export default App;
