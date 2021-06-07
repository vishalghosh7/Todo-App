import React from "react";
import ToDo from "./ToDo";

const List = ({ list, removeTodo, updateTodo }) =>{
    const renderList = list.map(
        (item)=>(<ToDo 
                title={item.title}
                 complete={item.complete} 
                 key={item._id} 
                 removeTodoItem={(e)=>removeTodo(item._id)} 
                 updateTodo={(updatedItem)=>updateTodo(item._id, updatedItem)}
            />)
        );

    return (
        <div className="ui grid center aligned">
            {renderList}
        </div>
    )
}

export default List;