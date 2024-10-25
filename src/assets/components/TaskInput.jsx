import { useState } from "react"

export function TaskInput(props) {
    const {handleAddTask, tabs, setTabs} = props
    const [inputValue, setInputValue] = useState('')
    const [selectedTab, setSelectedTab] = useState(tabs[0] || '')

    return (
        <div className="input-con flex gap-1">
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }}  placeholder="add assignment" />
            <div className="">
                <select value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
                    {tabs.map((tab) => {
                        if (tab !== 'All' && tab !== 'Done') {
                            return <option key={tab} value={tab}>{tab}</option>
                        } 
                    })}
                </select>
                <button onClick={() => {
                    handleAddTask(inputValue, selectedTab)
                    setInputValue('')
                }}>
                <i className="fa-solid fa-plus"></i>
                </button>
            </div>
           
        </div>
    )
}