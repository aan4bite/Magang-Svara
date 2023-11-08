import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const TeksReset = () => {

    return (
      <div className="flex flex-col min-h-screen justify-between"> 
        <Navbar />
        <div className="flex flex-col p-[15px] items-center">
          <div className="min-w-[125px] sm:w-[500px] md:w-[500px] lg:w-[675px] text-center pt-[125px]">
            <h1 className="text-[36px] font-normal"> <b>Reset Password</b> </h1> 
            <p className=" text-lg pt-[10px] pb-[30px]"> Enter <b>your username</b>, or <b>the email address</b> you used to register. 
            We will email you a username and a link to reset the password to you.</p>
          </div>
        
          <form className="" action="reset-password" method="post">
            <div className="flex flex-col pb-[20px]">
              <label className="text-sm py-3"> <b>Email or Username</b> </label>
              <input className="min-w-[125px] sm:w-[500px] md:w-[500px] lg:w-[550px] h-10 text-black border-2 border-black mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
              focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1" type="text" name="email" id="username"></input>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#2f657e] min-w-[125px] sm:w-[500px] md:w-[500px] lg:w-[165px] h-[45px] 
              text-[13px] font-semibold tracking-wider rounded-3xl text-white hover:text-black" 
              type="submit">
              SEND</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
}
 export default TeksReset;
