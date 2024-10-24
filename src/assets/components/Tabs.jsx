export function Tabs(props) {
    const { todos, Tab, setTab } = props
    const tabs = ['All', 'Done', 'FREE EL', 'OS', 'PROG', 'DCN', 'DSA', 'PE', 'RVA', 'UTS']


    return (
        <nav className="mt-4">
            <div className="flex gap-3 flex-wrap">
            {tabs.map((tabItem, tabIndex) => {
                return (
                    <button key={tabIndex} className="tabButtons bg-[#3929ff] px-2 py-1.5 rounded-sm">
                        <h6>{tabItem}</h6>
                    </button>
                )
            })}

            <button className="addTaskButton bg-white text-[#3929ff] font-bold p-2.5 rounded-md">
            <i class="fa-solid fa-plus"></i>
            </button>
            </div>
        </nav>
    )
}