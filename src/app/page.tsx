
import Navbar from "./components/Navbar";
import OnlineCourse from "./components/onlineCourse/OnlineCourse";

export default function Home()
{
    return (
        <div className="bg-[#F6F6F6] min-h-screen w-full p-0 m-0 box-border">
            <Navbar/>
            <OnlineCourse/>
        </div>
    )
}
