import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#222]">
        <div className="text-white text-opacity-30 text-[12px] text-center pt-[15px] hidden md:block">
            <p className="">© {new Date().getFullYear()} Svara. All Rights Reserved.</p>
            <ul className="flex justify-center">
            <li className="hover:text-yellow-500 m-[5px] p-[5px]"><a href="#">Privacy</a></li>
            <li className="hover:text-yellow-500 m-[5px] p-[5px]"><a href="#">Terms</a></li>
            <li className="hover:text-yellow-500 m-[5px] p-[5px]"><a href="#">FAQ</a></li>
            </ul>
        </div>
        </footer>
    )
}
 export default Footer;

 