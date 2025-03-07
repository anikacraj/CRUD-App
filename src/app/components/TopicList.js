import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { FaEdit } from "react-icons/fa";

const getTopics = async () =>{
  try {
    const res =await fetch("http://localhost:3000/api/topics",{
      cache:"no-store"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics :" ,error )
  }
}


export default async function TopicList() {
  const {topics} =await getTopics();
  return (
   <>
  {
    topics.map((t)=>(
      <div className="p-4 border border-slate-300 my-3 
      flex justify-between gap-5 items-start">
      <div>
           <div> <h2 className="font-bold text-2xl">TOPIC TITLE </h2></div>
           <div> <h5>TOPIC DESCRIPTION </h5></div>
       </div>
   
       <div className="flex gap-3">
           <RemoveBtn />
           <Link href="/editTopic/21"><FaEdit size={24}/> </Link>
       </div>
   
      </div>
    ))
  }
   
   </>
  )
}
