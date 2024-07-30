import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

export default function Hero() {
    const navigate = useNavigate()
   return <div className="flex justify-center">
        <div className="pt-8 max-w-5xl">
            <div className="flex-1 pt-32">
                <div className="text-5xl font-semibold">Welcome to QuickPay</div>
                <div className="flex justify-center pt-4">
                <PrimaryButton onClick={()=>navigate("/signup")}>Sign up</PrimaryButton>
                </div>
            </div>
            <div className="flex-1">
                
            </div>
        </div>
   </div>
}