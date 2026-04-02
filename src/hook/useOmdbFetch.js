import {useState, useEffect} from "react"
 
export const useOmdbFetch = (endpoint, year) => {
   const [data, setData] = useState(null)
   const OMD_API_ENDPOINT = `${import.meta.env.VITE_OMD_API_ENDPOINT}?apikey=${import.meta.env.VITE_OMD_API_KEY}&t=${endpoint}&y=${year}`
   const getData = async () => {
     try {
       const response = await fetch(OMD_API_ENDPOINT);
       const moviesData = await response.json();
       setData(moviesData)
     } catch (error) {
       console.log(error);
     }
   }
 
   useEffect(()=>{
     getData()
   }, [endpoint, year])
 
   return data
 };
 