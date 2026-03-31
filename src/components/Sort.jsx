export default function Sort({sortBy, setSortBy}){
  return (
    <div className="sort">
      <select value= {sortBy} onChange= {(e)=>setSortBy(e.target.value)}> 
        <option value={"default"}>Default</option>
        <option value={"name-asc"}>Name (A-Z)</option>
        <option value={"name-dec"}>Name (Z-A)</option>
        <option value={"quantity-asc"}>Higher Quantity</option>
        <option value={"quantity-dec"}>Lower Quantity</option>
      </select>
    </div>
  )
}