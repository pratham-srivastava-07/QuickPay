import { useState } from "react"
import { InputBox } from "../components/InputBox"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/Subheading"
import axios from "axios"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const  [username, setUsername] = useState("")
  const  [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
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
        <div className="pt-4">
          <Button
          label={"Sign up"} 
          onClick={async()=> 
          {
            const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
          localStorage.setItem("token", res.data.token)
          navigate("/dashboard")
          }
        }>
          </Button>
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div> 
        
    </div>
  )
}
