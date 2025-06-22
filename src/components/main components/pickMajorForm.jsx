import BudgetRangeSlider from "../ui/budgetRangeSlider.jsx";


export default function PickMajorForm(props) {
    return (
        <form  name="PickMajor" className="text-2xl w-[80%] max-w-[50rem] mx-auto p-6 rounded-2xl shadow-lg bg-[#36393e] text-[#7289da] text-center font-bold">
            <h2 className=" mx-auto font-inter text-4xl" >Pick Your Major!</h2>
            <select className="text-xl p-2 mt-4 rounded-2xl bg-[#424549] shadow-lg text-white text-center" name="Major" id="Major">
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
            <div className="flex flex-row items-center gap-x-6 mt-6">
  <p className="w-20 text-right">₹{props.budget[0]}</p>
  <div className="flex-1">
    <BudgetRangeSlider
      value={props.budget}
      onChange={props.setBudget}
      maxValue={100000}
      minValue={5000}
      recommendedValue={50000}
    />
  </div>
  <p className=" w-20 text-left ">₹{props.budget[1]}</p>
</div>

            </form>
    )
}