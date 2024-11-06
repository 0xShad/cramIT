import { Chart as ChartJS } from "chart.js/auto"
import { Bar } from "react-chartjs-2"

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
            <h5>Graph (CURRENTLY STATIC [TO FINISH]) </h5>
            <div className="h-72 flex justify-center">
                {
                    <Bar 
                     data={{
                        labels: ["A", "B", "C"],
                        datasets: [
                            {
                                label: "Assignments",
                                data: [200,300,400],
                            }
                        ]
                     }}                    
                    />
                }
            </div>
        </header>
    )
}