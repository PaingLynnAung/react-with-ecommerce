import {useContext, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { cartsContext } from '../../App'

import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import { accessories } from '../data/Accessories'
import {MdShoppingCart} from 'react-icons/md'
import './navbar.css'



const Search = () => {

    let [filterCarts,setFilterCarts] = useState([])
    const inputRef = useRef(null)
    const cartsList = useContext(cartsContext)[0]
    const navigate = useNavigate()
    const toShop = (cateType) => {
        navigate(`/shop/${cateType}`)
    }

    const handleChange = e => {
        let value = ''
        value +=e.target.value
        value.length===0&&setFilterCarts([])
        let filter;
        if(value.length!==0){
            filter = accessories.filter(cart => {
                if(cart.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) return cart
            })
        }
        setFilterCarts(filter||[])
    }

    const toDetails = (name) => {
        inputRef.current.value = ''
        navigate(`/product/accessories/${name}`,{state:{products:filterCarts}})
        setFilterCarts([])
    }

    return (
        <>
           <div className="flex flex-wrap bg-[#fdfaeb8e] py-[1.4em] sm:px-3  md:flex-row md:justify-between md:px-7 ">
               <div className="group flex shrink-0 items-center gap-1 sm:basis-[87%] lg:basis-auto">
                    <span className="flex flex-row items-center gpa-4 text-gray-600 font-semibold"><HiOutlineMenuAlt4 size='1.5em'/><span className='ml-2'><span className=''>Shop by Category</span></span></span>
                    <div className="transition duration-[20000] ease-in-out absolute top-[8.3em] translate-x-[-14em] z-10 group-hover:translate-x-0">
                        <ul className="flex flex-col w-[10em] px-3 pb-5 bg-[#000000c4]">
                            <li onClick={()=>toShop('accessories')} className="group pl-3 border-b-[1px] pt-4 pb-1 text-gray-300 border-white cursor-pointer hover:font-bold hover:text-white">Accessories</li>
                            <li onClick={()=>toShop('new-arrivals')} className="pl-3 border-b-[1px] py-1 text-gray-300 border-white cursor-pointer hover:font-bold hover:text-white">New arrivals</li>
                            <li onClick={()=>toShop('electronics')} className="pl-3 border-b-[1px] py-1 text-gray-300 border-white cursor-pointer hover:font-bold hover:text-white">Electronics</li>
                            <li onClick={()=>toShop('cloths')} className="pl-3 border-b-[1px] py-1 text-gray-300 border-white cursor-pointer hover:font-bold hover:text-white">Cloths</li>
                            <li onClick={()=>toShop('bags')} className="pl-3 border-b-[1px] py-1 text-gray-300 border-white cursor-pointer hover:font-bold hover:text-white">Bags</li>
                        </ul>
                    </div>
               </div>
               <div className="relative shadow-md rounded-lg h-[3em] sm:mx-auto sm:w-[98%] md:min-w-[60%] sm:mt-[1em] lg:mt-0 sm:order-3 lg:order-2 lg:w-[30em] xl:w-[35em]">
                    <input ref={inputRef} onChange={(e)=>handleChange(e)} className="w-full h-full pl-[1em] rounded-xl text-gray-600 outline-none border-0" type="text" placeholder="Search your products here" />
                    <span className="absolute right-4 top-[12px]"><BiSearch size='1.5em'/></span>
                    <ul id='searchCartsScrollbar' className={`relative flex flex-col gap-3 bottom-[-4px] rounded-xl w-full ${filterCarts.length>3?'h-[25.5em] overflow-y-scroll':'h-auto'} bg-white left-0`}>
                        {
                            filterCarts.length>0&&
                            filterCarts.map(cart => {
                                return (
                                    <li onClick={()=>toDetails(cart.name)} key={cart.id} className='flex items-center gap-3 bg-[#f0ebd5] cursor-pointer rounded-xl '>
                                        <img className='w-[10em] h-[8em] object-cover' src={cart.img}alt="" />
                                        <div className="flex flex-col gap-1">
                                            <h1 className='font-bold sm:text-lg lg:text-2xl'>{cart.name}</h1>
                                            <p>{cart.deatils}</p>
                                            <p>Price: <span className='font-bold sm:text-base lg:text-lg'>${cart.price}</span></p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
               </div>
               <div onClick={()=>navigate('/cart')} className="relative group sm:order-2 lg:order-3 grid place-items-center bg-yellow-400 cursor-pointer px-[9px] py-[5px] shadow-md rounded-md">
                    <MdShoppingCart className='transition duration-1000 ease-in-out group-hover:rotate-[360deg]' size='1.5em' />
                    <span className='absolute px-2 top-[-0.5em] right-[-0.5em] bg-black text-white rounded-full'>{cartsList!==null?cartsList.length:'0'}</span>
                    
                </div>
            </div> 
        </>
    )
}

export default Search;