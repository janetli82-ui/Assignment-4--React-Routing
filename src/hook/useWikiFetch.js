import {useState, useEffect} from "react"

export const useWikiFetch = (endpoint = "") => {
  const [data, setData] = useState(null)
  const WIKI_API_ENDPOINT  =`${import.meta.env.VITE_WIKI_API_ENDPOINT}${endpoint}`
  const getData = async () => {
    try {
      const response = await fetch(WIKI_API_ENDPOINT);
      const starsData = await response.json();
      setData(starsData)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()
  }, [endpoint])

  return data
};
