export function Header(props) {
    const { todos } = props
    const totalTask = todos.length 

    const isPlural = totalTask != 1
    const ifPlural = isPlural ? 'tasks' : 'task'

    return (
        <header>
            <h1>cramIT - task management</h1>
            <p className="text-gray-400 text-sm">You have {totalTask} {ifPlural} TO DO.</p>
        </header>
    )
}