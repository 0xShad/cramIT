export function Tabs(props) {
    const { todos, Tab, setTab } = props
    const tabs = ['All', 'Done', 'FREE EL', 'OS', 'PROG', 'DCN', 'DSA', 'PE', 'RVA', 'UTS']




    return (
        <nav className="mt-4">
            <div className="flex gap-3 flex-wrap">
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
                    <button key={tabIndex} className="tabButtons bg-[#3929ff] px-1.5 py-1 rounded-sm">
                        <h6 className="text-[10px]">{tabItem} <span className="text-[8px] text-gray-300">({numberOfTask})</span></h6>
                    </button>
                )
            })}

            <button className="addTaskButton bg-white text-[#3929ff] font-bold p-1 rounded-md">
            <i class="fa-solid fa-plus"></i>
            </button>
            </div>
        </nav>
    )
}