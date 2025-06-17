import { useState } from "react"
import PickMajorForm from "./main components/pickMajorForm"
export default function Main() {
    const [getStartedButton,setGetStartedButton] = useState(false)

    function handleGetStarted() {
        setGetStartedButton( prevGetStartedButton => ! prevGetStartedButton)
    }
    return (<>
        <div className="lg:max-w-[70%] mx-auto flex flex-col gap-y-6" >
            <h1 className="font-inter text-white text-center text-5xl font-bold mx-auto">
                Stressing over what gear to get to begin your college life? We've got you covered!
            </h1>
            <h2 className="font-inter text-white text-center text-4xl font-bold mx-auto">Simply pick your Major, set your budget, and we’ll recommend a tailored starter kit that actually makes sense. </h2>
            <h3 className="font-inter text-white text-center text-3xl font-bold mx-auto">No fluff, just the good stuff.</h3>
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
            className="bg-[#25a86c] hover:bg-[#32ba7c] rounded-2xl shadow-lg w-[30%] mx-auto h-[20vh] text-white font-inter text-center text-5xl font-bold">Get Started!
        </button>
)}

            </>
    )
}
