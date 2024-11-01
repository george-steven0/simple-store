import BreadCrumb from "../../Components/Common/BreadCrumb/breadCrumb";
import { useAppSelector } from "../../Components/Redux/TsHooks";
import CartItem from "./Cart-Item/cartItem";
import CartSummary from "./Summary/summary";

const breadCrumbLinks = [
    {id:1,title:'home',path:'/'},
    {id:2,title:'products',path:'/products'},
    {id:3,title:'cart'},
]

const Cart = () => {

    const cart = useAppSelector(state=>state?.cart)
    
    console.log(cart);
    
    return ( 
        <section className="cart-wrapper">
            <div className="breadcrumb-wrapper">
                <BreadCrumb paths={breadCrumbLinks} title="Cart" />
            </div>

            <article className="cart-details-wrapper mt-8 px-6 overflow-hidden">
                <div className="flex flex-wrap md:flex-nowrap rounded-lg shadow-lg w-full">
                    <div className="cart-items-wrapper basis-full md:basis-[65%] p-4 lg:p-6 bg-white w-full ">
                        <div className="flex items-center justify-between">
                            <p className="capitalize font-semibold text-mainDark text-2xl w-fit">cart items:</p>
                            <span className=" text-[#767676] capitalize">
                                {cart?.cartItems?.length} items
                            </span>
                        </div>

                        <div className="items-container h-[400px] mt-6 w-full">
                            {cart?.cartItems?.length !==0 ? cart?.cartItems?.map( (item)=>(
                                <CartItem key={item?.id} data={item} />
                            ))
                            :
                            <div className="text-center w-full h-full flex items-center justify-center text-xl font-semibold">No Items Found</div>
                            }
                            
                        </div>
                    </div>

                    <div className="summary-wrapper basis-full md:basis-[35%] bg-[#DFDFDF] p-6 w-full">
                        <CartSummary />
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Cart;