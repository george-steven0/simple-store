import { FaEye } from "react-icons/fa"; 
import { AiFillStar } from "react-icons/ai"; 
import { AiOutlineStar } from "react-icons/ai"; 
import { product } from "../../../Components/Types/types";
import { Button, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../Components/Redux/TsHooks";
import { addToCart, removeFromCart } from "../../../Components/Redux/Slices/Cart/cart";
import { useState } from "react";

type productItemProps = {
    data : product
}

const ProductItem = ({data}:productItemProps) => {
    const dispatch = useAppDispatch()

    const [added,setadded] = useState(false)

    const addCart = ()=>{
        const values = {
            ...data,
            qty:1
        }
        dispatch(addToCart(values))
        setadded(true)
    }

    const removeCart = ()=>{
        dispatch(removeFromCart(data?.id))
        setadded(false)
    }

    const cart = useAppSelector(state=>state?.cart)

    return ( 
        <article className="product-item min-h-[370px] shadow-sm p-1 bg-white rounded-md">
            <div className="flex flex-col">
                <div className="product-image w-full h-[200px] overflow-hidden relative group transition-all">
                    <img src={data?.image} alt={data?.title} className="w-full h-full object-contain" />
                    <div className=" hidden group-hover:flex img-overlay bg-[rgba(170,170,170,0.03)] backdrop-blur-sm bg-opacity-25 absolute top-0 left-0 bottom-0 right-0 items-center justify-center">
                        <IconButton>
                            <Link to={`/products/details/${data?.id}`}><FaEye className="text-3xl text-mainColor" /></Link>
                        </IconButton>
                    </div>                 
                </div>

                <div className="product-rating flex items-center justify-center mt-6 text-yellow-500">
                    {[...Array(5)]?.map((_,index)=>(
                        index >= Math.round(data?.rating?.rate) ? <AiOutlineStar key={index} /> : <AiFillStar key={index} />
                    ))}
                </div>

                <div className="product-title text-center mt-2 text-[#5e5e5e] font-medium text-sm">
                    <Tooltip
                        title={data?.title}
                    >
                        <span className="block w-[90%] m-auto truncate">{data?.title}</span>
                    </Tooltip>
                </div>

                <div className="product-price text-center mt-2">
                    <span className="text-xl font-bold text-mainColor">${data?.price?.toFixed(2)}</span>
                </div>

                <div className="add-cart mt-4 text-center">
                    {added || (cart?.cartItems?.find( (i)=>i?.id === data?.id )) ?
                    <Button onClick={removeCart} className="w-[95%] m-auto border border-red-500 border-solid bg-transparent text-red-500 p-2 capitalize font-semibold text-sm transition-all hover:bg-red-500 hover:text-white">remove cart</Button>
                    :
                    
                    <Button onClick={addCart} className="w-[95%] m-auto border border-mainDark border-solid bg-transparent text-mainDark p-2 capitalize font-semibold text-sm transition-all hover:bg-mainDark hover:text-white">Add to cart</Button>
                    }
                </div>
            </div>

            {/* <div className=" hidden group-hover:flex img-overlay bg-[rgba(238,238,238,0.03)] backdrop-blur-sm bg-opacity-25 absolute top-0 left-0 bottom-0 right-0 items-center justify-center">
                <IconButton>
                    <Link to='/'><FaEye className="text-3xl text-white" /></Link>
                </IconButton>
            </div> */}
        </article>
    );
}

export default ProductItem;