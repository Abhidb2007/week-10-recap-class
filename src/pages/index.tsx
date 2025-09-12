import Image from "next/image";
import{Abhaya_Libre, Inter} from "next/font/google"
import {VideoCard} from "../components/VideoCard"
const inter=Inter({subsets:["latin"]})
export default function Home(){
  return(
    <div>
  
      <VideoCard
      title={"how to learn in coding|code with me"}
      author={"Abhay"}
      views={"12m"}
      image={"photo.jpg"}
      timestamp={"2days to go"}
      ></VideoCard>
    </div>
  )
}