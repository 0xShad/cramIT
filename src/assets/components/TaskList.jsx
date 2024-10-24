import {TaskCard} from './TaskCard'

export function TaskList(props){
    const { todos, Tab } = props

    // const filterTaskList = setTab === 'All' ? todos : setTab === 'Done' ? todos.filter(val => val.isComplete) : todos.filter(val => !val.isComplete) 

    let filterTaskList;

    if (Tab === 'All') {
        filterTaskList = todos
    } else if (Tab === 'Done') {
        filterTaskList = todos.filter(val => val.isComplete)
    } else {
        filterTaskList = todos.filter(val => val.subject === Tab)
    }

    return (
        <>
        {filterTaskList.map((task, taskIndex) => {
            return (
                <TaskCard 
                key={taskIndex}
                task={task}
                taskIndex={taskIndex}
                {...props}
                />
            )
        })}
        </>
    )
}