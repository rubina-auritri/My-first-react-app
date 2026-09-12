import logo from "../assets/logo-text.png";
const Navbar = () => {
    return (
        <div className="navbar-container  mx-auto px-4 py-2 flex justify-between items-center">
            <nav className="flex justify-between items-center gap-4 w-full">


                <div className="flex items-center gap-2">
                    <div className="">
                        <img src={logo} alt="logo" className="w-[120px]" />
                    </div>


                </div>


                <div className="flex gap-4 items-center">
                    <a href="#" className="active text-[#CA5D95]">Home</a>
                    <a href="#">Technologies</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>


                <div className="gap-4 flex items-center">
                    <a href="#" className="btn">Sign In</a>
                    <a href="#" className="btn bg-[#CA5D95] text-white rounded px-5 py-2 rounded-lg ">Sign Up</a>
                </div>

            </nav>

        </div>
    );
};

export default Navbar;