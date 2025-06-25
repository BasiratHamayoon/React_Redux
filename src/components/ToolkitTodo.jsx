import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../features/tasks/taskSlice";


export const ToolkitTodo = () => {
      const [ task, setTask ] = useState("");
      const dispatch = useDispatch()
      const tasks = useSelector((state) => state.taskReducer.tasks);
       const handleTaskSubmit =(e) => {
        e.preventDefault();
        dispatch(addTask(task));
        return setTask("");
    }
    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }
    return (
        <>
             <section className="flex justify-center items-center w-full flex-cols">
            <div className="w-[60%] flex flex-col justify-center items-center bg-gray-200 px-2 py-4">
                <h1 className="font-bold text-gray-700 text-[30px] py-4">Todo App</h1>
                <form className="flex justify-center items-center w-full" onSubmit={handleTaskSubmit}>
                    <div className="px-2 py-[5px] bg-white w-[80%] flex justify-between">
                        <input type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} className="outline-none"/>
                       
                            <button type="submit" className="bg-gray-900 px-8 py-[5px] text-white rounded-full cursor-pointer">Add</button>
                       
                    </div>
                </form>
                <ul className="w-[80%] flex flex-col justify-center items-center py-[20px] gap-4">
                    {
                        tasks.map((item, index) => {
                            return (
                                <li key={index} className="px-2 py-[5px] bg-white w-[80%] flex justify-between w-full">
                                    <p>{index}: {item}</p>
                                    <button className="bg-gray-900 px-6 py-[5px] text-white rounded-full cursor-pointer"onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                            )
                        })
                    }
                </ul>
            </div>

         </section>
        </>
    )
}