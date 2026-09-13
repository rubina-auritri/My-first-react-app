
import logo from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-2">

                <nav className="flex items-center justify-between">

                    {/* Mobile Hamburger */}
                    <button className="md:hidden text-2xl text-gray-700">
                        ☰
                    </button>

                    {/* Logo */}
                    <div className="md:mr-auto md:ml-0 mx-auto md:mx-0">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-[100px] sm:w-[120px]"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm lg:text-base">
                        <a href="#" className="text-[#CA5D95]">
                            Home
                        </a>
                        <a href="#">Technologies</a>
                        <a href="#">Projects</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-4 ml-6">
                        <a href="#" className="text-sm lg:text-base">
                            Sign In
                        </a>

                        <a
                            href="#"
                            className="bg-[#CA5D95] text-white rounded-lg px-5 py-2 text-sm lg:text-base"
                        >
                            Sign Up
                        </a>
                    </div>

                    {/* Mobile Sign Up */}
                    <a
                        href="#"
                        className="md:flex lg:hidden bg-[#CA5D95] text-white rounded-lg px-4 py-2 text-sm"
                    >
                        Sign Up
                    </a>

                </nav>

            </div>
        </header>
    );
};

export default Navbar;

