import { useState } from "react"

export function Tabs(props) {
    const { todos, setTodos, Tab, setTab } = props
    const [tabs, setTabs] = useState(['All', 'Done', 'FREE EL', 'OS', 'PROG', 'DCN', 'DSA', 'PE', 'RVA', 'UTS'])

    function addTab() {
        const newTab = prompt('Enter new course name: ') 
        if (newTab && !tabs.includes(newTab)) {
            setTabs([...tabs, newTab])
        } else {
            alert('invalid input or alrdy exist.')
        }
    }

    const [isEditOn, setIsEditOn] = useState(false)

    function editTab() {
       setIsEditOn((prev) => !prev)
    }

    function removeTab(tabIndex) {
        const tabToRemove = tabs[tabIndex]
        setTabs(tabs.filter((_, index) => index !== tabIndex))
        
        setTodos(todos.filter(todo => todo.subject !== tabToRemove))
    }

    function handleTabClick(tab) {
        setTab(tab)
    }


    return (
        <nav className="mt-4">
            <div className="flex gap-0.5 flex-wrap">
            {tabs.map((tabItem, tabIndex) => {

                let numberOfTask = tabItem === 'All'
                ? todos.length
                : tabItem === 'Done'
                    ? todos.filter(val => val.isComplete).length
                    : todos.filter(val => val.subject === tabItem).length

                /* IF ELSE VERSION
                if (tabItem === 'All') {
                    numberOfTask = todos.length
                } else if (tabItem === 'Done') {
                    numberOfTask = todos.filter(val => val.isComplete).length
                } else {
                    numberOfTask = todos.filter(val => val.subject === tabItem).length
                }*/

                return (
                    <div className="relative p-1">
                    <button onClick={() => handleTabClick(tabItem)} key={tabIndex} className="tabButtons  bg-[#3929ff] px-1.5 py-1 rounded-sm">
                        <i onClick={() => {removeTab(tabIndex)}} className={"cursor-pointer remove-tab-icon absolute top-1 right-0 fa-solid fa-x text-[10px] text-red-500 " + (isEditOn ? ' ' : 'hidden')}></i>
                        <h6 className="text-[10px]">{tabItem} <span className="text-[8px] text-gray-300">({numberOfTask})</span></h6>
                    </button>
                    </div>
                )
            })}

            <div className="flex gap-2 p-2">
            <button onClick={addTab} className="addTaskButton  bg-white text-[#3929ff] font-bold px-1.5 rounded-sm">
            <i className="fa-solid fa-plus"></i>
            </button>
            <button onClick={editTab} className="text-[8px] bg-white text-[#3929ff] px-1.5 rounded-sm"> {isEditOn ? 'Done' : 'Edit'}</button>
            </div>
            </div>
        </nav>
    )
}