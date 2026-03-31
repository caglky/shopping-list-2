export default function Item({ item, onDeleteItem, onUpdateItem}){
  return(
    <li>
      <input type="checkbox" checked = {item.completed} onChange= {()=> onUpdateItem(item.id)}/>
      <span style= {item.completed ? {textDecoration: "line-through"}: {}}>{item.title} {item.quantity}</span>
      <button onClick={() => onDeleteItem(item.id)}>x</button> 
    </li>
  );
}