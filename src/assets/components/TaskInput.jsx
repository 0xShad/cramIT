import { useState } from "react"

export function TaskInput(props) {
    const {handleAddTask, tabs, setTabs} = props
    const [inputValue, setInputValue] = useState('')
    const [selectedTab, setSelectedTab] = useState(tabs[0] || '')
    const [dueDate, setDueDate] = useState('')

    return (
        <div className="input-con grid grid-cols-1 gap-2 md:grid-cols-2">
            <input type="text" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} placeholder="add assignment" />
            <div className="input-sub-con">
                <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                <select  value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)} className="col-spa1">
                    {tabs.map((tab) => {
                        if (tab !== 'All' && tab !== 'Done') {
                            return <option key={tab} value={tab}>{tab}</option>
                        } 
                    })}
                </select>
                <button className="bg-[#3929ff] p-1 rounded-md"onClick={() => {
                     if (!inputValue || !dueDate) {
                        alert('Please fill in both the assignment and the due date.');
                        return;
                      }
                    handleAddTask(inputValue, selectedTab, dueDate)
                    setInputValue('')
                }}>
                <i className="fa-solid fa-plus addTaskButton"></i>
                </button>
            </div>
           
        </div>
    )
}