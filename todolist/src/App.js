import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import List from "./components/List";
import Section from "./components/Section";
import todoApi from "./apis/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const heading = "To-Do List";


const App = ()=>{
    const [todolist, setTodolist] = useState([]);


    useEffect(()=>{
     (async function (){
        const { data } = await todoApi.get("/todos");
        setTodolist(data);
     })();
    },[]
    );

    const addToDo = async (item)=>{
        
        const { data, status } = await todoApi.post(`/todos`, item); 
        if(status===200){
            setTodolist(todolist=>[...todolist, data]);
            toast.success("Item added successfully");
        }
        else
            toast.error("Something went wrong");
    }

    const removeToDo = async (id)=>{
        const { status } = await todoApi.delete(`/todos/${id}`);
        if(status === 200){
            setTodolist(todolist=>todolist.filter((item)=>item._id!==id));
            toast.success("Item removed successfully");
        }
        else
            toast.error("Something went wrong");
    }

    const updateToDo = async (id, item) => {
        const { status } = await todoApi.put(`/todos/${id}`, item);
        if(status===200)
            toast.success("Item updated successfully");
        else
            toast.error("Something went wrong");
    }

    return <>
    <div className="ui container center aligned">
        <Section>
            <h1>{heading}</h1>
        </Section>
        
        <Section>
            <Form addTodo={addToDo}/>
        </Section>

        <Section>
            <List 
                list={todolist} 
                updateTodo={updateToDo}
                removeTodo={removeToDo}/>
        </Section>
    </div>
    <ToastContainer autoClose={2000}/>
    </>
}

export default App;
