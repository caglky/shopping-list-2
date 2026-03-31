import {useState} from "react"
import { data } from "./components/Data";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";
import Filter from "./components/Filter";
import Sort from "./components/Sort";


function App(){

  const[items, setItems] = useState(data); 

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const [category , setCategory] = useState("general")
  const [categoryFilter, setCategoryFilter] = useState("all")
 
  function handleAddItem(newItem){
    const existingItem= items.find(item=> item.title.toLowerCase() === newItem.title.toLowerCase());
    if (existingItem){
      setItems((items)=>items.map((item) => item.title.toLowerCase()=== newItem.title.toLowerCase() ? 
      {...item, quantity: item.quantity + newItem.quantity, completed: false}  : item));
      return;
    }
    setItems((items)=>[...items, newItem]);
  }

  function handleDeleteItem(id){
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleUpdateItem(id){
    setItems(items => items.map(item => item.id == id ? {...item, completed: !item.completed}: item));
  }

  function handleClearList (){
    const confirm = window.confirm("Are you sure to clear all list?");
    if(confirm){setItems([])};
  }

    const selectedItems = items.filter((item)=>{
    if (filter === "completed") return item.completed;
    if (filter === "uncompleted") return !item.completed;
    return true; 
  })
  .filter((item)=>{
    if (categoryFilter === "all") return true;
    return item.category === categoryFilter;
  })

  let sortedItems= [...selectedItems];
  if(sortBy === "name-asc"){
    sortedItems.sort((a,b)=>a.title.localeCompare(b.title))
  }
  if(sortBy === "name-des"){
    sortedItems.sort((a,b)=>b.title.localeCompare(a.title))
  }
  if(sortBy === "quantity-asc"){
    sortedItems.sort((a,b)=> a.quantity-b.quantity)
  }
  if(sortBy === "quantity-des"){
    sortedItems.sort((a,b)=>b.quantity - a.quantity)
  }


    return (
    <div className="app">
      <Header/>
      <Form onAddItem = {handleAddItem} onClearList= {handleClearList} category= {category} setCategory = {setCategory}/> 
      <div className="selection">
        <Filter filter= {filter} setFilter= {setFilter}/>
        <Sort sortBy= {sortBy} setSortBy= {setSortBy}/>
        <select className="category" value = {categoryFilter} onChange = {(e)=>setCategoryFilter(e.target.value)}>
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
      </div>
      <List items = {sortedItems} onDeleteItem = {handleDeleteItem} onUpdateItem = {handleUpdateItem}/>  
      <Summary items = {items}/>
    </div>
  );
}

export default App
