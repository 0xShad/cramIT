import { TaskCard } from "./TaskCard"

export function TaskList(props) {
    const { todos, setTab, Tab } = props
     
    let filterSelection = []

    if (Tab === 'All') {
        filterSelection = todos
    } else if (Tab === 'Done') {
        filterSelection = todos.filter(val => val.isComplete); // Show completed tasks
    } else if (Tab === 'RVA'){
        filterSelection = todos.filter(val => val.subject === 'RVA')
    } else if (Tab === 'App Dev') {
        filterSelection = todos.filter(val => val.subject === 'App Dev')
    } else if (Tab === 'OpSys') {
        filterSelection = todos.filter(val => val.subject === 'Opsys')
    } else if (Tab === 'Prog 03') {
        filterSelection = todos.filter(val => val.subject === 'Prog')
    } else if (Tab === 'Data Structure & Algo') {
        filterSelection = todos.filter(val => val.subject === 'DSA')
    } else if (Tab === 'PathFit') {
        filterSelection = todos.filter(val => val.subject === 'PE')
    } else if (Tab === 'Data Com') {
        filterSelection = todos.filter(val => val.subject === 'DCN')
    }
    

    console.log("Filter Selection for Tab:", Tab, filterSelection);

    return (
        <>
        {filterSelection.map((task, taskIndex) => {
            return (
                <TaskCard 
                key={taskIndex}
                taskIndex={todos.findIndex(val => val.task == task.task)}
                {...props}
                task={task}
                />
            )
        })}
        </>
    )
}