import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function App() {
  const [userDetails, updateUserDetails] = useState({})
  const navigate = useNavigate()

  function captureData(event) {
    const name = event.target.name
    const value = event.target.value
    updateUserDetails(previousStateValue => ({
      ...previousStateValue,
      [name]: value,
    }))
  }
  function changeButton() {
      if (userDetails.username === 'chxy' && userDetails.password === '1234') {
        navigate('./help')
      } else {
        alert("wrong credentials")
      }
    console.log(userDetails, 'userDetails')
  }

  return (
    <>
      <input name="username" type="text" onChange={captureData} />
      <input name="password" type="text" onChange={captureData} />
      <button class="btn btn-secondary" onClick={changeButton}>
        Log in
      </button>
    </>
  )
}
export default App
