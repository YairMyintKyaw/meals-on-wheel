import { Link } from "react-router-dom"
import Logo from "../../assets/images/img_logo01.png"
import Image from "../Image/Image"
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="pt-[91px] pb-[31px] px-[20px] max-w-[1512px] mx-auto w-full">
            <div className="flex flex-wrap flex-col items-center text-center md:text-start md:items-start md:flex-row justify-center gap-10 md:gap-y-12 w-full mb-24">
                <Link to={"/"}><Image width={163} height={52} Img={Logo} isContain={true} className="w-[163px]" /></Link>
                <div className="w-full lg:hidden"></div>
                <div>
                    <h2 className="text-xl font-bold mb-[17.14px]">Learn More</h2>
                    <ul className="text-neutral-800 hover:text-black text-sm font-medium">
                        <li><Link to={""}>About MerryMeal</Link></li>
                        <li><Link to={""}>Our impact</Link></li>
                        <li><Link to={""}>Meet our Team</Link></li>
                        <li><Link to={""}>Privacy Policy</Link></li>
                        <li><Link to={""}>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-[17.14px]">Roles</h2>
                    <ul className="text-neutral-800 hover:text-black text-sm font-medium">
                        <li><Link to={""}>Become a Donator</Link></li>
                        <li><Link to={""}>Become a Volunteer</Link></li>
                        <li><Link to={""}>Become a Partner</Link></li>
                        <li><Link to={""}>Become a Member</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-[17.14px]">Contact Us</h2>
                    <ul className="text-neutral-800 hover:text-black text-sm font-medium">
                        <li><Link to={""}>Hot-line Number : 123-456-7890</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-[17.14px]">Learn More</h2>
                    <ul className="text-neutral-800 hover:text-black text-sm font-medium flex justify-center gap-3">
                        <li><Link to={""}><FaFacebookF /></Link></li>
                        <li><Link to={""}><FaInstagram /></Link></li>
                        <li><Link to={""}><FaTwitter /></Link></li>
                        <li><Link to={""}><FaYoutube /></Link></li>
                        <li><Link to={""}><FaLinkedin /></Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="text-xs text-center text-neutral-800 mt-[31px]">© MerryOnWheel 2023-2028 | All Rights Reserved</p>
        </footer>
    )
}

export default Footer