import React from 'react'
import classes from "./BrandsColab.module.css"

function BrandsColab() {
    return (
        <div className={classes.brandsColab_div}>
            <div className={classes.brandsColab}>
                <p className={classes.brandsColab_p}>rewards from brands you love.</p>
            </div>
            <div className={classes.brandslogo_div}></div>
        </div>
    )
}

export default BrandsColab
