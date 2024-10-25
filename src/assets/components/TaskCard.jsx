

export function TaskCard(props) {
    const {task, taskIndex, handleDeleteTask, handleDoneTask} = props

    const taskClass = task.isComplete ? 'line-through opacity-50' : ''

    return (
        <div className="mb-2 bg-slate-800 border-gray-600 border p-2 rounded-md">
                <span className="text-[7px] text-red-500">Due: Wednesday, Oct 21 11:59 PM</span>
            <div className="flex items-center justify-between flex-wrap"  key={taskIndex}>
                <h6 className={`text-[10px] ${taskClass}`}>{task.task}</h6>
                <div className="flex items-center gap-1.5">
                    <button onClick={() => {handleDoneTask(taskIndex)}} className={`text-[8px] cardButton bg-green-500 ${taskClass}`}>Done</button>
                    <button onClick={() => {handleDeleteTask(taskIndex)}} className="text-[8px] cardButton bg-blue-800">Delete</button>
                </div>
            </div>
        </div>
    )
}