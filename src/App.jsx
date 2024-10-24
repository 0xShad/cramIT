import { useState } from "react"
import { Header } from "./assets/components/Header"
import { Tabs } from "./assets/components/Tabs"
import { TaskCard } from "./assets/components/TaskCard"
import { TaskList } from "./assets/components/TaskList"
import { TaskInput } from "./assets/components/TaskInput"


export default function App() {
  const [todos, setTodos] = useState([
    {task: "Python Exercise", isComplete: true, subject: 'DSA'},
    {task: "Talent show", isComplete: true, subject: 'RVA'},
    {task: "Reporting", isComplete: false, subject: 'RVA'},
    {task: "Module 3", isComplete: false, subject: 'DCN'},
    {task: "Flutterflow progress", isComplete: false, subject: 'FREE EL'}
  ])

  const [Tab, setTab] = useState('All')

  function handleAddTask(newTask) {
    const newTaskList = [...todos, {task: newTask, isComplete: false}]
    setTodos(newTaskList)
    console.log(newTaskList)
  }


  return (
    <>
    <Header todos={todos} />
    <Tabs todos={todos} setTodos={setTodos} Tab={Tab} setTab={setTab}/>
    {/* <TaskCard todos={todos}/> */}
    <TaskList todos={todos} Tab={Tab}/>
    <TaskInput handleAddTask={handleAddTask}/>
    </>
  )
}