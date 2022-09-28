import React, {useState} from 'react';

import {CgTrash} from "react-icons/cg"
const OneTodo = ({item,setTodo,todo}) => {
    const [text, setText] = useState(false);

    const deleteTodo = () =>{
        if(text){
        let x = [...todo].filter(value => value.id !== item.id);
        setTodo([...x]);}
    }
    const change = () => {setText(!text);
        console.log(item.id)}

    return (
        <div
            className={`w-full py-2 px-2 bg-gray-500 bg-opacity-20 border-2 border-gray-300 rounded-l my-2 text-[16px] ${text && 'bg-gray-600 bg-opacity-70'}`}>
            <div
                className={`flex items-center justify-between gap-4 cursor-pointer ${text && 'line-through'}`}>
                <div onClick={change} className="flex items-center gap-1 w-full">
                    <input type="checkbox" checked={text} onChange={change}/>
                    {item.title}
                </div>
                <div onClick={deleteTodo} className="cursor-pointer hover:text-red-700 transition duration-300">
                    <CgTrash size={25}/>
                </div>
            </div>
        </div>
    );
};

export default OneTodo;