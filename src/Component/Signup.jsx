import { LoaderCircle, LockKeyhole, Mail, User } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate()
  const [loading,setLoading]=useState(false)

    const handleLogin=(e)=>{
        
    }
  return (
    <div className="h-screen bg-[#F8F1E7] flex justify-center items-center ">
      <div className="w-[350px] bg-[#1C1C1C] text-white py-12 px-8 rounded-md sm:rounded-2xl ">
        <div>
          <h1 className="text-4xl text-center mb-10">Signup</h1>
        </div>
        <div>
          <form action="">
            <div className="mb-8">
              <label className="flex items-center text-xs font-medium text-white uppercase tracking-wider mb-2">
                <User className="w-3.5 h-3.5 mr-1.5 " />
                USERNAME
              </label>
              <input
                type="text"
                className="py-2 px-5 border text-white border-white w-full outline-none rounded-full focus:bg-[#F8F1E7] focus:text-black"
              />
            </div>

            <div className="mb-8">
              <label className="flex items-center text-xs font-medium text-white uppercase tracking-wider mb-2">
                <Mail className="w-3.5 h-3.5 mr-1.5 " />
                Email
              </label>
              <input
                type="email"
                className="py-2 px-5 border text-white border-white w-full outline-none rounded-full focus:bg-[#F8F1E7] focus:text-black"
              />
            </div>
            <div className="mb-8">
              <label className="flex items-center text-xs font-medium text-white uppercase tracking-wider mb-2">
                <LockKeyhole className="w-3.5 h-3.5 mr-1.5 " />
                PASSWORD
              </label>
              <input
                type="password"
                className="py-2 px-5 border text-white border-white w-full outline-none rounded-full focus:bg-[#F8F1E7] focus:text-black"
              />
            </div>
            <div>
            <button type='button' className="bg-white text-black w-full py-2 rounded-full font-semibold text-lg flex items-center justify-center gap-2" onClick={handleLogin}>
                {
                    !loading?"Signup":
                    <>
                    <LoaderCircle className="animate-spin h-6 w-6 font-bold" />
                    Signing...
                    </>
                }
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <p className="text-center">
            Already have an Account? <span className="text-blue-500" onClick={()=>navigate('/login')}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup