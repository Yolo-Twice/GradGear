import { useState } from "react";
import BudgetRangeSlider from "../ui/budgetRangeSlider.jsx";
import BudgetData from "../Data/recommendedBudget.js";
import queryModel from "../util/ai.js"

export default function PickMajorForm(props) {
  const [majorChange, setMajorChange] = useState(false)
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [fetchRec,setFetchRec] = useState(false)


  function handleGetRecommendation() {
    setFetchRec(prevFetchRec => !prevFetchRec)
  }

  function handleMajorSelect(e) {
    const majorName = e.target.value;

    if (majorName !== "") {
      const matchedMajor = BudgetData.find(m => m.name === majorName);
      if (matchedMajor) {
        setSelectedMajor(matchedMajor);
        props.setBudget([matchedMajor.minimum, matchedMajor.recommended]);
      }
      setMajorChange(true);
    } else {
      setSelectedMajor(null);
      setMajorChange(false);
    }
  }


async function handleFormSubmit(data) {
  data.preventDefault()
  const form = data.target;
  const formData = new FormData(form);
  
  const major = formData.get("Major")
  const budgetRange = `Between ₹ ${props.budget[0]} and ₹ ${props.budget[1]}`
  const collectedData = [{major:major,budgetRange:budgetRange}]
  const recievedPrompt = await queryModel(collectedData)
  console.log(recievedPrompt)
  props.setResult(recievedPrompt)


}



  return (
    <>
    <form onSubmit={handleFormSubmit} name="PickMajor"  className="flex flex-col bg-[#1f2124] rounded-xl p-12 pt-4 mx-auto">
      <h2 className=" text-4xl mx-auto text-[#c8cacf] text-center font-bold mb-10" >Tell us about yourself!</h2>
      
      <div className="w-[25rem] flex flex-col text-2xl max-w-[50rem] mx-auto p-6 rounded-2xl shadow-lg bg-[#36393e]  text-[#7289da] text-center font-bold">
      <h2 className=" mx-auto font-inter text-3xl" >Pick Your Major!</h2>
      <select className="text-xl p-2 mt-4 rounded-2xl bg-[#424549] shadow-lg text-white text-center" name="Major" id="Major" onChange={handleMajorSelect}>
      
         <option value="" >Select</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Medicine">Medicine</option>
        <option value="Architecture">Architecture</option>
        <option value="Law">Law</option>
        <option value="Design">Design</option>
        <option value="Music">Music</option>
        <option value="Management">Management</option>
        <option value="Fashion">Fashion</option>
        <option value="Dental Science">Dental Science</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Physics">Physics</option>
        <option value="Mathematics">Mathematics</option> 
      </select>
      </div>

      {majorChange &&
      <>
      <div className="w-[25rem] mt-6 flex flex-col text-2xl max-w-[50rem] mx-auto p-6 rounded-2xl shadow-lg bg-[#36393e] text-[#7289da] text-center font-bold">
        <p className="mx-auto font-inter text-3xl">Set your Budget</p>
        <div className="flex flex-row items-center gap-x-6 mt-6">
          <p className="w-20 text-right">₹{props.budget[0]}</p>
          <div className="flex-1">
            <BudgetRangeSlider
              value={props.budget}
              onChange={props.setBudget}
              maxValue={selectedMajor.max}
              minValue={selectedMajor.minimum}
              recommendedValue={selectedMajor.recommended}
            />
          </div>
          <p className=" w-20 text-left ">₹{props.budget[1]}</p>
        </div>
        </div>
        <button 
        aria-label="Get Recommendation"
        type="submit"
        onClick={handleGetRecommendation} 
        className="bg-[#25a86c] hover:bg-[#32ba7c] rounded-2xl shadow-lg w-[12rem] mt-10 mx-auto h-[3rem] text-white font-inter text-center text-2xl font-semibold">SUBMIT
    </button>
    </>
      }
    
    </form>
    </>
  )
}