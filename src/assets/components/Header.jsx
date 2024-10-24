export function Header(props) {
    const { todos } = props
    const totalTask = todos.length 

    const isPlural = totalTask != 1
    const ifPlural = isPlural ? 'tasks' : 'task'

    return (
        <header>
            <h1>You have {totalTask} {ifPlural} TO DO.</h1>
        </header>
    )
}