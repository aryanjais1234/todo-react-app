function Todo_Item({todoName, todoDate, onDeleteClick}){
 
  return(
    <div className="data">
      <div class="row">
      <div class="col-6">
        {todoName}
      </div>
      <div class="col-4">
        {todoDate}
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-danger kg-button"
      onClick={()=>onDeleteClick(todoName)}
      >Delete</button>
      </div>
    </div>

    </div>
  );
}

export default Todo_Item;