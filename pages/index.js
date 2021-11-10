import Navbar from "./components/NevBar/NavBar";
import FrontPage from "./components/Front-Page/FrontPage"
import Productpage from "./components/productpage/ProductPage"
import Aos from "aos";
import React, { useEffect , useState , useCallback} from 'react';
import BrandsColab from "./components/brandsColab/BrandsColab";
import Aboutus from "./components/about_product/Aboutus";
import FooterPage from "./components/footerPage/FooterPage";
import Services from "./components/services/Services";
import UpperFooter from "./components/upperFooter/UpperFooter";
import StepsForBlog from "./components/StepsToFollow/StepsForBlog";
// import React, {useState} from 'react';

export default function Home() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.addEventListener('mousemove', (e) =>{
      setCursorX(e.pageX)
      setCursorY(e.pageY)
    })
    
}, []);

  return (
   <>
   <Navbar/>
   <FrontPage/>
     <div className="cursor"
       style={{ 
        left:cursorX + 'px',
        top:cursorY + 'px'
      }}
      >
   </div>
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


