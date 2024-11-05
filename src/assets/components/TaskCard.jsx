

export function TaskCard(props) {
    const {task, taskIndex, handleDeleteTask, handleDoneTask} = props

    const taskClass = task.isComplete ? 'line-through opacity-50' : ''
    const dueDate = new Date(task.dueDate)
    const formatDueDate = dueDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    })

    const formatTime = dueDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });

    return (
        <div className="mb-2 bg-slate-800 border-gray-600 border p-2 rounded-md">
                <span className="text-[.9rem] text-red-500 md:text-[1rem]">Due: {formatDueDate}, {formatTime}</span>
            <div className="flex items-center justify-between flex-wrap"  key={taskIndex}>
                <h6 className={`text-[.8rem] md:text-[1rem] ${taskClass}`}>{task.task}</h6>
                <div className="flex items-center gap-1.5">
                    <button onClick={() => {handleDoneTask(taskIndex)}} className={`text-[8px] md:text-[.9rem] cardButton bg-green-500 ${taskClass}`}>Done</button>
                    <button onClick={() => {handleDeleteTask(taskIndex)}} className="text-[8px] md:text-[.9rem] cardButton bg-blue-800">Delete</button>
                </div>
            </div>
        </div>
    )
}