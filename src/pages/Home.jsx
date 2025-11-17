import Navbar  from "../componets/sections/ui/Navbar";
 import Herosection from  "../componets/sections/landing/herosection";
 import Product from "../componets/sections/landing/product";
 import Specailoffer from "../componets/sections/landing/specailoffer";
 import Items from "../componets/sections/landing/items";
const Home = function () {
    return (
        <>
         <div>
            <Navbar />
            <Herosection />
            <Product />
            <Specailoffer />
            <Items />
         </div>
        </>
    );
};

export default Home;