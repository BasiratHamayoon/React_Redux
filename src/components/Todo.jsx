export const Todo = () => {
    return (
        <>
         <section className="flex justify-center items-center w-full">
            <div className="w-[60%] flex flex-col justify-center items-center bg-gray-200 px-2 py-4">
                <h1 className="font-bold text-gray-700 text-[30px] py-4">Todo App</h1>
                <form className="flex justify-center items-center w-full">
                    <div className="px-2 py-[5px] bg-white w-[80%] flex justify-between">
                        <input type="text" placeholder="Enter Task"/>
                        <button className="bg-gray-900 px-6 text-white rounded-full cursor-pointer">Add</button>
                    </div>
                </form>
                <ul className="w-[80%] flex flex-col justify-center items-center py-[20px]">
                    <li className="px-2 py-[5px] bg-white w-[80%] flex justify-between w-full">
                        <p>Item 1</p>
                        <button className="bg-gray-900 px-6 text-white rounded-full cursor-pointer">Delete</button>
                    </li>
                </ul>
            </div>

         </section>
        </>
    )
}