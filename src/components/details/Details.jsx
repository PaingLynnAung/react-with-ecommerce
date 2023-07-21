import { useCallback, useContext, useEffect, useState } from 'react';
import Footer from '../static_content/Footer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { cartsContext } from '../../App';

import {MdKeyboardArrowRight} from 'react-icons/md'

const Details = () => {
    let [product,setProduct] = useState()
    let [productsSale,setProductsSale] = useState()

    const addCarts = useContext(cartsContext)[1]

    const addToCart = obj => {
        addCarts(obj)
    }

    let param = useParams('product_name')
    let {category,product_name} = param

    let location = useLocation()
    let navigateData;
    if(location!==null){
        navigateData = location.state
    }

    const navigation = useNavigate()
  
    const navigateDataIsNotNull = useCallback((array)=>{
        localStorage.setItem('detailsProductsList',JSON.stringify(array))
            let selectProduct = JSON.parse(localStorage.getItem('detailsProductsList')).filter(prod => prod.name===product_name)
            let saleProducts = JSON.parse(localStorage.getItem('detailsProductsList')).filter(prod => prod.name!==product_name)
            setLocalStorage(selectProduct,saleProducts)
    },[product_name])

    const handleClick = (name) => {
            let selectProduct = JSON.parse(localStorage.getItem('detailsProductsList')).filter(prod => prod.name===name)
            let saleProducts = JSON.parse(localStorage.getItem('detailsProductsList')).filter(prod => prod.name!==name)
            setLocalStorage(selectProduct,saleProducts)
    }

    const setLocalStorage = (sinP,sP) => {
        localStorage.setItem('sinP',JSON.stringify(sinP))
        localStorage.setItem('sP',JSON.stringify(sP))
        setProduct(...JSON.parse(localStorage.getItem('sinP')))
        setProductsSale(JSON.parse(localStorage.getItem('sP')))
}

    const scrollPosition = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        if(navigateData===null){
            setProduct(...JSON.parse(localStorage.getItem('sinP')))
            setProductsSale(JSON.parse(localStorage.getItem('sP')))
            
        }else if(navigateData!==null){
            navigateDataIsNotNull(navigateData.products)
        }
    
       scrollPosition()
    },[navigateData,navigateDataIsNotNull])

    return (
        <div className='mt-[9em]'>
            <div className="lg:px-[1em] md:px-0 mt-3">
                <div className="flex items-center gap-1">
                    <span className='font-semibold text-gray-600'>/Product/{category}/{product!==undefined&&product.name}</span><span> <MdKeyboardArrowRight size='1.5em'/></span><span className='font-bold'>Product</span>
                </div>
                <div className="flex sm:gap-8 md:gap-3 mt-3 sm:flex-col-reverse lg:flex-row">
                    <div className="lg:w-[25%] xl:w-[30%]">
                        <span className='font-semibold text-xl ml-2 mt-[3em] border-gray-400 border-b-2'>Products on sale</span>
                        <div className="grid lg:grid-cols-1 md:grid-cols-3">
                            {productsSale!==undefined&&(
                                productsSale.map(obj => {
                                    return(
                                        <div onClick={()=>[navigation(`/product/${category}/${obj.name}`),handleClick(obj.name)]} key={obj.id} className="flex items-center cursor-pointer gap-5 border-b-2 py-3">
                                            <img className='h-[6em] object-cover' src={obj.img} alt="" />
                                            <div className="flex flex-col">
                                                <h2 className='font-bold text-lg'>{obj.name}</h2>
                                                <span className='font-semibold text-gray-500'>${obj.price}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    </div>
                    {product!==undefined&&(
                        <div className="lg:w-[75%] xl:w-[70%] md:w-full">
                            <div className="flex md:flex-row sm:flex-col sm:items-center md:items-start">
                                <div className=" bg-[#fefcf4]"><img className='md:h-[30em] sm:h-[20em] object-cover' src={product.img} alt="" /></div>
                                <div className="flex flex-col gap-3 sm:items-center md:ml-[2.5em] md:mt-[7em] sm:w-full md:w-[55%]">
                                    <h1 className='font-bold text-2xl'>{product.name}</h1>
                                    <span className="font-bold text-lg">${product.price}</span>
                                    <p className='font-semibold tracking-[1px] sm:text-center md:text-start'>{product.deatils}</p>
                                    <button onClick={()=>addToCart(product)} className="py-2 w-[80%] mt-3 bg-black text-white font-semibold">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Details;