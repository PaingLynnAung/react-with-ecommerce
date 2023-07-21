import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../static_content/Footer";
import {MdKeyboardArrowRight} from 'react-icons/md'

const About = () => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    })

    const navigation = useNavigate()
    return (
        <div className="sm:mt-[13em]">
            <div className="sm:p-[1em] md:p-[3em]">
                <div className="">
                    <h1 className="font-extrabold text-4xl">About</h1>
                    <div className="flex items-center mt-1">
                        <span className="text-gray-400">Paymentgateway</span>
                        <MdKeyboardArrowRight className="text-gray-400"/>
                        <span className="font-semibold">about</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-[2em]">
                    <p className="lg:w-[37em]"><span className="font-bold text-xl">Orebi</span> is one of the world leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking stle.</p>
                    <button onClick={()=>navigation('/shop/new-arrivals')} className="font-bold text-xl w-[10em] h-[2em] text-white bg-black">Contiune Shopping</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;