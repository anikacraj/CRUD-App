import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { FaEdit } from "react-icons/fa";

export default function TopicList() {
  return (
   <>
   <div className="p-4 border border-slate-300 my-3 
   flex justify-between gap-5 items-start">
   <div>
        <div> <h2 className="font-bold text-2xl">TOPIC TITLE </h2></div>
        <div> <h5>TOPIC DESCRIPTION </h5></div>
    </div>

    <div className="flex gap-3">
        <RemoveBtn />
        <Link href="/editTopic/123"><FaEdit size={24}/> </Link>
    </div>

   </div>
   
   </>
  )
}
