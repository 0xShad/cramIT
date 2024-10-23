import { useState } from "react"
import { Header } from "./assets/components/Header"
import { Tabs } from "./assets/components/Tabs"

export default function App() {
  const todos = [
    {task: "Python Exercise", isComplete: false, subject: 'DSA'},
    {task: "RVA Talent show", isComplete: true, subject: 'RVA'},
    {task: "RVA Reporting", isComplete: false, subject: 'RVA'},
    {task: "DCN Module 3", isComplete: false, subject: 'DCN'}
  ]

  const [Tab, setTab] = useState('All')

  return (
    <>
    <Header todos={todos} />
    <Tabs todos={todos} Tab={Tab} setTab={setTab}/>
    </>
  )
}