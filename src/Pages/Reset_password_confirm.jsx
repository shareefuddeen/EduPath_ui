import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

export const ResetPasswordConfirm = () => {
  const navigate = useNavigate()
  const api_url = import.meta.env.VITE_API_URL
  const { uidb64, token } = useParams()

  const [data, setData] = useState({
    new_password1: "",
    new_password2: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
    console.log({
  uid: uidb64,
  token: token,
  new_password1: data.new_password1,
  new_password2: data.new_password2,
})

  const postData = async () => {
    try {
      const response = await axios.post(
        `${api_url}/api/auth/password/reset/confirm/`,
        {
          uid: uidb64,   
          token: token,
          new_password1: data.new_password1,
          new_password2: data.new_password2,
        }
      )


      alert("Password reset successful! You can now login.")
      navigate("/login")
    } catch (err) {
      console.log("Error response:", err.response?.data)
alert("Failed to reset password: " + JSON.stringify(err.response?.data, null, 2))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postData()
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 shadow-md hover:shadow-lg transition duration-300 rounded-md w-[32em] p-12 bg-gray-100"
      >
        <h2 className="text-xl text-center text-purple-700">
          Reset password confirm
        </h2>

        <div className="flex flex-col">
          <label
            className="w-full text-md text-purple-700"
            htmlFor="new_password1"
          >
            Password
          </label>
          <input
            type="password"
            onChange={handleChange}
            value={data.new_password1}
            name="new_password1"
            placeholder="Enter your new password"
            className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700 transition duration-300 "
          />
        </div>

        <div className="flex flex-col">
          <label
            className="w-full text-md text-purple-700"
            htmlFor="new_password2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            onChange={handleChange}
            value={data.new_password2}
            name="new_password2"
            placeholder="Confirm new password"
            className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-700 transition duration-300 "
          />
        </div>

        <button className="mt-4 w-full bg-purple-700 py-2 rounded-md text-white hover:bg-purple-600 text-lg">
          Reset
        </button>
      </form>
    </section>
  )
}

export default ResetPasswordConfirm
