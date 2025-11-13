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
  const [message, setMessage] = useState({})


  function handleFormData(e) {
    // console.log(e);
    const { name, value, type, checked } = e.target
    const valueEdited = type === "checkbox" ? checked : value
    setFormData({ ...formData, [name]: valueEdited })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    axios.post(endpoint, formData)
      .then(res => setMessage({ text: `L'invio dei dati è andato a buon fine! Status: ${res.request.status}`, type: "response" }))
      .catch(err => setMessage({ text: `L'invio dei dati non è andato a buon fine. Status: ${err.status}`, type: "error" }))
    setFormData(initialData)
  }

  return (
    <>
      <Header />
      <Main handleFormData={handleFormData} formData={formData} handleSubmit={handleSubmit} message={message} />
    </>
  )
}
