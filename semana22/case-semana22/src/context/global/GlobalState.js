import { API_KEY, BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequest"
import GlobalContext from "./GlobalContext"

const GlobalState = ({children}) => {
   
    const [movies, requestMovies] = useRequestData([], `${BASE_URL}${API_KEY}/movie/popular`)


    const states = { movies }

    const setters = { }

    const requests = { requestMovies }
    
    return <GlobalContext.Provider value={{states, requests}}>
        {children}
    </GlobalContext.Provider>
}
export default GlobalState