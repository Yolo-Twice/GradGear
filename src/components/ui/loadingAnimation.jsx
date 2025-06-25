import { CircleLoader } from "react-spinners";
export default function Loader() {
    return(
        <div className="flex w-[5rem] h-[5rem] items-center justify-center bg-[#171717]">
    <CircleLoader color="#ffffff" />
  </div>
    )
}