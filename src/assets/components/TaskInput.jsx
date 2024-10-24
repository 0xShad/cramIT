import { useState } from "react"

export function TaskInput(props) {
    const {handleAddTask} = props
    const [inputValue, setInputValue] = useState('')


    return (
        <div className="input-con flex gap-1">
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }}  placeholder="add assignment" />
            <div className="">
                <input type="date" />
                <button onClick={() => {
                    handleAddTask(inputValue)
                }}>
                <i className="fa-solid fa-plus"></i>
                </button>
            </div>
           
        </div>
    )
}