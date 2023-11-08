import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GoBack from "../../components/Goback";

const Gagal = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            
            <div className="text-center pt-[150px]">
                <p className="text-[25px] text-opacity-70 font-sans leading-8 pt-[10px] pb-[30px]">
                    Sorry, your account is not found. Please try again. </p>
                <GoBack />
            </div>

            <Footer />
        </div>
    )
}

export default Gagal