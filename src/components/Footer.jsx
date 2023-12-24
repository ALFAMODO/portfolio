import React from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-black mt-10 shadow">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline"></a>. sgupta11@mail.yu.edu
                    </span>
                    <ul className="flex flex-wrap gap-5 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 flex items-center"><BiSolidPhoneCall className="h-7 w-7 pr-2"/> 3474209388</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shikshit-gupta-52794913a/" className="hover:underline me-4 md:me-6 flex items-center"><FiLinkedin className="h-6 w-6 pr-2"/>LinkedIn</a>
                        </li>
                        <li>
                        <a href="https://github.com/ALFAMODO?tab=repositories" className="hover:underline me-4 md:me-6 flex items-center"><FaGithub className="h-6 w-6 pr-2"/>Github</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
