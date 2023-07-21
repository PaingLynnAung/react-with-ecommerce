import {FaYoutube} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="flex xl:justify-between xl:flex-row mt-[5em] lg:flex-col lg:px-9 md-flex-col md:gap-y-[2em]  sm:flex-col sm:px-3 sm:gap-[3em]">
                <div className="flex lg:pl-[2em] md:pr-[7em] md:flex-row md:justify-between md:gap-9 sm:flex-col sm:justify-between sm:items-center sm:gap-[2em]">
                    <div className="flex flex-col gap-5 sm:items-center md:items-start">
                        <h1 className="font-bold text-xl">More about Orebi Shop</h1>
                        <p className="font-semibold xl:w-[23em] lg:w-[30em] md:w-[20em] sm:text-center md:text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illum asperiores repellendus praesentium minima fugiat ratione deleniti. Maiores, commodi qui.</p>
                        <ul className="flex gap-2">
                            <li className='p-1 rounded-full bg-black'><FaYoutube color='white'/></li>
                            <li className='p-1 rounded-full bg-black'><AiOutlineGithub color='white'/></li>
                            <li className='p-1 rounded-full bg-black'><BiLogoFacebookCircle color='white'/></li>
                            <li className='p-1 rounded-full bg-black'><FaLinkedin color='white'/></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-xl">Shop</h1>
                        <ul className="flex flex-col gap-2">
                            <li className="font-semibold">Accesories</li>
                            <li className="font-semibold">Clothes</li>
                            <li className="font-semibold">Electronics</li>
                            <li className="font-semibold">Home appliances</li>
                            <li className="font-semibold">New Arrivals</li>
                        </ul>
                    </div>
                </div>
                <div className="flex xl:gap-0 xl:flex-row lg:px-[2em] lg:flex-row lg:justify-between lg:gap-[11em] md:flex-row md:items-start md:justify-between md:gap-0 sm:flex-col sm:gap-[2em] sm:items-center">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-xl">Your account</h1>
                        <ul className="flex flex-col gap-2">
                            <li className="font-semibold">Profile</li>
                            <li className="font-semibold">Orders</li>
                            <li className="font-semibold">Address</li>
                            <li className="font-semibold">Account Details</li>
                            <li className="font-semibold">Payment Options</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <h1 className="font-bold text-xl">Subscribe to our newsletter.</h1>
                        <div className="flex">
                            <input className="outline-none bottom-0 w-[16em] h-[2.5em] pl-[0.7em] bg-transparent border-b-2" type="text" name="" placeholder="Insert your email" id="" />
                            <button className="bg-[#d3caca4c] p-1 font-semibold">Subscribe</button>
                        </div>
                        <ul className="flex items-center gap-2">
                            <li>pay</li>
                            <li>visa</li>
                            <li>cred</li>
                            <li>mast</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[8em]">
                <span className="font-semibold text-gray-400">Copyright 2022 | All Right Reserved | Prowered by ReactDB.com</span>
            </div>
        </>
    )
}

export default Footer;