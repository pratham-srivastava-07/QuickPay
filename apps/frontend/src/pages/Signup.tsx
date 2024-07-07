// import React from 'react'

import { useState } from "react"

export default function Signup() {
  const  [username, setUsername] = useState("")
  const  [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      Signup Page
    </div>
  )
}
