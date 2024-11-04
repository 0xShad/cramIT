import { useState } from "react"
import { Header } from "./assets/components/Header"
import { Tabs } from "./assets/components/Tabs"
import { TaskCard } from "./assets/components/TaskCard"
import { TaskList } from "./assets/components/TaskList"
import { TaskInput } from "./assets/components/TaskInput"
import SideBar from "./assets/components/SideBar"
import { useEffect } from "react"


export default function App() {
  const [todos, setTodos] = useState([
    {task: "Python Exercise", isComplete: false, subject: 'DSA', dueDate: "2024-11-08T23:59"},
    {task: "Talent show", isComplete: false, subject: 'UTS', dueDate: "2024-10-25T13:19"},
    {task: "FREE EL Wireframe", isComplete: false, subject: 'UTS', dueDate: "2024-10-25T13:19"},
    {task: "Reporting", isComplete: false, subject: 'RVA', dueDate: "2024-10-27T23:59"},
    {task: "Module 3", isComplete: false, subject: 'DCN', dueDate: "2024-10-29T23:59"},
    {task: "FREE EL Midterms", isComplete: false, subject: 'FREE EL', dueDate: "2024-11-08T23:59"},
    {task: "Flutterflow progress", isComplete: false, subject: 'FREE EL', dueDate: "2024-11-11T23:59"},
    {task: "UTS Quiz", isComplete: false, subject: 'UTS', dueDate: "2024-10-29T23:59"}
  ])

  const [tabs, setTabs] = useState(['All', 'Done', 'FREE EL', 'OS', 'PROG', 'DCN', 'DSA', 'PE', 'RVA', 'UTS'])

  const [Tab, setTab] = useState('All')

  const [sideBar, setSideBar] = useState(true)

  function handleAddTask(newTask, selectedTab, dueDate) {
    const newTaskList = [...todos, {task: newTask, isComplete: false, subject: selectedTab, dueDate: dueDate}]
    setTodos(newTaskList)
    saveToStorage(newTaskList, tabs)
   
  }

  function handleDeleteTask(taskIndex) {
    const newList = todos.filter((_, index) => index !== taskIndex);
    setTodos(newList);
    saveToStorage(newList, tabs)
  }

  function handleDoneTask(taskIndex) {
    const doneTaskList = todos.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, isComplete: true}
      }

      return task
    })
    setTodos(doneTaskList)
    saveToStorage(doneTaskList, tabs)

  }

  function saveToStorage(latestTask, latestTab) {
    localStorage.setItem('tasks', JSON.stringify(latestTask))
    localStorage.setItem('tabs', JSON.stringify(latestTab))
  }

  function hideSideBar() {
    setSideBar(!sideBar)
  }


  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    const savedTabs = JSON.parse(localStorage.getItem('tabs'));
    if (savedTasks) {
      setTodos(savedTasks);
    }

    if (savedTabs) {
      setTabs(savedTabs)
    }
  }, []);

  return (
    <div className="flex gap-12">
      {
        sideBar && <SideBar hideSideBar={hideSideBar}/>
      }
     
      <div className="main w-full">
      <Header todos={todos} sideBar={sideBar} hideSideBar={hideSideBar}/>
      <Tabs todos={todos} setTodos={setTodos} Tab={Tab} setTab={setTab} tabs={tabs} setTabs={setTabs} saveToStorage={saveToStorage}/>
      {/* <TaskCard todos={todos}/> */}
      <TaskList todos={todos} Tab={Tab} handleDeleteTask={handleDeleteTask}  handleDoneTask={handleDoneTask}/>
      <TaskInput handleAddTask={handleAddTask} tabs={tabs} setTabs={setTabs}/>
      </div>
    </div>
  )
}