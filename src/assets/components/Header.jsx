export function Header(props) {
    const { todos, sideBar, hideSideBar } = props
    const totalTask = todos.length 

    const isPlural = totalTask != 1
    const ifPlural = isPlural ? 'tasks' : 'task'

    return (
        <header>
            {!sideBar && <button onClick={hideSideBar}>
            <i className="fa-solid fa-list mb-5 text-2xl"></i></button>}
            <h1 className="text-xl">Dashboard</h1>
            <p className="text-gray-400 text-sm">You have {totalTask} {ifPlural} TO DO.</p>
            <p className="text-gray-200 text-sm">[graph TO DO]</p>
        </header>
    )
}