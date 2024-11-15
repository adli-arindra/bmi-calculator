"use client";

import Link from "next/link";

const Load:React.FC = function () {
    return (
        <>
            <Link href="/api/auth/signin" className="btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300">Load State</Link>
        </>
    );
}

export default Load;