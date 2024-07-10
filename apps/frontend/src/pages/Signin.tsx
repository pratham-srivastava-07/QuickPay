import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"



export default function Signin() {

    function inputBoxFunc(): void {
      throw new Error("Function not implemented.")
    } 
    function buttonEvent(): void {
      throw new Error("Function")
    }
    
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="Email" label={"Email"} onChange={inputBoxFunc} />
        <InputBox placeholder="password" label={"Password"} onChange= {inputBoxFunc}/>
        <div className="pt-4">
          <Button label={"Sign in"} onClick={buttonEvent} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}