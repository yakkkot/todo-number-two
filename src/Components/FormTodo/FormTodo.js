import React from 'react';

import {useForm} from "react-hook-form";
import {AiOutlinePlus} from "react-icons/ai"
import {BiErrorAlt} from "react-icons/bi"
const FormTodo = ({setTodo}) => {
    const {register,formState:{isValid,errors},handleSubmit,reset} = useForm({mode:"onChange"})

    const submit = ({title}) =>{
        setTodo(prev =>
                [{id: new Date(),
                title,
                isCompleted: false
            }, ...prev]
        );
        reset();
    }

    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <form onSubmit={handleSubmit(submit)}
                  className="flex items-center flex-col w-full max-w-[550px] py-2 px-2">
                <div className="flex items-center gap-3 w-full">
                <input type="text" {...register("title", {required: true, minLength: 4})}
                       placeholder={'Enter your todo'}
                       className="w-full py-2.5 px-2 bg-grey-50 border-2 border-grey-50 rounded-l"/>
                <button disabled={!isValid} className={isValid ? 'bg-purple-700 py-2 px-2' : 'bg-purple-300 py-2 px-2'}>
                    <AiOutlinePlus className="text-purple-50" size={28}/>
                </button>
                </div>
                {errors.title ? <div className="flex items-center gap-1 self-start text-red-700 px-1 text-[12px] h-[15px] my-2">
                        <BiErrorAlt size={20}/>
                        <p>Enter correct TODO man!</p>
                </div>
                : <div className="h-[15px] my-2"></div>}
            </form>
        </div>
    );
};

export default FormTodo;