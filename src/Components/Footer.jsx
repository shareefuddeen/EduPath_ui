import React from 'react'
import {Link} from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="relative min-h-[60vh] p-12 overflow-x-hidden flex justify-center items-center">
      <div className="w-[90%] h-[1px] bg-gray-400 absolute top-6 "></div>
      <div className="grid lg:grid-cols-4 gap-16">
          <div className="w-full overflow-x-hidden gap-[2em] flex flex-col md:justify-center md:items-center col-span-2 h-full">
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-col lg:gap-2 md:gap-11 justify-center items-center gap-2">
              <p className="text-2xl max-w-[26ch]">Made with <span className="text-purple-900 font-bold">passion</span> in Ghana 🇬🇭.</p>
              <h1 className="text-2xl max-w-[16ch]">Guiding your future</h1>
              <Link className="px-3 hover:bg-gray-50 hover:text-black py-2 md:h-10 md:w-auto bg-black rounded text-white w-auto" to="">Learn more</Link>
            </div>
            <div className="mx-auto">
              <p>&copy; {new Date().getFullYear()} EduPath. All rights reserved </p>
            </div>
          </div>
          <div className="grid col-span-2 grid-cols-3 gap-[8em]">
          <div className="w-full h-full">
            <h2 className="text-2xl">Navigation</h2>
            <ul className="flex flex-col gap-4 mt-4">
              <li ><Link to="/" className="text-xl text-gray-400 hover:text-black transition">
                Home
              </Link></li>
              <li><Link to="/program" className="text-xl text-gray-400 hover:text-black transition">
                Institutions
              </Link></li>
              <li><Link to="/careers" className="text-xl text-gray-400 hover:text-black transition">
                Careers
              </Link></li>
              <li><Link to="/program" className="text-xl text-gray-400 hover:text-black transition">
                Courses
              </Link></li>
            </ul>
          </div>
          <div className="w-full h-full">
            <h1 className="text-2xl">Follow Us</h1>
            <ul className="flex flex-col gap-4 mt-4">
              <li><Link className="text-xl text-gray-400 hover:text-black transition">
                LinkedIn
              </Link></li>
              <li><Link className="text-xl text-gray-400 hover:text-black transition">
                Instagram
              </Link></li>
              <li><Link className="text-xl text-gray-400 hover:text-black transition">
                Facebook
              </Link></li>
              <li><Link className="text-xl text-gray-400 hover:text-black transition">
                Twitter
              </Link></li>
            </ul>
          </div>

          <div className="w-full h-full">
            <h1 className="text-2xl">Legal</h1>
            <ul className="flex flex-col gap-4 mt-4">
              <li><Link className="text-xl text-gray-400 hover:text-black transition">
                  Terms & Conditions
              </Link></li>
              <li><Link className="text-xl text-gray-400 hover:text-black transition">
                  Privacy Policy
              </Link></li>
            </ul>
          </div>
          </div>
          
      </div>
    </footer>
  )
}
export default Footer;