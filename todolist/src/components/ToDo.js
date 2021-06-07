import React, {useState} from "react";

const ToDo = ({ title, completed, removeTodoItem, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempVal, setTempVal] = useState(title);
    const [complete, setComplete] = useState(completed);

    const handleDoubleClick = ()=>{
        setIsEditing(true);
    };

    const handleKeyDown = (e) =>{
        const key = e.keyCode;

        if(key===13){
            updateTodo({ title: tempVal });
            setValue(tempVal);
            setIsEditing(false);
        }
        else if(key===27){
            setTempVal(value);
            setIsEditing(false);
        }
    };

    const handleOnChange = (e)=>{
        setTempVal(e.target.value);
    };

    const handleComplete = ()=>{
        setComplete(complete=>!complete);
    }

    return (
        isEditing ? 
        <div className="row">
            <div className="column seven wide">
                <div className="ui input fluid">
                    <input 
                        autoFocus={true}
                        onKeyDown={handleKeyDown}
                        onChange = {handleOnChange}
                        value={tempVal}
                    />
                </div>
            </div>
        </div>
        :
        <div className="row">
            <div className="column five wide" onDoubleClick={handleDoubleClick}>
                <h2 style={complete ? {textDecoration: "line-through"}:{textDecoration: "none"}}>{value}</h2>  
            </div>
            <div className = "column one wide">
                <button className={"ui button circular icon"+
                    (
                        complete ? " green":" blue"
                    )
                } onClick={handleComplete}>
                    <i className="white check icon"></i>
                </button>
            </div>
            <div className = "column one wide">
                <button 
                    onClick={removeTodoItem}
                    className="ui button circular icon red">
                    <i className="white remove icon"></i>
                </button>
            </div>
        </div>
    )
}

export default ToDo;