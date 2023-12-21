import { useState } from "react"
import Button from "./components/Button"
import Item from "./components/Item"

export default function App(){

    const [todos, setTodos] =  useState([])
    const [text, setText] = useState("")

    const onInputChange =(event)=>{
        setText(event.target.value)
    }

    const addToDo =()=>{
        if (text.trim().length > 0){
            setTodos([text, ...todos])
            setText("")
        } else{
            alert("Tienes que agregar una tarea")
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addToDo();
        }
    };

    const onDelete = (index)=>{
        console.log(todos)
        todos.splice(index,1)
        setTodos([...todos])
        console.log(todos)
    }

    return(
        <main className=" bg-black flex justify-center items-center min-h-screen text-white">
            <div className=" h-full flex flex-col w-full max-w-[500px] gap-8 justify-center">
                <div className="flex items-center gap-5">
                <img className=" w-20 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnH1wnP7B8pq3N-5X1hRR15ev6M1BapWm-DA&usqp=CAU" alt="" />
                <h1 className=" font-medium text-[60px]">To-Do List</h1>
                </div>
                <input type="text" className=" bg-white/20 p-2 rounded-md text-white font-medium " onChange={onInputChange} value={text} onKeyDown={handleKeyDown}/>
                <Button className="bg-white font-bold rounded-md text-black p-2" onClick={addToDo} >Agregar</Button>

                {todos.map((todo, index)=>{
                        return <Item text={todo} key={`item-${index}`} onDelete={()=>{onDelete(index)}}></Item>
                    })
                }
            </div>
        </main>
    )
}