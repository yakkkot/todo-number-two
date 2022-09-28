import React, {useState} from 'react';

import {data} from "../../Services/data.urls";
import OneTodo from "../OneTodo/OneTodo";
import FormTodo from "../FormTodo/FormTodo";
import {FaUserAstronaut} from "react-icons/fa"
const Todo = () => {
    const [todo, setTodo] = useState(data);

    return (
        <div className="w-full  flex items-center flex-col justify-center my-3">
            <div className="flex items-center justify-center gap-2">
                <FaUserAstronaut size={35}/>
                <p className="text-2xl">Don't forget!</p>
            </div>
            <div
                className="w-full py-2 px-4 max-w-[550px] bg-gray-200 border-2 border-gray-300 rounded-xl flex flex-col items-center justify-center my-3">

                <FormTodo setTodo={setTodo}/>
                <div className="w-full px-2">
                    {
                        todo.map(item => <OneTodo key={item.id} item={item} setTodo={setTodo} todo={todo}/>)
                    }
                </div>
                <div className="self-center">
                    <p className="text-xl">{!todo.length ? 'You have no tasks' : `Tasks: ${todo.length}`}</p>
                </div>
            </div>

        </div>
    );
};

export default Todo;