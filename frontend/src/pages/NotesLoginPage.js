import React from 'react'
import {button} from 'react-router-dom'

const NotesLoginPage = () => {
  const [formData, setFormData] = React.useState(
    {firstname: "", lastname: ""}
  )
  function handleChange(event){
    setFormData(prevData=>{
      return{
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  let handleSubmit = async() => {
    fetch(`/api/login/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    console.log(formData)
  }
  let view = async () =>{
    let response = await fetch(`/api/view/`)
    let data = await response.json()
    setFormData(data)
    console.log(data)
  }
  return (
    <div>
        <form>
            <input type="email" placeholder="Email" onChange={handleChange} name="firstname"></input>
            <input type="password" placeholder="Password" onChange={handleChange} name="lastname"></input>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form> 
        <button onClick={view}>Show</button>
    </div>
  )
}

export default NotesLoginPage