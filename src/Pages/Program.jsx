import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios"
import Navbar from "../Components/Navbar";


const ProgramsByInstitution = () => {

  const api_url = import.meta.env.VITE_API_URL

const [data,setData] = useState([])
const [selectedInstitution, setSelectedInstitution] = useState("")
const [isLoading,setIsLoading] = useState(true)


useEffect(()=>{
  const fetchPrograms = async() =>{
    try{
      const response = await axios.get(`${api_url}/api/institutions/`)
      setData(response.data)
    }
    catch(err){
      console.log(err)
    }
    finally{
      setIsLoading(false)
    }
    
  };

  fetchPrograms();
},[])

  return (
    <section className="">
      <Navbar/>
     
      {
        isLoading?(<p className="animate-upDown text-4xl mt-[6em] flex justify-center items-center text-purple-900">Loading careers...</p>):(
          <div className="p-6">
      <div className="flex items-center justify-center flex-wrap gap-24">
        
        {data.map((inst) => (
          <button
            key={inst.institution_name}
            className={`px-4 py-2 rounded-lg shadow-md transition ${
              selectedInstitution?.institution_name === inst.institution_name
                ? "bg-gray-400 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedInstitution(inst)}
          >
            {inst.institution_name}
          </button>
        ))}
      </div>
       {selectedInstitution && (
        <div className="mt-6">
          <h2 className="text-4xl text-center font-bold mb-3">
            Programs at {selectedInstitution.institution_name}
          </h2>
          <div className="p-12 grid gap-10 grid-cols-4">
            {selectedInstitution.programs.map((program,index) => (
              <motion.h1
                initial={{opacity:0,scale:.6}}
                  animate={{opacity:1,scale:1}}
                  transition={{duration:.4 , easing:"easeIn", delay:.1*index}}
                  viewport={{once:true}}
                key={program.id}
                className="shadow-md text-xl ring-1 ring-gray-100 bg-gray-300 rounded-md p-4 transition"
              >
                {program.course_title}
              </motion.h1>
            ))}
          </div>
        </div>
      )}
      </div>
          )
      }
    </section>
  );
};

export default ProgramsByInstitution;
