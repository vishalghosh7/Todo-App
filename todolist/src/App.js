import React, {useState} from "react";
import Form from "./components/Form";
import List from "./components/List";
import Section from "./components/Section";

const heading = "To-Do List";

const list = [
    {id: 1, title: "Test 1", complete: false},
    {id: 2, title: "Test 2", complete: false},
    {id: 3, title: "Test 3", complete: false}
]

const App = ()=>{
    const [todolist, setTodolist] = useState(list);

    const addToDo = (item)=>{
        setTodolist(todolist=>[...todolist, item]);
    }

    const removeToDo = (id)=>{
        setTodolist(todolist=>todolist.filter((item)=>item.id!==id));
    }

    return <div className="ui container center aligned">
        <Section>
            <h1>{heading}</h1>
        </Section>
        
        <Section>
            <Form addTodo={addToDo}/>
        </Section>

        <Section>
            <List list={todolist} removeTodo={removeToDo}/>
        </Section>
    </div>
}

export default App;
