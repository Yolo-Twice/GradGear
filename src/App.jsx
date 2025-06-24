import Header from "./components/header.jsx"
import Main from "./components/main.jsx"
import Footer from "./footer.jsx"
export default function App(){
  return (
    <div className="flex flex-col gap-y-5">
    <Header />
    <Main />
    <Footer />
  </div>
  )
}
