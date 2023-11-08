import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ResetPassword = () => {
    const[password,setPassword]                             = useState('');
    const[errorPassword,setErrorPassword]                   = useState('');
    const[confirmPassword,setConfirmPassword]               = useState('');
    const[errorConfirmPassword,setErrorConfirmPassword]     = useState('');

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        if(!value) {
          setErrorPassword('Password cannot be empty!')
        } else {
          setErrorPassword('')
        }
    }

    const changeConfirmPassword = (e) => {
      const value = e.target.value
      setConfirmPassword(value)
      if(!value) {
        setErrorConfirmPassword('Repeat password cannot be empty!')
      } else if (password !== value) {
        setErrorConfirmPassword('Password are not the same!')
      } else {
        setErrorConfirmPassword('')
      }
    }
  

    return (
      <div className="flex flex-col min-h-screen justify-between"> 
        <Navbar />
        <div className="flex flex-col items-center">
          <div className="text-center pt-[125px]">
            <h1 className="text-[36px] font-normal"> <b>Password Reset</b> </h1> 
          </div>
        
          <form className="" action="set-password" method="post">
            <div className="flex flex-col pb-[20px]">
              <label className="text-sm py-3"> <b>New Password</b> </label>
              <input className="min-w-[250px] sm:w-[500px] md:w-[500px] lg:w-[550px] h-10 text-black border-2 border-black mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
              focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1 form-control" placeholder="Input new password" value={password} onChange={changePassword} type="password" name="email" id="username"></input>
                {
                  errorPassword && (
                    <p className="text-danger">{errorPassword}</p>
                  )
                }
              
              <label className="text-sm py-3"> <b>Repeat New Password</b> </label>
              <input className="min-w-[250px] sm:w-[500px] md:w-[500px] lg:w-[550px] h-10 text-black border-2 border-black mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
              focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1 form-control" placeholder="Repeat password" value={confirmPassword} onChange={changeConfirmPassword} type="password" name="email" id="username"></input>
                {
                  errorConfirmPassword && (
                    <p className="text-danger">{errorConfirmPassword}</p>
                  )
                }
              
            </div>
            <div className="flex justify-center">
              <button className="bg-[#2f657e] min-w-[250px] sm:w-[500px] md:w-[500px] lg:w-[165px] h-[45px] 
              text-[13px] font-semibold tracking-wider rounded-3xl text-white hover:text-black"
               type="submit">S E N D</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
}

export default ResetPassword;