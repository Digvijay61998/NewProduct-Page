import Navbar from "./components/NevBar/NavBar";
import FrontPage from "./components/Front-Page/FrontPage"
import Productpage from "./components/productpage/ProductPage"
import Aos from "aos";
import React, { useEffect} from 'react';
import BrandsColab from "./components/brandsColab/BrandsColab";
import Aboutus from "./components/about_product/Aboutus";
import FooterPage from "./components/footerPage/FooterPage";
import Services from "./components/services/Services";
import UpperFooter from "./components/upperFooter/UpperFooter";
import StepsForBlog from "./components/StepsToFollow/StepsForBlog";


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });

}, []);
  return (
   <>
   <Navbar/>
   <FrontPage/>
   <Productpage/>
   <BrandsColab/>
   <Aboutus/>
   <StepsForBlog/>
   <Services/>
   <UpperFooter/>
   <FooterPage/>
   </> 
  )
}
