"use client";

// import { useState } from "react";
import Link from "next/link";
import Save from "@/app/components/save";
import Load from "@/app/components/load";

const Navbar: React.FC = () => {
    // const [page, setPage] = useState({});

    return (
        <div className="relative z-10 w-full">
            <div className="navbar bg-neutral py-4 fixed top-0 w-full flex justify-between flex-row-reverse items-center">
                <div className="flex">
                    <Save/>
                    <Load/>
                </div>
                <Link href="/" className="text-xl font-bold mx-4 hidden md:block">BMI Calculator</Link>
            </div>
        </div>
    )
};

export default Navbar;
