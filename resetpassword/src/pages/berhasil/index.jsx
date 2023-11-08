import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GoBack from "../../components/Goback";

const Berhasil = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            
            <div className="text-center pt-[125px]">
                <p className="text-[25px] text-opacity-70 font-sans leading-8 pt-[10px] pb-[30px]">Messages has been sent to you via email with instructions on how to <br />
                reset the password. It can takes up to 10 minutes to arrive at your <br />
                inbox, so stay tune!</p>
                <GoBack />
            </div>

            <Footer />
        </div>
    )
}

export default Berhasil