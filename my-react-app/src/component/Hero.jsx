import heroimg from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <div className="container mx-auto bg-gray-100 py-16 grid grid-cols-2 md:grid-cols-2 gap-8 items-center px-4">


            


                <div className="">

                <h1 className="text-4xl font-bold mb-4">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-500 to-purple-600  bg-clip-text text-transparent">Development Stack</span>
                </h1>

                <p>
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="flex gap-4 mt-4">
                    <a href="#" className="btn bg-gradient-to-r from-orange-500 to-purple-400  text-white px-4 py-2 rounded">
                        Explore Technologies
                    </a>

                    <a href="#" className="btn bg-white border border-gray-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-400 text-gray-700 px-4 py-2 rounded">
                        Learn More
                    </a>
                </div>

            </div>



            <div className="">

                <img
                    src={heroimg}
                    alt="Development Stack Illustration"
                />

            </div>






        </div>
    );
};

export default Hero;