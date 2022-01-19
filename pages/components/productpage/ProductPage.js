import React from 'react'
import BlogIcon from "../../../public/BlogIcon.gif";
import Image from 'next/image'
import classes from "./ProductPage.module.css"
import "aos/dist/aos.css";
import waves from "../../../public/waves.svg"

export default function Productpage() {
    return (
        <>
        <div className={classes.body}>
        <img src='/waves.svg' alt="wave" className={classes.waves} />

            <div className={classes.waves}>
        </div>
            <div className={classes.productpage} data-aos="fade-right">
                <div className={classes.productpageImage}>
                    <Image src={BlogIcon} data-aos="fade-right" className={classes.productImagepng} alt="blog-image" />
                </div>
                <p className={classes.productcontent}>Change, customize or add anything to your site. </p>
                <span className={classes.productcontentinfo} data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.</span>
 <ul className={classes.boxarea}>
                 <li>B</li>
                 <li>L</li>
                 <li>O</li>
                 <li>G</li>
                 <li>S</li>
                 <li>B</li>
                 <li>L</li>
                 <li>G</li>
                 <li>S</li>
                 <li>B</li>
               </ul>
            </div>
        </div>
        </>
    )
}
