import { FaStore } from "react-icons/fa"; 
import { RiShoppingCartLine } from "react-icons/ri"; 
import { BiMenu } from "react-icons/bi"; 
import { AiOutlineClose } from "react-icons/ai"; 
import { MdOutlineConnectWithoutContact } from "react-icons/md"; 
import { BsInfoLg } from "react-icons/bs"; 
import { BiSearchAlt, BiStoreAlt } from "react-icons/bi"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { Link, NavLink, useLocation } from "react-router-dom";
import './navbar.scss'
import { Backdrop, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import SearchModal from "../../../Common/Search/searchModal";
import { useAppSelector } from "../../../Redux/TsHooks";

const navLinks = [
    {id:'home', title:'Home',path:'/',icon:<AiOutlineHome />},
    {id:'products', title:'Products',path:'/products',icon:<BiStoreAlt />},
    {id:'about', title:'About US',path:'/about',icon:<BsInfoLg />},
    {id:'contact', title:'Contact US',path:'/contact', icon:<MdOutlineConnectWithoutContact />},
]

const Navbar = () => {
    const {pathname} = useLocation()
    const [toggleNav, settoggleNav] = useState(true)

    const handleToggleNav = () => settoggleNav(!toggleNav)
    
    const [openSearch, setopenSearch] = useState(false)

    const handleOpenSearch = () => setopenSearch(true)
    const handleCloseSearch = () => setopenSearch(false)

    useEffect(() => {
        settoggleNav(false)
    }, [pathname])
    
    const cart = useAppSelector(state=>state?.cart)

    // console.log(cart?.cartItems?.length);
    

    return ( 
        <div className={`header-nav-wrapper top-0 ${toggleNav ? 'z-50 fixed' : '-z-10 absolute'} md:static h-screen md:h-fit `}>

                { !toggleNav ?
                    <IconButton onClick={handleToggleNav} className="absolute top-2 z-[90] left-2 z-8 text-mainColor text-2xl block md:hidden w-fit cursor-pointer">
                        <BiMenu />
                    </IconButton>

                    : null
                }

            <nav className={` ${toggleNav ? 'left-0' : '-left-full md:left-0'} z-50 transition-all relative max-w-[350px] md:max-w-full h-full md:h-auto md:flex flex-wrap [&>div]:basis-full [&>div]:md:basis-auto md:flex-nowrap items-center justify-between bg-white shadow-md md:shadow-sm py-3 px-4 `}>
                
                <IconButton onClick={handleToggleNav} className="absolute top-1 right-2 z-10 text-mainColor text-2xl block md:hidden w-fit cursor-pointer">
                    <AiOutlineClose />
                </IconButton>

                <div className="nav-logo-wrapper my-8 md:my-0">
                    <Link to='/' className="flex items-center gap-x-2">
                        <span className="text-6xl text-mainColor"><FaStore /></span>
                        <div className="block md:hidden lg:block">
                            <p className="text-xl text-mainColor font-bold">E-Commerce</p>
                            <p className="text-xs text-[#696969] font-semibold">Shop all you want</p>
                        </div>
                    </Link>
                </div>

                <div className="header-search-wrapper mb-8 md:mb-0">
                    <div className="search-lg-wrapper flex  md:hidden lg:flex lg:justify-center min-w-[250px] max-w-[350px] lg:min-w-[450px]">
                        <input className="w-[90%] sm:w-[70%] outline-none border border-r-[0] rounded-md rounded-r-none p-2 focus-within:shadow-md focus-within:shadow-[#d4e6ff] transition-all duration-300" type="search" placeholder="Search..." />
                        <Button className="bg-mainColor rounded-l-none text-white text-2xl"><BiSearchAlt /></Button>
                    </div>

                    <div className="w-fit cursor-pointer">
                        <Button onClick={handleOpenSearch} className="bg-mainColor bg-opacity-20 text-mainColor text-xl hidden md:block lg:hidden py-2 min-w-[40px] min-h-[40px] rounded-[50%]"><BiSearchAlt className="m-auto" /></Button>
                    </div>
                </div>

                <div className="nav-links-wrapper">
                    <ul className="flex flex-wrap md:flex-nowrap items-center lg:gap-x-4 gap-3 text-mainDark capitalize overflow-hidden md:overflow-visible overflow-y-auto max-h-[320px]">
                        
                        {navLinks?.map( (link)=>(
                            <li key={link?.id} className=" font-semibold w-full md:w-fit text-[1rem] mb-3 md:mb-0">
                                <NavLink className='pb-2 hover:text-mainColor flex items-center gap-x-2 w-fit' to={link?.path}>
                                    <span className="text-lg block md:hidden">{link?.icon}</span>
                                    <span>{link?.title}</span>
                                </NavLink>
                            </li>
                        ) )}

                        <li className="-mt-1 text-mainColor absolute top-[58px] right-3 md:relative md:top-0 md:right-0 md:after:absolute md:after:top-0 md:after:-left-1 md:after:z-30 md:after:w-[2px] md:after:h-[35px] md:after:bg-mainColor">
                            <IconButton className="p-1 relative">
                                <Link to='/cart'>
                                    <RiShoppingCartLine className="text-4xl text-mainColor" />
                                    <span className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-red-500 font-semibold">{cart?.cartItems?.length}</span>
                                </Link>
                            </IconButton>
                        </li>
                    </ul>
                </div>
            </nav>

            {toggleNav ? <Backdrop open={toggleNav} onClick={()=>settoggleNav(!toggleNav)} className="z-40 backdrop-blur-sm" /> : null}

            <SearchModal open={openSearch} close={handleCloseSearch} />
        </div>
    );
}

export default Navbar;