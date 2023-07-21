import { useCallback, useEffect, useRef } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'

import {HiMenuAlt2} from 'react-icons/hi'
import {RxCross2} from 'react-icons/rx'


const Navbar = () => {
    const listRef = useRef(null)
    const shopRef = useRef(null)
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const menuRef = useRef(null)
    const menuShopRef = useRef(null)
    const menuHomeRef = useRef(null)
    const menuAboutRef = useRef(null)
    const menuContactRef = useRef(null)

    const {pathname} = useLocation()
    let navigate = useNavigate()

    const checkPathname = useCallback(()=>{
        Array.from(document.querySelectorAll('#menuUl li')).map(li => {
            li.style.fontSize = '16px'
        })
        Array.from(document.querySelectorAll('#navbarNavLink')).map(el => {
            el.style.color = '#707480'
        })
        if(pathname=='/'){
            offsetWeightAndLeft(homeRef)
            menuHomeRef.current.style.fontSize = '20px'
        }
        else if(pathname=='/about'){
            offsetWeightAndLeft(aboutRef)
            menuAboutRef.current.style.fontSize = '20px'
        }
        else if(pathname=='/contact'){
            offsetWeightAndLeft(contactRef)
            menuContactRef.current.style.fontSize = '20px'
        }
        else{
            offsetWeightAndLeft(shopRef)
            menuShopRef.current.style.fontSize = '20px'
        }
        
    },[pathname])

    const offsetWeightAndLeft = ref => {
        let width = ref.current.offsetWidth
        let left = ref.current.offsetLeft
        listRef.current.style.width = `${width}px`
        listRef.current.style.left = `${left}px`
        ref.current.style.color = 'black'

    }
    
    const handleClick = (e,path) => {
        Array.from(document.querySelectorAll('#navbarNavLink')).map(el => {
            el.style.color = '#707480'
        })
        e.target.style.color = 'black'
        navigate(path)
    }

    const handleClickk = (e,path) => {
        Array.from(document.querySelectorAll('#menuUl li')).map(li => {
            li.style.fontSize = '16px'
        })
        e.target.style.fontSize = '20px'
        navigate(path)
        hideMenu()
    }

    const clickMenu = () => {
        menuRef.current.style.left = '0em'
        menuRef.current.style.display = 'block'
        document.body.style.overflow = 'hidden'
    }

    const hideMenu = () => {
        menuRef.current.style.display = 'none'
        document.body.style.overflow = 'visible'
    }

    useEffect(()=> {
        checkPathname()
    },[checkPathname])

    return (
        <>
                <div className="flex justify-between items-center sm:px-3 md:px-3 lg:px-10 py-5 shadow-sm">
                    <h1 onClick={()=>navigate('/')} className="font-semibold cursor-default text-[22px]">OREBI</h1>
                    <div className="sm:hidden md:block">
                        <ul className="relative flex items-center">
                            <li className="px-5 cursor-pointer font-semibold text-[18px]">
                                <span id='navbarNavLink' ref={homeRef} onClick={(e)=>handleClick(e,'/')}>Home</span>
                            </li>
                            <li className="px-5 cursor-pointer font-semibold text-gray-500 text-[18px] border-1 border-x-2 border-gray-400">
                                <span id='navbarNavLink' ref={shopRef} onClick={(e)=>handleClick(e,'/shop/new-arrivals')}>Shop</span>
                            </li>
                            <li  className="px-5 cursor-pointer font-semibold text-gray-500 text-[18px] border-1 border-r-2 border-gray-400">
                                <span id='navbarNavLink' ref={aboutRef} onClick={(e)=>handleClick(e,'/about')}>About</span>
                            </li>
                            <li className="px-5 cursor-pointer font-semibold text-gray-500 text-[18px]">
                                <span id='navbarNavLink' ref={contactRef} onClick={(e)=>handleClick(e,'/contact')}>Contact</span>
                            </li>
                            <li className='absolute transition-all duration-500 ease-in-out left-[20px] bottom-[-5px] h-1 w-[50px] bg-red-400'ref={listRef}></li>
                        </ul>
                    </div>
                    <HiMenuAlt2 onClick={()=>clickMenu()} size='1.7em' className='sm:block md:hidden'/>
                </div>
                <div ref={menuRef} className="absolute top-0 left-0 z-[1000] w-[80%] h-screen hidden bg-[#000000d1]">
                    <div className='flex justify-end pr-3 mt-5'><RxCross2 onClick={()=>hideMenu()} color='white' size='2em'/></div>
                    <ul id='menuUl' className='px-4 mt-8'>
                        <li ref={menuHomeRef} onClick={(e)=>handleClickk(e,'/')} className='text-white text-[20px] text-center leading-9 border-b-2 border-[#ffffff65]'>Home</li>
                        <li ref={menuShopRef} onClick={(e)=>handleClickk(e,'/shop/new-arrivals')} className='text-white text-center leading-9 border-b-2 border-[#ffffff65]'>Shop</li>
                        <li ref={menuAboutRef} onClick={(e)=>handleClickk(e,'/about')} className='text-white text-center leading-9 border-b-2 border-[#ffffff65]'>About</li>
                        <li ref={menuContactRef} onClick={(e)=>handleClickk(e,'/contact')} className='text-white text-center leading-9 '>Contact</li>
                    </ul>
                </div>
        </>
    )
}

export default Navbar;