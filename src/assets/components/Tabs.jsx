export function Tabs(props) {
    const { todos } = props
    const tabs = ['All', 'Done', 'App Dev', 'OpSys', 'Prog 03', 'Data Com', 'Data Structure & Algo', 'PathFit', 'RVA']


    const subjectFilters = {
        'All': () => todos.length,
        'Done': () => todos.filter(val => val.isComplete).length,
        'RVA': () => todos.filter(val => val.subject === 'RVA').length,
        'App Dev': () => todos.filter(val => val.subject === 'App dev').length,
        'OpSys': () => todos.filter(val => val.subject === 'Opsys').length,
        'Prog 03': () => todos.filter(val => val.subject === 'Prog').length,
        'Data Com': () => todos.filter(val => val.subject === 'DCN').length,
        'Data Structure & Algo': () => todos.filter(val => val.subject === 'DSA').length,
        'PathFit': () => todos.filter(val => val.subject === 'PE').length
    }

    return (
        <nav>
            {tabs.map((tab, tabIndex) => {
            const totalTask = subjectFilters[tab] ? subjectFilters[tab]() : '';

                return (
                    <button className="tab-button" key={tabIndex}><h4>{tab} <span>({totalTask})</span></h4></button>
                ) 
            })}
        </nav>
    )
}