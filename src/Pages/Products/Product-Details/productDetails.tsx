import { AiOutlineMinus } from "react-icons/ai"; 
import { IoMdAdd } from "react-icons/io"; 
import { BsCheck2Square } from "react-icons/bs"; 
import { useParams } from "react-router";
import BreadCrumb from "../../../Components/Common/BreadCrumb/breadCrumb";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Components/Redux/TsHooks";
import { getSingleProduct } from "../../../Components/Redux/Slices/ProductSlice/product";
import Loading from "../../../Components/Common/Overlay/loading";
import { Button, IconButton, Rating } from "@mui/material";
import ProductTabs from "./productDetailsTabs/productTabs";
import { addToCart } from "../../../Components/Redux/Slices/Cart/cart";
import ImageMagnifier from "../../../Components/Common/Magnifer/magnifer";

const breadCrumbLinks = [
    {id:1,title:'home',path:'/'},
    {id:2,title:'products',path:'/products'},
    {id:3,title:'details'},
]

const sizeList = [
    {id:1,size:'s'},
    {id:2,size:'m'},
    {id:3,size:'l'},
]
const ProductDetails = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const [active,setActive] = useState<number|null>(null)
    const {singleProduct} = useAppSelector(state => state?.products)
    const {loading} = useAppSelector(state => state?.products)

    useEffect(() => {
        dispatch(getSingleProduct({id}))
    }, [id,dispatch])

    // for rating
    const [rate, setRate] = useState<number | null>(null);

    const handleActive = (index:number|null)=>{
        setActive(index)
    }

    useEffect(() => {
        setRate(singleProduct&&singleProduct?.rating?.rate);
    }, [singleProduct, rate])
        
    
    // handle qty of items

    const [qty, setqty] = useState<number | 1>(1);

    // const handleQtyChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    //     const {value} = e.target
    //     setqty(parseInt(value))
    // }

    const handleIncrement = ()=>{
        if(qty !== 50){
            setqty(qty + 1)
        } else {
            setqty(qty)
        }
    }

    const handleDecrement = ()=>{
        if(qty !== 1){
            setqty(qty - 1)
        } else {
            setqty(1)
        }
    }
    // useEffect(() => {        
    // }, [qty])

    // add to cart

    const addCart = ()=>{
        const data = {
            ...singleProduct,
            qty:qty
        }
        dispatch(addToCart(data))
    }

    return ( 
        <section className="product-details-wrapper">
            <div className="breadcrumb-wrapper">
                <BreadCrumb paths={breadCrumbLinks} title="product details" />
            </div>

            <div className="product-details-container flex flex-wrap gap-6 items-start mt-4 max-w-[90%] m-auto bg-white p-4 rounded-md [&>section]:md:basis-[48%]">
                <section className="product-image h-[500px] basis-full relative">
                    {/* <img src={singleProduct?.image} alt={singleProduct?.title} className={`w-full h-full object-contain`} /> */}
                    <ImageMagnifier src={singleProduct?.image || ''} width={'100%'} height={'100%'} magnifierHeight={250} magnifierWidth={250} zoomLevel={2} />
                </section>

                <section className="product-info basis-full">
                    <div className="info-wrapper [&>div>label]:text-lg [&>div>label]:text-mainDark [&>div>label]:capitalize [&>div>label]:font-semibold">
                        <div className="product-title text-lg font-semibold text-mainDark">
                            {singleProduct?.title}
                        </div>

                        <div className="product-rating-review mt-3 flex items-center gap-x-3 text-[#494949]">
                            <span className="flex items-center gap-x-1 text-mainColor">
                                {/* {[...Array(5)]?.map( (_,index)=> index >= Math.round(singleProduct?.rating?.rate || 0) ? <AiOutlineStar key={index} /> : <AiFillStar key={index} />)} */}
                                <Rating
                                    name="simple-controlled"
                                    value={rate}
                                    onChange={(_, newValue) => {
                                        setRate(newValue);
                                    }}
                                    sx={{'.MuiSvgIcon-root' : {fill:'#2577E7'}}}
                                />
                            </span>
                            <span className="text-sm border-r border-mainDark pr-2">{singleProduct?.rating?.count} Review</span>
                            <span className="text-sm">Write a review</span>
                        </div>

                        <div className="product-description mt-4">
                            <p className="text-mainDark">
                                {singleProduct?.description}
                            </p>
                        </div>

                        <div className="product-category capitalize text-mainDark flex items-center gap-x-2 mt-3">
                            <label>Category:</label>
                            <span className=" text-mainColor">{singleProduct?.category}</span>
                        </div>

                        <div className="product-price text-2xl text-mainColor font-semibold mt-6">
                            <span>${singleProduct?.price}</span>
                        </div>

                        <div className="product-size flex items-center gap-x-3 mt-6">
                            <label>Size:</label>

                            {sizeList?.map( (size,index)=>(
                                <div className="relative w-9 h-9 text-center capitalize" key={size?.id}>
                                    <input onClick={()=>handleActive(index)} type="radio" name="size" className="opacity-0 absolute top-0 bottom-0 left-0 right-0 cursor-pointer z-20" />
                                    <span className={`absolute top-0 bottom-0 left-0 right-0 border leading-9 z-10 ${active === index ? 'border-mainColor' : 'border-mainDark'}`}>{size?.size}</span>
                                </div>
                            ) )}

                        </div>

                        <div className="product-qty capitalize flex items-center gap-x-3 mt-6">
                            <label>Qty:</label>
                            {/* <input 
                                type="number"
                                min={1}
                                max={50}
                                value={qty}
                                className="border w-fit focus-within:outline-none py-2 text-center rounded-lg" 
                                onChange={handleQtyChange}
                            /> */}

                            <IconButton onClick={handleDecrement} className="text-mainColor text-lg border border-solid"><AiOutlineMinus /></IconButton>
                            <span>{qty}</span>
                            <IconButton onClick={handleIncrement} className="text-mainColor text-lg border border-solid"><IoMdAdd /></IconButton>
                        </div>

                        <div className="product-stock mt-4 flex items-center gap-x-1 text-green-600 font-semibold">
                            <BsCheck2Square className="text-lg" />
                            <span className="text-sm">in stock</span>
                        </div>

                        <div className="add-cart mt-6">
                            <Button onClick={addCart} className="capitalize font-semibold min-w-[60%] bg-transparent border-solid border border-mainColor text-mainborder-mainColor hover:bg-mainColor hover:text-white">Add to cart</Button>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-10 max-w-[90%] m-auto min-h-[10rem]">
                <ProductTabs description={singleProduct?.description || ''} />
            </div>

        {loading ? <Loading /> : null }
        </section>
    );
}

export default ProductDetails;