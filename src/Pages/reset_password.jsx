import React,{useState} from 'react'
import axios from "axios"
import {useNavigate}  from 'react-router-dom'

export const ResetPassword = () => {

  const navigate = useNavigate()

  const api_url = import.meta.env.VITE_API_URL

  const [data,setData] = useState({
      email:""
    })

  const handleChange = (e) => {
    const {name,value} = e.target
        setData((prev)=>({
           ...data,
        [name]:value,
        }))
  }

console.log(data)

  const postData = async() =>{
      try{
        const response = await axios.post(`${api_url}/api/auth/password/reset/`,data)
        alert(response.data.detail)
      }
      catch(err){
        console.log(err.response?.data||message)
      }
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      postData();
  }

  return (
    <section className="h-screen flex justify-center items-center">
    	<form method="post" onSubmit={handleSubmit} className="flex shadow-md hover:shadow-lg transition duration-300 flex-col rounded-md w-[32em] p-12 bg-gray-100">
    		<h2 className="text-xl text-center text-purple-700">Reset password confirm</h2>
        <label className="w-full text-md text-purple-700" htmlFor="email">Email</label>
    		<input type="email" onChange={handleChange} value={data.email} name="email" placeholder="Enter email" className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700 transition duration-300 "/> 
    	 <button className="mt-4 w-full bg-purple-700 py-2 rounded-md text-white hover:bg-purple-600 text-lg">Reset</button>
      </form>
    </section>
  )
}

export default ResetPassword;