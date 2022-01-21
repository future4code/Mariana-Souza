import { useEffect, useState } from "react"
import axios from "axios";

const useRequestData = (initialData, url, config = {}) => {
    
    const [data, setData] = useState(initialData)
    
    const request = () => {
        axios.get(url, config)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            alert("Deu ruim", err)
        })
    }

    useEffect(()=>{
        request()
    }, [])

    return[data, request]
}

export default useRequestData