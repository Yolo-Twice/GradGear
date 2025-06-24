import Header from "./components/header.jsx"
import Main from "./components/main.jsx"
import Footer from "./footer.jsx"
import { CircleLoader } from "react-spinners"
export default function App(){
  return (
    <div className="flex flex-col gap-y-5">
    <Header />
    <Main />
    {/* <div className="flex items-center justify-center min-h-screen bg-gray-900">
      
      <CircleLoader color="#36D7B7" loading={true} size={150} />
    </div> */}
 
      


    <Footer />
    
  </div>
  )
}
