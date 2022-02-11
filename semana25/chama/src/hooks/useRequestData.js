import axios from 'axios'
import { useState, useEffect } from 'react';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        axios.get(url)
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error.response.data)
        })
    }, [url]);

    return data;
}

export default useRequestData;
