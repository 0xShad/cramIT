import { useState } from "react"
import { Header } from "./assets/components/Header"
import { Tabs } from "./assets/components/Tabs"
import { TaskCard } from "./assets/components/TaskCard"
import { TaskList } from "./assets/components/TaskList"
import { TaskInput } from "./assets/components/TaskInput"


export default function App() {
  const [todos, setTodos] = useState([
    {task: "Python Exercise", isComplete: false, subject: 'DSA', dueDate: "2024-11-08T23:59"},
    {task: "Talent show", isComplete: false, subject: 'UTS', dueDate: "2024-10-25T13:19"},
    {task: "Reporting", isComplete: false, subject: 'RVA', dueDate: "2024-10-27T23:59"},
    {task: "Module 3", isComplete: false, subject: 'DCN', dueDate: "2024-10-29T23:59"},
    {task: "Flutterflow progress", isComplete: false, subject: 'FREE EL', dueDate: "2024-11-08T23:59"}
  ])

  const [tabs, setTabs] = useState(['All', 'Done', 'FREE EL', 'OS', 'PROG', 'DCN', 'DSA', 'PE', 'RVA', 'UTS'])

  const [Tab, setTab] = useState('All')

  function handleAddTask(newTask, selectedTab, dueDate) {
    const newTaskList = [...todos, {task: newTask, isComplete: false, subject: selectedTab, dueDate: dueDate}]
    setTodos(newTaskList)
    console.log(newTaskList)
   
  }

  function handleDeleteTask(taskIndex) {
    const newList = todos.filter((_, index) => index !== taskIndex);
    setTodos(newList);
  }

  function handleDoneTask(taskIndex) {
    const doneTaskList = todos.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, isComplete: true}
      }

      return task
    })
    setTodos(doneTaskList)

  }


  return (
    <>
    <Header todos={todos} />
    <Tabs todos={todos} setTodos={setTodos} Tab={Tab} setTab={setTab} tabs={tabs} setTabs={setTabs}/>
    {/* <TaskCard todos={todos}/> */}
    <TaskList todos={todos} Tab={Tab} handleDeleteTask={handleDeleteTask}  handleDoneTask={handleDoneTask}/>
    <TaskInput handleAddTask={handleAddTask} tabs={tabs} setTabs={setTabs}/>
    </>
  )
}