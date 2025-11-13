import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {

  const initialData = {
    "author": "",
    "title": "",
    "body": "",
    "public": ""
  }

  const [formData, setFormData] = useState(initialData)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}
