import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GoBack from "../../components/Goback";

const BerhasilReset = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar />
            
            <div className="text-center pt-[150px]">
                <p className="text-[25px] text-opacity-70 font-sans leading-8 pt-[10px] pb-[30px]">
                Great! Your new password has been set. </p>
                <GoBack />
            </div>

            <Footer />
        </div>
    )
}

export default BerhasilReset