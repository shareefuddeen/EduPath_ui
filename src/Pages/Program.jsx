import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios"
import Navbar from "../Components/Navbar";
import logo from "../Images/5920-removebg-preview.webp"
import location from "../Icons/side-view-hand-holding-smartphone-removebg-preview.png"

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
      console.log(response.data)
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
    <section className="overflow-hidden">
      <Navbar/>
     
      {
        isLoading?(<img src={logo} className="w-12 h-12 animate-upDown mx-auto mt-[12em] flex justify-center items-center"/>):(
          <div className="p-6">
      <div className="flex items-center justify-center flex-wrap gap-24">
        
        {data.map((inst) => (
          
           < button
            key={inst.institution_name}
            className={`px-4 py-2 rounded-lg shadow-md transition flex justify-center items-center gap-2 ${
              selectedInstitution?.institution_name === inst.institution_name
                ? "bg-gray-400 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedInstitution(inst)}
          >
            
            {inst.institution_name}
          </button>
          
        ))}
        <div className="h-[1px] w-full bg-gray-400"></div>
      </div>
       {selectedInstitution && (
        <div className="p-12 flex flex-col gap-4 justify-center ">
          <img src={selectedInstitution.institution_logo} className="w-[12em] h-[12em]  mx-auto" alt="institution logo"/>
          <div className="flex flex-col gap-6">
              <motion.h1
                initial={{opacity:0,y:-6}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:.6, easing:"easeIn"}}
                viewport={{once:true}}
               className="text-4xl text-center tracking-tight leading-normal"><a href={selectedInstitution.institution_website}>{selectedInstitution.institution_description}</a></motion.h1>
              <motion.p
                initial={{opacity:0,y:6}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:.6,delay:.4, easing:"easeIn"}}
                viewport={{once:true}}
               className="text-xl max-w-[66ch] font-serif text-center mx-auto leading-normal">{selectedInstitution.institution_body}</motion.p>
          </div>
          <div className="w-full mt-6 bg-gray-400"></div>
          <div className="w-full h-[400px] flex rounded">
              <motion.iframe
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:.6,delay:.4, easing:"easeIn"}}
                viewport={{once:true}}
                src={selectedInstitution.location}
                width="60%"
                height="100%"
                style={{ border: 1 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={selectedInstitution.institution_name}
              ></motion.iframe>
                <div className=" p-12">
                  <h1 className="text-center text-4xl mx-auto">Location</h1>
                  <img src={location} alt="location image" className="absolute right-0"/>
                </div>
          </div>
          <h2 className="text-4xl text-center mt-12">
            Programs at {selectedInstitution.institution_name}
          </h2>
          <div className="p-12 grid gap-10 grid-cols-4">
            {selectedInstitution.programs.map((program,index) => (
              <div key={program.id}>
                <h1>{program.institution_body}</h1>
              <motion.h1
                initial={{opacity:0,scale:.6}}
                  whileInView={{opacity:1,scale:1}}
                  transition={{duration:.4 , easing:"easeIn", delay:.1*index}}
                  viewport={{once:true}}
                
                className="shadow-md text-xl ring-1 ring-gray-400 rounded-md p-4 transition"
              >
                {program.course_title}
              </motion.h1>
              </div>
              
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
