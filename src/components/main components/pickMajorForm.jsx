export default function PickMajorForm() {
    return (
        <form  name="PickMajor" className="text-2xl w-[60%] max-w-[42rem] mx-auto p-6 rounded-2xl shadow-lg bg-[#36393e] text-[#7289da] text-center font-bold">
            <h2 className=" mx-auto font-inter text-4xl" >Pick Your Major!</h2>
            <select className="text-xl p-2 mt-4 rounded-2xl bg-[#424549] shadow-lg text-white text-center" name="Major" id="Major">
                <option value="" >Select</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Medicine">Medicine</option>
                <option value="Architecture">Architecture</option>
                <option value="Law">Law</option>
                <option value="Design">Design</option>
                <option value="Music">Music</option>
            </select>
            </form>
    )
}