import React from 'react'
import axios from "axios"
import {useState,useEffect} from "react"
import Navbar from "../Components/Navbar";
import {motion} from "framer-motion"


export const Career = () => {

	const api_url = import.meta.env.VITE_API_URL

	const [isLoading,setIsLoading] = useState(true)
	const [career,setCareer] = useState([])

	useEffect(()=>{
		const fetch = async() =>{
			try{
				const response = await axios.get(`${api_url}/api/careers`)
			setCareer(response.data)
			}
			catch (error){
				console.log(error)
			}
			finally{
				setIsLoading(false)
			}
			
		}
		fetch()
	},[])
  return (

  	<>
  		<Navbar/>
  		{
  			isLoading ? (<p className="animate-upDown text-4xl mt-[6em] flex justify-center items-center text-purple-900">Loading careers...</p>):(<div className="p-12 grid gap-6 grid-cols-4">
  		  		
  		  		{
  		  			career.map((item,index)=>(
  		  				<motion.h1
  		  					initial={{opacity:0,scale:.6}}
  		  					animate={{opacity:1,scale:1}}
  		  					transition={{duration:.4 , easing:"easeIn", delay:.1*index}}
  		  					viewport={{once:true}}
  		  				 className="text-xl ring-1 ring-gray-100 bg-gray-300 rounded-md p-4" key={item.id}>{item.career}</motion.h1>
  		  				))
  		  		}
  		  	</div>)
  		}
    </>
  )

}
export default Career;