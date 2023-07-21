import { useContext } from 'react'
import Footer from '../static_content/Footer'
import { cartsContext } from '../../App'
import { useNavigate } from 'react-router-dom'

import {IoIosArrowForward} from 'react-icons/io'
import {RxCross2} from 'react-icons/rx'
import {HiMinusSm} from 'react-icons/hi'
import { HiOutlinePlusSm} from 'react-icons/hi'


const Cart = () => {
    let cartsList = useContext(cartsContext)[0]||[]
    let addQty = useContext(cartsContext)[2]
    let resetCarts = useContext(cartsContext)[3]
    let decrementQty = useContext(cartsContext)[4]
    let removeCart = useContext(cartsContext)[5]

    const navigate = useNavigate()

    let total=cartsList.reduce((previous, current) => {
        return previous + current.subtotal
    }, 0)
    

    const increment = (cartId,price) => {
        let newArr = JSON.parse(localStorage.getItem('cartsList')).filter(cart => {
            if(cart.id==cartId){
                let updateCart;
                if(cart.quantity){
                    cart.quantity +=1
                    cart.subtotal += price
                    updateCart = cart
                }else{
                    cart.quantity = 2
                    cart.subtotal += price
                    updateCart = cart
                }
                return updateCart
            }else return cart
        })
        localStorage.setItem('cartsList',JSON.stringify(newArr))
        addQty(JSON.parse(localStorage.getItem('cartsList')))
    }
    const decrement = (cartId,price) => {
        let newArr = JSON.parse(localStorage.getItem('cartsList')).filter(cart => {
            if(cart.id==cartId){
                let updateCart;
                if(cart.quantity&&cart.quantity>1){
                    cart.quantity -=1
                    cart.subtotal -= price
                    updateCart = cart
                }else{
                    cart.quantity = 1
                    cart.subtotal = price
                    updateCart = cart
                }
                return updateCart
            }else return cart
        })
        localStorage.setItem('cartsList',JSON.stringify(newArr))
        decrementQty(JSON.parse(localStorage.getItem('cartsList')))
    }

    const clearCarts = () => {
        resetCarts()
    }

    const remove_cart = cartId => {
        let filterCart = cartsList.filter(cart => cart.id!==cartId)
        localStorage.setItem('cartsList',JSON.stringify(filterCart))
        removeCart(filterCart)
    }


    return (
        <div className='mt-[9em]'>
            {cartsList.length>0&&<div className="lg:p-[2em]">
                <h1 className="font-extrabold text-4xl">Cart</h1>
                <span className='font-bold text-lg flex items-center gap-1 mt-2'><IoIosArrowForward/> Cart</span>
                <div className="flex py-[1em] sm:px-2 md:px-0 mt-5 bg-[#c7dcc21d]">
                    <span className='text-lg font-bold basis-[31.4%]'>Product</span>
                    <span className='text-lg font-bold basis-[28.3%]'>Price</span>
                    <span className='text-lg font-bold basis-[31%] '>Quantity</span>
                    <span className='text-lg font-bold '>Subtotal</span>
                </div>
                {cartsList!==null&&cartsList.map(cart => {
                    return(
                        <div key={cart.id} className="flex sm:pr-3 lg:pr-0 bg-[#c7dcc21d] items-center mt-5">
                            <div className='relative flex items-center gap-2 shrink-0 sm:basis-[29.7%] md:basis-[31.4%] md:pl-[1em]'>
                                <div className=''><img className='sm:h-[6em] sm:w-[5em] md:w-auto md-h-[7em]' src={cart.img} alt="" /></div>
                                <span className='font-bold sm:hidden lg:block sm:text-base md:text-xl'>{cart.name}</span>
                                <span onClick={()=>remove_cart(cart.id)} className='absolute top-[-0.5em] left-[-0.5em] p-1 bg-gray-200 rounded-full'><RxCross2 size='1.5em'/></span>
                            </div>
                            <span className='sm:text-base sm:basiis-[30%] md:m-0 md:text-lg font-bold md:basis-[28.3%]'>{cart.subTotal?cart.subTotal:cart.price}</span>
                            <div className='ml-[3em] md:ml-0 md:basis-[24%]'>
                                <div className="flex items-center gap-3">
                                    <button onClick={()=>decrement(cart.id,cart.price)} className='w-[1.5em] h-[1.5em] bg-gray-200'><HiMinusSm size='1.5em'/></button>
                                    <span>{cart.quantity?cart.quantity:'1'}</span>
                                    <button onClick={()=>increment(cart.id,cart.price)} className='w-[1.5em] h-[1.5em] bg-gray-200 font-bold'><HiOutlinePlusSm size='1.5em'/></button>
                                </div>
                            </div>
                            <span className='sm:text-base sm:ml-[5em] md:text-lg font-bold '>{cart.subtotal}</span>
                        </div>
                    )
                })}
                <button onClick={()=>clearCarts()} className='text-xl bg-red-500 sm:ml-2 my-5 py-[2px] px-4 text-white'>RESET CART</button>
                <hr />
                <div className="flex items-center justify-between my-3 sm:px-2 md:pl-[1em]">
                    <div className="flex items-center gap-2">
                        <input className='outline-none border-2 h-[2em] sm:w-[10em] md:w-[14em] pl-3' type="text" name="" placeholder='Coupon Number' />
                        <button className='font-bold text-mediun'>Apply Coupon</button>
                    </div>
                    <h1 className='font-bold sm:text-[18px] md:text-xl'>Update Cart</h1>
                </div>
                <hr />
                    <div className="flex flex-col items-end sm:pr-[1em] md:pr-[6em] mt-5">
                        <h1 className='font-bold text-xl'>Cart totals</h1>
                        <div className="flex flex-col border-2 mt-3">
                            <div className="flex gap-[8em] justify-between items-center py-1 border-b-2 px-3 ">
                                <h2 className='font-semibold'>Subtotal</h2>
                                <span className='font-semibold'>${total}</span>
                            </div>
                            <div className="flex gap-[8em] justify-between items-center py-1 border-b-2 px-3 ">
                                <h2 className='font-semibold'>Shipping Charge</h2>
                                <span className='font-semibold'>$30</span>
                            </div>
                            <div className="flex gap-[8em] justify-between items-center py-1 px-3 ">
                                <h2 className='font-semibold'>Total</h2>
                                <span className='font-semibold'>${total==0?'0':total+30}</span>
                            </div>
                        </div>
                        <button onClick={()=>navigate('/payment-gateway')} className='font-semibold text-lg text-white bg-black mt-2 py-1 px-2'>Process to Checkout</button>
                    </div>
            </div>}
            {cartsList.length===0&&
             <div className='mt-[12em]'>
                <span className='font-bold text-lg flex items-center gap-1 mt-2'><IoIosArrowForward/> Cart</span>
                <div className="flex justify-center mt-6 mb-10">
                    <div className="flex flex-col gap-2 px-[2em] shadow-md items-center w-[28em] py-[1em]">
                        <h1 className="font-bold text-xl">YOUR CART FEELS LONELY</h1>
                        <p>Your Shopping cart lives to serve.Give it purpose- fill it with books, electroincs, videos, etc and make it happy.</p>
                        <button onClick={()=>navigate('/shop/new-arrivals')} className="font-bold text-xl bg-black mt-2 text-white h-[2em] w-[10em] rounded-md">Contiue Shopping</button>
                    </div>
                </div>
             </div>
            }
            <Footer/>
        </div>
    )
}

export default Cart