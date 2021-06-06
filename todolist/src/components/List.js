import React from "react";
import ToDo from "./ToDo";

const List = ({ list, removeTodo }) =>{
    const renderList = list.map((item)=><ToDo title={item.title} complete={item.complete} key={item.title} removeTodoItem={(e)=>removeTodo(item.id)}/>);

    return (
        <div className="ui grid center aligned">
            {renderList}
        </div>
    )
}

export default List;