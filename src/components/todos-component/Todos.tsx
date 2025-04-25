import {useEffect, useState} from "react";
import {ITodoModel} from "../../models/ITodoModel.ts";
import "./Todos.css"
import {loadTodos} from "../../servise/api.servise.ts";
import {Todo} from "../todo-component/Todo.tsx";
export const Todos = () => {

    const [todos, setTodos] = useState<ITodoModel[]>([]);
    useEffect(() => {
        loadTodos().then(value =>setTodos(value) );



    })

    return (
        <div>
            {
                todos.map((todo) => <Todo todo={todo} key={todo.id}/>

                )
            }
        </div>
    );
};