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
    "public": true
  }
  const [formData, setFormData] = useState(initialData)

  function handleFormData(e) {
    // console.log(e);
    const { name, value, type, checked } = e.target

    const valueEdited = type === "checkbox" ? checked : value

    setFormData({ ...formData, [name]: valueEdited })
    console.log(formData);

  }


  return (
    <>
      <Header />
      <Main handleFormData={handleFormData} formData={formData} />
    </>
  )
}
