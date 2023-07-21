import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Navigation, Autoplay} from 'swiper/modules'

import {HiChevronDoubleRight} from 'react-icons/hi'
import {MdShoppingCart} from 'react-icons/md'
import {newArrivials} from '../data/NewArrivals'
import { useNavigate } from 'react-router-dom';
import { cartsContext } from '../../App';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';


import "swiper/css/autoplay"


const NewArrivals = () => {

    const addCarts = useContext(cartsContext)[1]
    const navigation = useNavigate()

    const addToCart = obj => {
        addCarts(obj)
    }

    return (
        <>
            <div className=" lg:px-[1em] py-[3em]">
                <h1 className="font-bold text-2xl mb-4 sm:ml-3 md:ml-0">New Arrivals</h1>
                <Swiper className="w-full swiper"
                    modules={[FreeMode,Navigation,Autoplay]}
                    freeMode={true}
                    autoplay={true}
                    breakpoints={{
                        1280:{
                            slidesPerView: 5,
                            spaceBetween: 20
                        },
                        800:{
                            slidesPerView: 4,
                            spaceBetween: 15
                        },
                        700:{
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        680:{
                            slidesPerView: 2,
                            spaceBetween: 5
                        },
                        0:{
                            slidesPerView:1,
                            spaceBetween: 5
                        }
                    }}
                >
                    {newArrivials.map(obj => {
                        return(
                            <SwiperSlide key={obj.id} className=''>
                            <div className="">
                                <div className="group relative overflow-hidden flex justify-center bg-[#F4F2DE]">
                                    <span className='absolute top-3 grid place-items-center left-3 w-[5em] h-[2em] bg-black text-white'>New</span>
                                    <img className='h-[18em] w-[80%] object-cover' src={obj.img} alt="afl" />
                                    <ul id='card-user-actions' className='absolute bottom-0 px-1 border-[1px] border-gray-200 transition duration-500 ease-in-out translate-y-[9em] group-hover:translate-y-0 w-full bg-white flex flex-col'>
                                        <li onClick={()=>addToCart(obj)} id='add-to-cart' className='flex justify-end items-center gap-1 w-full py-[1px] px-1 cursor-pointer hover:border-b-2 border-gray-300 border-b-[1px]'>
                                            <span className='text-gray-700 font-semibold'>Add To Cart</span>
                                            <MdShoppingCart/>
                                        </li>
                                        <li onClick={()=>navigation(`/product/new-arrivals/${obj.name}`,{state:{products:newArrivials}})} id='view-details' className='flex justify-end items-center gap-1 w-full py-[1px] px-1 cursor-pointer hover:border-t-2 border-t-[1px]'>
                                            <span className='text-gray-700 font-semibold'>View Details</span>
                                            <HiChevronDoubleRight/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-between items-center shadow-lg border-gray-200 border-b-[1px] border-x-[1px] sm:px-8 md:px-3 py-4 ">
                                    <h1 className='font-bold text-[18px]'>{obj.name}</h1>
                                    <span className='text-gray-600'>${obj.price}</span>
                                </div>
                            </div>
                    </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default NewArrivals;