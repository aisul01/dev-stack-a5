import Logo from "../assets/logo-text.png";
import Hamburger from "../assets/hamburger.png";
import { useState } from "react";
const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav >

            <div className="relative mx-auto flex h-14.5 max-w-250 items-center justify-between px-4 md:px-6">

               {/* for small devices and mobile veiws with hamburger menu icone*/}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img
                        src={Hamburger} alt="Open menu" className="h-5 w-5" />
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <img src={Logo} alt="Dev Stack" className="h-7 w-auto" />
                </div>

                <div className="hidden md:flex">
                    <ul className="flex items-center gap-6">

                        <li><a href="#Home"className="text-xs text-pink-500"> Home </a></li>

                        <li><a href="#Technologies"className="text-xs text-slate-600 hover:text-pink-500">Technologies</a></li>

                        <li><a href="#Project" className="text-xs text-slate-600 hover:text-pink-500">Project</a></li>

                        <li><a href="#About" className="text-xs text-slate-600 hover:text-pink-500">About</a></li>

                        <li><a href="#Contact"className="text-xs text-slate-600 hover:text-pink-500">Contact</a></li>

                    </ul>
                </div>

                <div className="flex items-center gap-2 md:gap-4">

                    <button className="text-xs text-slate-700 hover:text-pink-500"> Sign In </button>

                    <button className="rounded-full bg-pink-500 px-4 py-2 text-xs font-medium text-white hover:bg-pink-600"> Sign Up </button>

                </div>

            </div>

            {isOpen && (
                <div className="border-t border-gray-100 bg-white md:hidden">

                    <ul className="flex flex-col items-center gap-4 py-4">

                        <li><a href="#Home" className="text-sm text-pink-500"> Home </a></li>

                        <li><a href="#Technologies" className="text-sm text-slate-600"> Technologies </a></li>

                        <li> <a href="#Project" className="text-sm text-slate-600"> Project </a></li>

                        <li> <a href="#About" className="text-sm text-slate-600"> About </a> </li>

                        <li> <a href="#Contact" className="text-sm text-slate-600"> Contact </a> </li> </ul>
                </div>
            )}

        </nav>
    );
};

export default Nav;

