import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";
import { BsHeadsetVr } from "react-icons/bs";
const Footer = () => {
    return (
        <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 pt-32">
            <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Metaverse</h4>
                <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
                    <BsHeadsetVr size={22} />
                    <span className="font-normal text-[16px] text-white">Enter Metaverse</span>
                </button>
            </div>
            <div className="flex flex-col">
                <div className="mb-[50px] h-[2px] bg-white opacity-10">
                </div>
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <h4 className="font-extrabold text-[24px] text-white">Metaversus</h4>
                    <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2021 - 2024 Metaversus. All rights reserved.</p>
                    <div className="flex gap-4">
                        <FaTwitter size={28} />
                        <FaFacebook size={28} />
                        <FaLinkedin size={28} />
                        <FaInstagram size={28} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;