import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex min-h-[500px] max-w-[1000px] items-center justify-between px-6 py-16">

                {/* Left Content start */}
                <div className="max-w-[520px]">

                    <h1 className="text-4xl font-bold leading-tight text-slate-900">
                        Build Your Ideal
                        <br />

                        <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> Development Stack </span>
                    </h1>

                    <p className="mt-4 max-w-[500px] text-sm leading-6 text-slate-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>
                     

                    {/* Buttons create start*/}
                    <div className="mt-8 flex items-center gap-3">

                        <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2.5 text-xs font-medium text-white hover:opacity-90"> Explore Technologies </button>

                        <button className="rounded-md border border-gray-200 px-6 py-2.5 text-xs text-slate-600 hover:bg-gray-50"> Learn More </button>

                    </div>
                    {/* Buttons create End*/}

                </div>
                {/* Left Content End */}


                {/* Image section right on the right side*/}
                <div>
                    <img src={BannerImage} alt="Development Stack"className="w-[300px]"/>
                </div>

            </div>
        </section>
    );
};

export default Banner;