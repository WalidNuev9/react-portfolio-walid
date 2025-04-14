import logo from "../assets/W.png";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6 opacity-85 ">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className="px-4 mx-2 w-40" alt="logo" />
            </div> 
    <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
                    <a href="https://www.linkedin.com/in/walid-belegchour-5a929a157/" target="_blank" type="button"> <FaLinkedin/></a>
                    <a href="https://github.com/WalidNuev9" target="_blank" type="button"> <FaGithub /></a>
                    <a href="https://web.facebook.com/profile.php?id=100069736411989" target="_blank" type="button"> <FaFacebook /></a>
                    <a href="https://www.instagram.com/walid_belegchour/" target="_blank" type="button"> <FaInstagram /></a>
                    <a href="https://x.com/splitx999" target="_blank" type="button"> <FaSquareXTwitter /></a>
                </div>
        </nav>
    )
        ;
}

export default Navbar