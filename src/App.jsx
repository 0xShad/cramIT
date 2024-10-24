import { useState } from "react"
import { Header } from "./assets/components/Header"
import { Tabs } from "./assets/components/Tabs"


export default function App() {
  const [todos, setTodos] = useState([
    {task: "Python Exercise", isComplete: true, subject: 'DSA'},
    {task: "RVA Talent show", isComplete: true, subject: 'RVA'},
    {task: "RVA Reporting", isComplete: false, subject: 'RVA'},
    {task: "DCN Module 3", isComplete: false, subject: 'DCN'},
    {task: "AppDev Flutterflow progress", isComplete: false, subject: 'App Dev'}
  ])

  const [Tab, setTab] = useState('All')

  function handleAddTask(newTask) {
    const newTaskList = [...todos, {newTask: newTask, isComplete: false}]
    setTodos(newTaskList)
  }

  return (
    <>
    <Header todos={todos} />
    <Tabs todos={todos} Tab={Tab} setTab={setTab}/>
    </>
  )
}