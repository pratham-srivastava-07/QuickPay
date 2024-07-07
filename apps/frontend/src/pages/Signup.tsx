// import React from 'react'

import { useState } from "react"
import { InputBox } from "../components/InputBox"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/Subheading"

export default function Signup() {
  const  [username, setUsername] = useState("")
  const  [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="bg-slate-300 h-screen flex justify-center" >
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setFirstname(e.target.value);
        }} placeholder="firstname" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastname(e.target.value);
        }} placeholder="lastname" label={"Last Name"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="Email" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="password" label={"Password"} />
        </div>
        </div>
    </div>
  )
}
