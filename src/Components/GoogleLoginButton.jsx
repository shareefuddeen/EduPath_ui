import { GoogleLogin } from "@react-oauth/google";
import axiosInstance from "../axiosInstance"; // your axios setup

export default function GoogleLoginButton() {
    const api_url = import.meta.env.VITE_API_URL

  const handleSuccess = async (credentialResponse) => {
    try {
      const id_token = credentialResponse.credential;

      // Send token to backend for verification
      const res = await axiosInstance.post(`${api_url}/api/auth/google/`, { id_token });

      // Store tokens
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Login successful!");
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleLogin
  onSuccess={handleSuccess}
  onError={() => console.log("Login Failed")}
  useOneTap={false}
  ux_mode="popup"
/>

    </div>
  );
}
