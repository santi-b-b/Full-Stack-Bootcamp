import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        
        <div>
            <div className="flex items-center gap-16 justify-center py-8 border-t border-t-gray-500">
                <FaFacebook className="text-2xl text-gray-500 hover:text-black cursor-pointer" />
                <FaInstagram className="text-2xl text-gray-500 hover:text-black cursor-pointer" />
                <FaTwitter className="text-2xl text-gray-500 hover:text-black cursor-pointer" />
            </div>
            <p className="text-s text-gray-700 hover:text-black cursor-pointer">Join our newsletter</p>
        </div>
    );
}

export default Footer;