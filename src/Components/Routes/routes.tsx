import { Route, Routes } from "react-router";
import Layout from "../Layout/layout";
import CommingSoon from "../Common/Soon/soon";
import Products from "../../Pages/Products/products";
import ProductDetails from "../../Pages/Products/Product-Details/productDetails";
import Cart from "../../Pages/Cart/cart";

const Routing = () => {
    return ( 
        <Layout>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/products" element={<Products />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<CommingSoon />} />
            </Routes>
        </Layout>
    );
}

export default Routing;