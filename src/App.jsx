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

  const [tabs, setTabs] = useState(['All', 'Done', 'FREE EL', 'OS', 'PROG', 'DCN', 'DSA', 'PE', 'RVA', 'UTS'])

  const [Tab, setTab] = useState('All')

  function handleAddTask(newTask, selectedTab) {
    const newTaskList = [...todos, {task: newTask, isComplete: false, subject: selectedTab}]
    setTodos(newTaskList)
  
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