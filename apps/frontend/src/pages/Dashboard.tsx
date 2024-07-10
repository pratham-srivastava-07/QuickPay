import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export default function Dashboard() {
  return (
    <div className="text-3xl font-bold">
      <Appbar/>
      <div className="mt-10">
        <Balance value={"10,000"}/>
        <Users/>
      </div>
    </div>
  )
}
