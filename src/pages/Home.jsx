import Navbar  from "../componets/sections/ui/Navbar";
 import Herosection from  "../componets/sections/landing/herosection";
 import Product from "../componets/sections/landing/product";
const Home = function () {
    return (
        <>
         <div>
            <Navbar />
            <Herosection />
            <Product />
         </div>
        </>
    );
};

export default Home;