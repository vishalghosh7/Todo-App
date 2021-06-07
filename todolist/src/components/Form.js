import React, {useState} from "react";

const Form = ({ addTodo }) => {
    const [inputVal, setInputVal] = useState('');

    //controlled component
    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(inputVal.trim()!=='')
            addTodo({title: inputVal, complete: false});
            setInputVal('');
    }

    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input 
                            value={inputVal}
                            onChange={handleInputChange}
                            type="text" 
                            placeholder="what do you want to do today?"
                        />
                    </div>
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="white plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;