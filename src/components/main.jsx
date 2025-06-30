import { useState } from "react"
import PickMajorForm from "./main components/pickMajorForm"
import {Cover} from "./ui/cover.jsx"
import { RingLoader } from "react-spinners"

export default function Main() {
    const [getStartedButton,setGetStartedButton] = useState(false)
    const [budgetRange, setBudgetRange] = useState([20000, 80000])
    const [result,setResult] = useState(null)
    const [loading,setLoading] = useState(false)

    function handleGetStarted() {
        setGetStartedButton( prevGetStartedButton => ! prevGetStartedButton)
    }
    
    return (<div className="flex flex-col mx-auto gap-6 mt-[6rem] md:mt-[12REM]">
        <div className="lg:max-w-[100%] mx-auto flex flex-col gap-y-6" >
            <h1 className="font-inter text-white text-center text-4xl md:text-5xl font-bold mx-auto">
                Kickstart college?<br/>Let's get you sorted</h1>
                <h1 className="font-inter text-white text-center text-2xl md:text-3xl font-bold mx-auto">
                <Cover>Powered by Llama AI</Cover></h1>
            <h2 className="font-inter text-white text-center text-lg md:text-xl font-bold mx-auto max-w-[36REM] px-6 md:p-0 ">Simply pick your Major, set your budget, and we’ll recommend a tailored starter kit that actually makes sense. </h2>
        </div>
        <div className="mx-auto mt-16">
        {getStartedButton ? (
            <>
        <PickMajorForm budget={budgetRange} setBudget={setBudgetRange} result={result} setResult={setResult} loading={loading} setLoading={setLoading}/> 
        {/* <button className="bg-white mt-6 w-[16rem] mx-auto" onClick={handleGetStarted}>temporary go back button</button> */}
        </>
        ) : 
        ( 
        <button 
            aria-label="Get Started"
            onClick={handleGetStarted} 
            className="bg-[#25a86c] hover:bg-[#32ba7c] rounded-2xl shadow-lg w-[16rem] mx-auto h-[9vh] text-white font-inter text-center text-3xl font-semibold">Get Started!
        </button>
)}      
        <br className="mb-[6rem]"></br>
        {loading ? <div className="flex justify-center items-center"><RingLoader color="#7289da"/></div> : result && <div className="px-6 mb-40 rendered-content" dangerouslySetInnerHTML={{__html: result }} />}
        </div>
        </div>
    )
}
