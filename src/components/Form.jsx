import { useState } from "react";
export default function Form({onAddItem, onClearList, category, setCategory}){
  const [title, setTitle] = useState("");  
  const [quantity, setQuantity] = useState(1);
  
  function handleFormSubmit(e){
    e.preventDefault();

    if(title) { 
        const item = {id: Date.now(), title, quantity, completed:false, category};

        onAddItem(item);

        setTitle("");
        setQuantity(1);
        setCategory("general")
    }
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Enter name of product: " value={title} onChange={(e)=>setTitle(e.target.value)} /> 
      <select value= {quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
        {Array.from({length: 10}, (value,index)=> index+1).map(num => <option value = {num} key={num}>{num}</option>)
        } 
      </select>
      <select value = {category} onChange = {(e)=>setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="dairy">Dairy</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
        <option value="bakery">Bakery</option>
        <option value="pantry">Pantry</option>
        <option value="beverage">Beverage</option>
        <option value="spice">Spice</option>
      </select>
      <button type="submit">Add</button>
      <button type="button" onClick={onClearList}>Clear</button>
    </form>
  )
}