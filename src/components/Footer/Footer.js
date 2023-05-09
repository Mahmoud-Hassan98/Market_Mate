import market_mate_logo from './image/market_mate_logo.png'
import { AiFillLinkedin } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer footer aria-label="Site Footer" >
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-start text-teal-600 sm:justify-start">
                            <img src={market_mate_logo} className="w-40" alt='logo' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-left sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Quick links</p>

                            <nav aria-label="Footer About Nav" className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link to="/"
                                            className="text-black transition hover:text-gray-700/75">
                                            Home
                                            </Link>
                                    </li>

                                    <li>
                                    <Link to="products"
                                            className="text-black transition hover:text-gray-700/75">
                                            All products
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="About"
                                            className="text-black transition hover:text-gray-700/75">
                                            About
                                            </Link>
                                    </li>

                                    <li>
                                        <Link to="Contact"
                                            className="text-black transition hover:text-gray-700/75">
                                            Contact
                                        </Link>
                                    </li>
                                    <ul className="mt-8 flex justify-start gap-6 sm:justify-start md:gap-8">
                                        <li>
                                            <a
                                                href="/"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-blue-400">
                                                <AiFillLinkedin className='h-6 w-6 transition hover:text-teal-700/75' />
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="/"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-green-500">
                                                <BsTelephoneFill className='h-5 w-5 transition hover:text-teal-700/75' />
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="/"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-red-600">
                                                <SiGmail className='h-5 w-5 transition hover:text-teal-700/75' />
                                            </a>
                                        </li>
                                    </ul>
                                </ul>
                            </nav>
                        </div>

                        <div className="text-left sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Our products</p>

                            <nav aria-label="Footer Services Nav" className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link to="Vegetables"
                                            className="text-black transition hover:text-gray-700/75">
                                            Vegetables
                                        </Link>
                                    </li>

                                    <li>
                                    <Link to= "Fruits"
                                            className="text-black transition hover:text-gray-700/75">
                                            Fruits
                                        </Link>
                                    </li>

                                    <li>
                                    <Link to= "Meats"
                                            className="text-black transition hover:text-gray-700/75">
                                            Meats
                                        </Link>
                                    </li>

                                    <li>
                                    <Link to='Bakery'
                                            className="text-black transition hover:text-gray-700/75">
                                            Bakery
                                        </Link>
                                    </li>

                                    <li>
                                    <Link to='Frozen'
                                            className="text-black transition hover:text-gray-700/75">
                                            Frozen
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="text-left sm:text-left w-60">
                            <p className="text-lg font-medium text-gray-900">join us</p>
                            <p className="mt-6 max-w-md leading-relaxed sm:max-w-xs sm:text-left">
                                Log in now to be able to enjoy all our services
                            </p>
                            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">

                                <div className="flex items-center justify-between">
                                    <Link to='Login'>
                                        <button
                                            type="submit"
                                            className="inline-block rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white">
                                            Login
                                        </button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6">
                    <div className="flex justify-center">
                        <p className="mt-4 text-sm text-black sm:order-first sm:mt-0">
                            &copy; 2023 market mate team
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;