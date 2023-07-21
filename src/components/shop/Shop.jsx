import {IoIosArrowForward} from 'react-icons/io'
import {BiPlus} from 'react-icons/bi'
import {AiFillAppstore} from 'react-icons/ai'
import {TfiMenuAlt} from 'react-icons/tfi'
import {MdShoppingCart} from 'react-icons/md'
import {HiChevronDoubleRight} from 'react-icons/hi'

import { newArrivials } from '../data/NewArrivals'
import { electronics } from './../data/Electronics';
import { clothings } from '../data/Clothings'
import {bags} from '../data/Bags'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../static_content/Footer'


import { cartsContext } from '../../App'

const Shop = () => {
    const [carts,setCarts] = useState()
    const [showByCategories,setShowCategories] = useState()
    const [pagination,setPagination] = useState(null)

    const pagiUl = useRef(null)

    const navigate = useNavigate()
    const categoryType = useParams('category_type')
    const {category_type} = categoryType

    const addCarts = useContext(cartsContext)[1]
    
    const addToCart = obj => {
        addCarts(obj)
    }

    const setDataToLocalStorage = useCallback((data,category)=>{
        if(data.length<=9){
            setCarts(data)
            setPagination(1)
        }
        else if(data.length<=18){
            setCarts(data.slice(0,9))
            setPagination(2)
        }
        else if(data.length<=27){
            setCarts(data.slice(0,9))
            setPagination(3)
        }
        setShowCategories(category)      
    },[])


    const changeParams = type => {
        navigate(`/shop/${type}`)
    }

    const activePagination = e => {
        if(category_type=='new-arrivals') changeStyleAndPaginate (e,newArrivials)
        else if(category_type=='electronics') changeStyleAndPaginate (e,electronics)
        else if(category_type=='cloths') changeStyleAndPaginate (e,clothings)
        else if(category_type=='bags') changeStyleAndPaginate (e,bags)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    }
    function changeStyleAndPaginate (e,arr) {
        console.log(arr)
        if(e.target.innerHTML==1){
            setCarts(arr.slice(0,9))
        }else if(e.target.innerHTML==2){
            if(carts.length<=18){
                setCarts(arr.slice(9,electronics.length))
            }
        }
        changeStyle(e)
    }

    const changeStyle = (e) => {
        Array.from(document.querySelectorAll('#paginateList')).map(li=>{
            li.style.backgroundColor = 'white'
            li.style.color = 'black'
            
        })
        if(e!==undefined){
            e.target.style.backgroundColor = 'black'
            e.target.style.color = 'white'
        }else{
            pagiUl.current.firstChild.style.backgroundColor = 'black'
            pagiUl.current.firstChild.style.color = 'white'
        }
        
    }

    useEffect(()=>{
            if(category_type==='new-arrivals'){
                setDataToLocalStorage(newArrivials,'new-arrivals')
            }else if(category_type === 'electronics'){
                setDataToLocalStorage(electronics,'electronics')
            }else if(category_type === 'cloths'){
                setDataToLocalStorage(clothings,'cloths')
            }else if(category_type === 'bags'){
                setDataToLocalStorage(bags,'bags') 
            }
            changeStyle()
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
    },[setDataToLocalStorage,category_type])

    return (
        <div className='mt-[9em]'>
            <div className="lg:p-[2em]">
                <h1 className="font-bold text-4xl">Products</h1>
                <span className='flex items-center mt-2 font-semibold '><IoIosArrowForward/> Shop</span>
                <div className="flex">
                    <div className="shop-by-category py-3 px-4 w-[26%] sm:hidden lg:block">
                        <ul className=" flex flex-col gap-2 ">
                            <li className='font-bold text-xl'>Shop By Category</li>
                            <li onClick={()=>changeParams('new-arrivals')} className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='new-arrivals'?'font-semibold':''}`}>New Arrivals</span>
                                <BiPlus/>
                            </li>
                            <li onClick={()=>changeParams('electronics')} className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='electronics'?'font-semibold':''}`}>Electronics</span>
                                <BiPlus/>
                            </li>
                            <li onClick={()=>changeParams('cloths')} className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='cloths'?'font-semibold':''}`}>Cloths</span>
                                <BiPlus/>
                            </li>
                            <li onClick={()=>changeParams('bags')} className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='bags'?'font-semibold':''}`}>Bags</span>
                                <BiPlus/>
                            </li>
                        </ul>
                        {/* <ul className=" flex flex-col gap-2 mt-5">
                            <li className='font-bold text-xl'>Shop By Category</li>
                            <li onClick={()=>setDataToLocalStorage(electronics,'accessories')} className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='accessories'?'font-semibold':''}`}>Accessories</span>
                                <BiPlus/>
                            </li>
                            <li onClick={()=>setDataToLocalStorage(newArrivials,'new-arrivals')} className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='new-arrivals'?'font-semibold':''}`}>New Arrivals</span>
                                <BiPlus/>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='electronics'?'font-semibold':''}`}>Electronics</span>
                                <BiPlus/>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='cloths'?'font-semibold':''}`}>Cloths</span>
                                <BiPlus/>
                            </li>
                            <li className='flex justify-between items-center py-2 border-b-[1px] cursor-pointer'>
                                <span id='cateType' className={`${showByCategories==='bags'?'font-semibold':''}`}>Bags</span>
                                <BiPlus/>
                            </li>
                        </ul> */}
                    </div>
                    <div className=" lg:py-4 lg:px-5 lg:w-[74%] sm:w-full">
                        <div className="flex sm:flex-col sm:items-start md:justify-between md:flex-row md:items-center sticky z-20 sm:px-3 lg:px-0 bg-white sm:top-[188px] md:top-[166px]">
                            <div className="flex gap-3">
                                <span className='w-[2em] h-[2em] grid place-items-center bg-black'><AiFillAppstore size='1.3em' color='white'/></span>
                                <span className='p-2'><TfiMenuAlt size='1.3em'/></span>
                            </div>
                            <div className="flex items-center gap-3 justify-between sm:w-full md:w-auto">
                                <div className="flex items-center gap-1">
                                    <span className='font-semibold text-lg text-gray-700'>Sort by:</span>
                                    <select className='outline-none border-2 px-1 sm:w-[6em] md:w-auto rounded-md font-semibold text-lg text-gray-500' name="" id="">
                                        <option value="">Best Sellers</option>
                                        <option value="">Best Sellers</option>
                                        <option value="">Best Sellers</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className='font-semibold text-lg text-gray-700'>Show:</span>
                                    <select className='outline-none border-2 px-1 rounded-md w-[5em] font-semibold text-lg text-gray-500' name="" id="">
                                        <option value="">9</option>
                                        <option value="">18</option>
                                        <option value="">27</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 shopCarts:grid-cols-2 md:grid-cols-3  lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
                            {carts!==undefined&&carts.map(obj => {
                                return(
                                    <div key={obj.id} className="relative">
                                        <div className="group relative overflow-hidden flex justify-center bg-[#F4F2DE]">
                                            {/* <span className='absolute top-3 grid place-items-center left-3 w-[5em] h-[2em] bg-black text-white'>New</span> */}
                                            <img className='h-[17em] w-[14em] object-cover' src={obj.img} alt="" />
                                            <ul id='card-user-actions' className='absolute bottom-0 px-1 border-[1px] border-gray-200 transition duration-500 ease-in-out translate-y-[9em] group-hover:translate-y-0 w-full bg-white flex flex-col'>
                                                <li onClick={()=>addToCart(obj)} id='add-to-cart' className='flex justify-end items-center gap-1 w-full py-[1px] px-1 cursor-pointer border-gray-300 border-b-[1px]'>
                                                    <span className='text-gray-700 font-semibold'>Add To Cart</span>
                                                    <MdShoppingCart/>
                                                </li>
                                                <li onClick={()=>navigate(`/product/${showByCategories}/${obj.name}`,{state:{products:carts}})} id='view-details' className='flex justify-end items-center gap-1 w-full py-[1px] px-1 cursor-pointer'>
                                                    <span className='text-gray-700 font-semibold'>View Details</span>
                                                    <HiChevronDoubleRight/>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex justify-between items-center shadow-lg border-gray-200 border-b-[1px] border-x-[1px] px-3 py-4 ">
                                            <h1 className='font-bold text-[18px]'>{obj.name}</h1>
                                            <span className='text-gray-600'>${obj.price}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex justify-between items-center mt-[3em]">
                            <ul ref={pagiUl} className='flex items-center gap-3'>
                                {
                                    [...Array(pagination).keys()].map(ind=>{
                                      return <li id='paginateList' onClick={(e)=>activePagination(e)} key={ind} className='w-[2em] h-[2em] flex justify-center items-center cursor-pointer'>{ind+1}</li>
                                    })
                                }
                            </ul>
                            <span className='text-gray-700 font-semibold'>Products from 1 to 46</span>
                        </div>
                    </div>
                </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Shop;