import { CgArrowLongRight } from "react-icons/cg"; 
import { Button, IconButton, Tooltip } from "@mui/material";
import { useAppSelector } from "../../../Components/Redux/TsHooks";

const CartSummary = () => {
    const cart = useAppSelector(state=>state?.cart)

    return ( 
        <div className="cart summary">
            <div className="cart-summary-title">
                <h2 className="text-2xl font-semibold text-mainDark pb-3 border-b border-[#c0c0c0]">Summary</h2>
            </div>

            <div className="cart-summary-info mt-7 capitalize text-mainDark pb-6 border-b border-[#c0c0c0]">
                <p className="flex items-center justify-between">
                    <span>{cart?.cartItems?.length} items</span>
                    <span>${cart?.total?.toFixed(2)}</span>
                </p>

                <p className="flex items-center justify-between mt-3">
                    <span>Shipping fees</span>    
                    <span>$0</span>    
                </p>

                <div className="mt-8">
                    <label className="font-semibold">Promo Code</label>
                    <div className=" mt-3 relative">
                        <input type="text" className=" top-0 left-0 w-full focus-within:outline-none px-4 py-2 rounded-lg" placeholder="Enter Code" />
                        <Tooltip
                            title="Apply Promo Code"
                        >
                            <IconButton className="absolute right-2">
                                <CgArrowLongRight />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between font-semibold text-mainDark">
                <span>Total Price:</span>
                <span>${cart?.total?.toFixed(2)}</span>
            </div>

            <div className="mt-20 text-center">
                <Button className="capitalize text-white bg-mainDark text-lg py-3 min-w-[90%] m-auto">
                    Checkout
                </Button>
            </div>

        </div>
    );
}
 
export default CartSummary;