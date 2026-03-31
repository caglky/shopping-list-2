export default function Filter({filter, setFilter}){
  return(
    <div className="filters">
      <button onClick={()=> setFilter("all")}>All</button>
      <button onClick={()=> setFilter("completed")}>Completed</button>
      <button onClick={()=> setFilter("uncompleted")}>Uncompleted</button>
    </div>
  );
}