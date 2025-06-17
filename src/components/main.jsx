import { useState } from "react"
import PickMajorForm from "./main components/pickMajorForm"
import {Cover} from "./ui/cover.jsx"



export default function Main() {
    const [getStartedButton,setGetStartedButton] = useState(false)

    function handleGetStarted() {
        setGetStartedButton( prevGetStartedButton => ! prevGetStartedButton)
    }
    return (<div className="flex flex-col mx-auto gap-10 mt-36">
        <div className="lg:max-w-[70%] mx-auto flex flex-col gap-y-6" >
            <h1 className="font-inter text-white text-center text-5xl font-bold mx-auto">
                Something Something Something Something Something Something</h1>
                <h1 className="font-inter text-white text-center text-3xl font-bold mx-auto">
                <Cover>Powered by AI</Cover></h1>
            <h2 className="font-inter text-white text-center text-xl font-bold mx-auto max-w-[36REM]">Simply pick your Major, set your budget, and we’ll recommend a tailored starter kit that actually makes sense. </h2>
            
        </div>
        
        {getStartedButton ? (
            <>
        <PickMajorForm /> 
        <button className="bg-white w-[10%] mx-auto" onClick={handleGetStarted}>temporary go back button</button>
        </>
        ) : 
        (
        <button 
            aria-label="Get Started"
            onClick={handleGetStarted} 
            className="bg-[#25a86c] hover:bg-[#32ba7c] rounded-2xl shadow-lg w-[30%] mt-10 mx-auto h-[8vh] text-white font-inter text-center text-3xl font-semibold">Get Started!
        </button>
)}

            </div>
    )
}
