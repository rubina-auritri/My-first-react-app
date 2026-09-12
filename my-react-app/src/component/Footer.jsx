
import FooterLogo from "../assets/logo-text.png";


const Footer = () => {
    return (
        <footer className="text-gray-800 py-10 sm:py-12 mt-16 sm:mt-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

                    <div className="sm:col-span-2 lg:col-span-1">
                        <img
                            src={FooterLogo}
                            alt="DevStack Logo"
                            className="h-10 w-auto"
                        />
                        <p className="mt-3 text-sm sm:text-base leading-6 max-w-sm">
                            Modern web development technologies.
                        </p>
                        <div className="flex gap-4 mt-4 text-gray-400">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                twitter
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                linkedin
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Company
                        </h3>


                        <p>Home</p>
                        <p>Projects</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Technologies
                        </h3>
                        <p>React</p>
                        <p>Next.js</p>
                        <p>TypeScript</p>
                        <p>Laravel</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Legal
                        </h3>

                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-sky-400">
                                Privacy Policy
                            </a>

                            <a href="#" className="hover:text-sky-400">
                                Terms of Service
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-black-400">
                    © 2026 DevStack. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;

