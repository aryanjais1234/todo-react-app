import React from 'react'
import Todo_Item from './Todo_Item';

const ItemContainer = ({todoItems,onDeleteClick}) => {
  return (
    <>
      <div>
        {todoItems.map((item,index)=>(
          <Todo_Item key={index} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />
        ))}
      </div>
    </>
  )
}

export default ItemContainer