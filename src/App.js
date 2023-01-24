import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
const itemData=[
  {
    product:"Fancy Item",
    amount:"Rs.500",
    rating:"⭐⭐⭐"
  },
  {
    product:"Special Item",
    amount:"Rs.900",
    rating:"⭐⭐⭐⭐⭐"
  },
  {
    product:"Sale Item",
    amount:"Rs.300",
    rating:"⭐⭐"
  },
  {
    product:"Popular Item",
    amount:"Rs.600",
    rating:"⭐⭐⭐⭐"
  },
  {
    product:"Sale Item",
    amount:"Rs.200",
    rating:"⭐⭐⭐"
  }
,{
  product:"Fancy Item",
  amount:"Rs.500",
  rating:"⭐⭐⭐⭐⭐"
},
{
  product:"Special Item",
  amount:"Rs.600",
  rating:"⭐⭐⭐"
},
{
  product:"Popular Item",
  amount:"Rs.700",
  rating:"⭐⭐⭐⭐"
}
]
const [items, setItems]= useState(0);
  return (
    <div className="App">
      <div className="Header"><h1>SHOP IN STYLE</h1></div>
      <div className="cart"><span>CART {items}</span></div>
      <div className="row">
      {
itemData.map((item,index)=>(           
    <ProductDetails
  key={index}
  product={item.product}
  amount={item.amount}
  rating={item.rating}
  index={index}
  setItems={setItems}
  items={items}
/>
 ))}
       </div>
      <div className="Footer">Copyright @ kavin kumar</div>
    </div>
  );
}

export default App;


function ProductDetails(props){
 
  const[show,setShow]= useState(true);
  const handleAddcart= (index)=>{
setShow(!show);
props.setItems(props.items+1);

  }
  const handleremovecart= (index)=>{
    setShow(!show);
    props.setItems(props.items-1); 
  }
return(
  <div className="col-sm-1 col-md-2 col-lg-3 col-xl-3">
    <div className="card">
      <div className="imageSpace"></div>
      <div cLassName="card-content">
        <p>{props.product}</p>
        <p>{props.amount}</p>
        <p>{props.rating}</p>
       {show?<button onClick={()=>handleAddcart(props.index)} className="btn btn-primary">Add to Cart</button>:<button onClick={()=>handleremovecart(props.index)} className="btn btn-primary">Remove from Cart</button>}  
      </div>
    </div>
  </div>

)

}