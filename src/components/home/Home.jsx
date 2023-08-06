import { useEffect } from "react";
import NewArrivals from "./NewArrivals";
import { bigOffer } from "../data/BigOffer";
import Footer from "../static_content/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css"
import "swiper/css/autoplay"
import './styles.css'
import { useNavigate } from "react-router-dom";


const Home = () => {
    let navigate = useNavigate()
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    })

    return (
        <div className="mt-[8em]">
            <Swiper className="w-full h-[27em] "
                modules={[Autoplay]}
                autoplay={{ delay: 3000,}}
                breakpoints={{
                    0:{
                        slidesPerView:1,
                    }
                }}
            >
                <SwiperSlide className="">
                    <div className="h-full">
                        <div className="flex sm:justify-between md:justify-center items-center h-full sm:pl-[2em] lg:p-0 lg:gap-[8em]">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-[25px]">Final Offer</h1>
                                <div className="">Up to <span className="text-[20px] font-semibold">50%</span>save for all bags items!</div>
                                <button onClick={()=>navigate(`/product/big-offer/${bigOffer[0].name}`,{state:{products:bigOffer}})} className="w-[8em] h-[2.4em] text-white bg-black">Shop Now</button>
                            </div>
                            <img className="w-[300px] sm:h-[90%] lg:h-[100%] object-cover" src='/big_offer/bagutte_bag.png' alt="" />
                        </div>    
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="h-full">
                        <div className="flex sm:justify-between md:justify-center items-center h-full sm:pl-[2em] lg:p-0 lg:gap-[8em]">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-[25px]">Final Offer</h1>
                                <div className="">Up to <span className="text-[20px] font-semibold">40%</span>save for all cloths items!</div>
                                <button onClick={()=>navigate(`/product/big-offer/${bigOffer[1].name}`,{state:{products:bigOffer}})} className="w-[8em] h-[2.4em] text-white bg-black">Shop Now</button>
                            </div>
                            <img className="w-[300px] sm:h-[90%] lg:h-[100%] object-cover" src='/big_offer/hoodie.png' alt="" />
                        </div>    
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="h-full">
                        <div className="flex sm:justify-between md:justify-center items-center h-full sm:pl-[2em] lg:p-0 lg:gap-[8em]">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-semibold text-[25px]">Final Offer</h1>
                                <div className="">Up to <span className="text-[20px] font-semibold">60%</span>save for all electronics items!</div>
                                <button onClick={()=>navigate(`/product/big-offer/${bigOffer[2].name}`,{state:{products:bigOffer}})} className="w-[8em] h-[2.4em] text-white bg-black">Shop Now</button>
                            </div>
                            <img className="w-[300px] sm:h-[90%] lg:h-[100%] object-cover" src='/big_offer/lamp (3).png' alt="" />
                        </div>    
                    </div>
                </SwiperSlide>
            </Swiper>
            <ul className="flex justify-between items-center sm:p-5 md:px-4 lg:px-[3em] py-[1.4em] border-b-2">
                <li className="flex sm:flex-col md:flex-row  items-center gap-2">
                    <div className="font-bold text-[20px] text-center">2</div>
                    <div className="font-semibold">years warranty</div>
                </li>
                <li className="flex sm:flex-col md:flex-row items-center gap-2">
                    <span>Free</span><span className="font-semibold">shipping</span>
                </li>
                <li className="flex sm:flex-col md:flex-row items-center gap-2">
                    <div className="text-center">Return policy</div><div className="font-semibold">30 days</div>
                </li>
            </ul>
            <NewArrivals/>
            <Footer/>
        </div>
    )
}

export default Home;