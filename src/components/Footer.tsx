import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-[1000px] px-6 py-6">

                {/* hero footer */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

                    <div className="md:col-span-2">
                        <img src={Logo}alt="Dev Stack"className="h-7 w-auto"/>

                        <p className="mt-4 max-w-[330px] text-xs leading-5 text-slate-400">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* social link add kore */}
                        <div className="mt-5 flex gap-5 text-xs text-slate-600">
                            <a href="#" className="hover:text-pink-500">GitHub</a>
                            <a href="#" className="hover:text-pink-500">Twitter</a>
                            <a href="#" className="hover:text-pink-500">LinkedIn</a>
                        </div>
                    </div>


                    {/* products er jonno */}
                    <div>
                        <h3 className="text-[10px] font-bold uppercase text-slate-900">Product</h3>

                        <ul className="mt-4 space-y-3 text-xs text-slate-400">
                            <li><a href="#" className="hover:text-pink-500">Home</a></li>
                            <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
                            <li><a href="#" className="hover:text-pink-500">Projects</a></li>
                        </ul>
                    </div>


                    {/* Company er jonno*/}
                    <div>
                        <h3 className="text-[10px] font-bold uppercase text-slate-900">Company</h3>

                        <ul className="mt-4 space-y-3 text-xs text-slate-400">
                            <li><a href="#" className="hover:text-pink-500">About</a></li>
                            <li><a href="#" className="hover:text-pink-500">Contact</a></li>
                            <li><a href="#" className="hover:text-pink-500">Careers</a></li>
                        </ul>
                    </div>


                    {/* legal left side */}
                    <div>
                        <h3 className="text-[10px] font-bold uppercase text-slate-900">Legal</h3>

                        <ul className="mt-4 space-y-3 text-xs text-slate-400">
                            <li><a href="#" className="hover:text-pink-500">rivacy Policy</a></li>
                            <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>


                {/* last thing bottom bar */}
                <div className="mt-6 flex flex-col gap-2 border-t border-gray-100 pt-4 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">

                    <p>©2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-5">
                        <a href="#" className="hover:text-pink-500">Privacy</a>
                        <a href="#" className="hover:text-pink-500">Terms</a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;