export function TaskCard(props) {
    const { task } = props
    
    return (
        <div className="card todo-item">
            <p>{task.task}</p>
            <div className="todo-buttons">
                <button>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}