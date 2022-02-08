import { useEffect, useState } from "react"
import axios from "axios";

const useRequestData = (initialData, url) => {
    
    const [data, setData] = useState(initialData)
    
    const request = () => {
        axios.get(url)
        .then((res)=>{
            // console.log(res.data)
            setData(res.data)
        })
        .catch((err)=>{
            alert("Deu ruim", err)
        })
    }

    useEffect(()=>{
        request()
    }, [])

    return[data]
}

export default useRequestData