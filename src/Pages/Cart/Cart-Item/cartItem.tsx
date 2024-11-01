import { AiOutlineClose } from "react-icons/ai"; 
import { IconButton, Tooltip } from "@mui/material";
import { product } from "../../../Components/Types/types";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useAppDispatch } from "../../../Components/Redux/TsHooks";
import { decreaseItem, increaseItem, removeFromCart } from "../../../Components/Redux/Slices/Cart/cart";

type cartItemProps = {
    data : product
}

const CartItem = ({data}:cartItemProps) => {
    const dispatch = useAppDispatch()

    const handleIncrement =()=>{
        dispatch(increaseItem(data))
    }

    const handleDecrement =()=>{
        dispatch(decreaseItem(data))
    }

    const handleRemoveItem =()=>{
        dispatch(removeFromCart(data?.id))
    }
    return ( 
        <div className="cart-item-card flex items-center justify-between gap-5 mb-4 pb-4 border-b  overflow-y-auto w-full">
            <div className="cart-item-image flex items-center gap-x-4 lg:max-w-[300px] md:min-w-[180px] lg:min-w-[300px]">
                <img src={data?.image} alt={data?.title} className="w-[70px] h-[70px] rounded-md hidden md:block" />

                <div className="capitalize cart-item-title">
                    <Tooltip
                        title={data?.title}    
                    >
                        <h3 className="text-sm text-[#5e5e5e] font-semibold truncate max-w-[130px] md:max-w-[130px] lg:max-w-[280px]">{data?.title}</h3>
                    </Tooltip>
                    <p className="text-xs text-[#737373]">{data?.category}</p>
                </div>
            </div>

            <div className="min-w-[80px]">
                <span>${data?.price}</span>
            </div>

            <div className="cart-action-btn  text-center">
                <div className="product-qty capitalize flex items-center gap-x-3 [&>button]:text-sm justify-center">
                    <IconButton onClick={handleDecrement} className="text-mainColor border border-solid"><AiOutlineMinus /></IconButton>
                    <span>{data?.qty}</span>
                    <IconButton onClick={handleIncrement} className="text-mainColor border border-solid"><IoMdAdd /></IconButton>
                </div>
            </div>

            <div className="basis-[10%] text-right">
                <IconButton onClick={handleRemoveItem}>
                    <AiOutlineClose />
                </IconButton>
            </div>
        </div>
    );
}

export default CartItem;