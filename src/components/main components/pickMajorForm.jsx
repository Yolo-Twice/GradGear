import { useState } from "react";
import BudgetRangeSlider from "../ui/budgetRangeSlider.jsx";
import useMajorData from "../util/useMajorData.jsx";
import queryModel from "../util/ai.js";

export default function PickMajorForm(props) {
  const [majorChange, setMajorChange] = useState(false);
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [fetchRec, setFetchRec] = useState(false);
  const majorData = useMajorData();

  function handleGetRecommendation() {
    setFetchRec(prevFetchRec => !prevFetchRec);
  }

  function handleMajorSelect(e) {
    const majorName = e.target.value;

    if (majorName !== "") {
      const matchedMajor = majorData.find(m => m.name === majorName);
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
    data.preventDefault();
    const form = data.target;
    const formData = new FormData(form);
    const major = formData.get("Major");
    const budgetRange = `Between ₹ ${props.budget[0]} and ₹ ${props.budget[1]}`;
    const collectedData = [{ major: major, budgetRange: budgetRange }];
    props.setLoading(true);

    try {
      const receivedPrompt = await queryModel(collectedData);
      console.log(receivedPrompt);
      props.setResult(receivedPrompt);
    } catch (err) {
      console.error(err);
      props.setResult("An error occurred.");
    } finally {
      props.setLoading(false);
    }
  }

  if (majorData.length === 0) {
    return <p className="text-white text-center mt-10">Loading majors...</p>;
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      name="PickMajor"
      className="w-[25rem] md:w-[30rem] flex flex-col bg-[#23262b] rounded-2xl p-2 md:p-12 pt-4 mx-auto text-[#7289da] border border-white/10"
    >
      <h2 className="text-3xl md:text-4xl mx-auto text-[#7289da] text-center font-bold mb-10">
        Tell us about yourself!
      </h2>

      <div className="w-[24rem] md:w-[25rem] flex flex-col text-2xl max-w-[50rem] mx-auto p-6 rounded-2xl shadow-lg border border-white/10 text-center font-bold">
        <h2 className="mx-auto font-inter text-2xl text-[#7289da] md:text-3xl">Pick Your Major</h2>
        <select
          className="text-xl p-2 mt-4 rounded-xl bg-[#23262b] border border-white/10 shadow-lg text-[#e4e7eb] text-center"
          name="Major"
          id="Major"
          onChange={handleMajorSelect}
        >
          <option value="">Select</option>
          {majorData.map((major, index) => (
            <option key={index} value={major.name}>
              {major.name}
            </option>
          ))}
        </select>
      </div>

      {majorChange && (
        <>
          <div className="w-[24rem] md:w-[25rem] mt-6 flex flex-col text-2xl max-w-[50rem] mx-auto p-6 rounded-2xl shadow-lg bg-[#23262b] border border-white/10 text-center font-bold">
            <p className="mx-auto font-inter text-3xl">Set your Budget</p>
            <div className="flex flex-row items-center gap-x-6 mt-6 text-[#e4e7eb]">
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
              <p className="w-20 text-left">₹{props.budget[1]}</p>
            </div>
          </div>
          <button
            aria-label="Get Recommendation"
            type="submit"
            onClick={handleGetRecommendation}
            className=" bg-[#7289da] hover:bg-[#53639f] rounded-xl shadow-lg w-[12rem] mt-10 mx-auto h-[3rem] text-white font-inter text-center text-2xl font-semibold"
          >
            SUBMIT
          </button>
        </>
      )}
    </form>
  );
}
