"use client";

// import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const buttonStyle = "btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300";
    // const [page, setPage] = useState({});

    return (
        <>
            <div className="navbar bg-neutral fixed top-0 flex justify-between items-center">
                <h1 className="text-xl font-bold mx-4">BMI Calculator</h1>
                <div className="flex">
                    <Link className={buttonStyle} href="" >Virtual Lab</Link>
                    <Link className={buttonStyle} href="">Save State</Link>
                    <Link className={buttonStyle} href="">Load State</Link>
                
                </div>
            </div>
        </>
    )
};

export default Navbar;
