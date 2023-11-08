import React from "react";

function ResendEmail() {

  const handleResendEmail = async () => {
        // Tambahkan logika untuk mengirim ulang email verifikasi di sini
  }

  return (
    <div className="flex justify-center">
      <button className="bg-[#2f657e] min-w-[250px] sm:w-[500px] md:w-[500px] lg:w-[165px] h-[45px] 
              text-[13px] font-semibold tracking-wider rounded-3xl text-white hover:text-black" 
      onClick={handleResendEmail}>Resend Email Verification</button>
    </div>
  );
}

export default ResendEmail;