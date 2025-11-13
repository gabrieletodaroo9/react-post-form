import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {

  const endpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

  const initialData = {
    "author": "",
    "title": "",
    "body": "",
    "public": true
  }
  const [formData, setFormData] = useState(initialData)

  function handleFormData(e) {
    // console.log(e);
    const { name, value, type, checked } = e.target
    const valueEdited = type === "checkbox" ? checked : value
    setFormData({ ...formData, [name]: valueEdited })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <Header />
      <Main handleFormData={handleFormData} formData={formData} handleSubmit={handleSubmit} />
    </>
  )
}
