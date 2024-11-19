import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Components/Redux/TsHooks";
import { getCategory, getProducts } from "../../Components/Redux/Slices/ProductSlice/product";
import {  FormControl,MenuItem, Select, SelectChangeEvent } from "@mui/material";
import ProductItem from "./Product-Item/productItem";
import Loading from "../../Components/Common/Overlay/loading";
import { Helmet } from "react-helmet-async";

const Products = React.memo(() => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state=>state?.products)
    const [category, setcategory] = useState<string | null>(null)
    
    useEffect(() => {
        dispatch(getProducts({}))
        dispatch(getCategory())
    }, [dispatch])
    
    // console.log(products?.category);

    // Category Dropdown
    const handleCategoryChange = (e:SelectChangeEvent)=>{
        const {value} = e.target
        const category = value
        setcategory(value)
        dispatch(getProducts({ category}))
    }
    
    return ( 
        <>
            <Helmet>
                <title>{'Store | Products'}</title> 
                <meta name="description" content={'A simple store products, which has a varaity of products you can buy online'} /> 
                <link rel="canonical" href={'www.simplestore.com/products'} /> 
            </Helmet>
            <section className="products-wrapper">
                {/* <article className="product-slider">
                    <ProductSlider data={products?.products} />
                </article> */}

                <article className="banner-wrapper flex items-center justify-center min-h-[250px] border border-red-300 font-semibold">
                    {/* <img className="w-full h-[350px] object-cover" src={banner} alt="store banner" /> */}
                    <span>Banner Here</span>
                </article>

                <article className="category-wrapper mt-2 px-2 w-full bg-mainColor flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-4 p-2">
                    <div>
                        <p className="text-xl text-white font-bold capitalize">Welcome to online shop</p>
                    </div>

                    <div>

                        <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category || ''}
                                displayEmpty
                                // label="Age"
                                onChange={handleCategoryChange}
                                className="min-w-[250px] bg-mainColor bg-opacity-15 text-white text-lg flex justify-between border border-solid border-[#e4e4e4bd] capitalize"
                                sx={{'.MuiInputBase-input' : {padding : '7px 12px'}} }
                            >

                                    <MenuItem value={''} disabled>Category</MenuItem>
                                    <MenuItem value={''}>All</MenuItem>
                                    {products?.category?.map( (category,index)=>(
                                    <MenuItem key={index} value={category} className="capitalize">{category}</MenuItem>

                                ) )}
                            </Select>
                        </FormControl>
                    </div>
                </article>

                <article className="relative px-5 mt-4 product-items-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {/*we can use limit query from endpoint this is just a faster method ( for better performance we should use limit to reduce the call request resources */}
                    {/*also used this method instead of method to test multiple cases for responsive instead of changing limit multiple times*/}
                    {/* for better ui and performance we should use pagination (Remote Server Pagination) */}
                    {products?.products?.map( (item)=>(
                        <ProductItem key={item?.id} data={item} />
                    ))}

                    {products?.loading ? <Loading /> : null}
                </article>
            </section>
        </>
    );
})

export default Products;