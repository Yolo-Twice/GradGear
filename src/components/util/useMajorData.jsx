import { useEffect , useState } from "react";
import axios from 'axios'
export default function useMajorData() {
    const [majorData, setMajorData] = useState([])
    const baseURL = window.location.hostname === "localhost"
  ? "https://gradgearbackend.onrender.com/api/budget"
  : "https://gradgearbackend.onrender.com/api/budget"
  ;
    useEffect(
        () => {
            axios.get( baseURL )
            .then(res => setMajorData(res.data)) 
            .catch(err => console.error('failed to fetch major data:',err)) 
        } , []   
    );
    return majorData
    

}