import Link from "next/link";
import AuthButton from "@/app/components/authButton.server";

const Navbar: React.FC = async () => {
    return (
        <div className="relative z-10 w-full">
            <div className="navbar bg-neutral py-4 fixed top-0 w-full flex justify-between flex-row-reverse items-center">
                <div className="flex">
                    <AuthButton/>
                </div>
                <Link href="/" className="text-xl font-bold mx-4 hidden md:block">BMI Calculator</Link>
            </div>
        </div>
    )
};

export default Navbar;
