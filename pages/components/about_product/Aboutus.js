import React from 'react'
import classes from "./Aboutus.module.css"

function Aboutus() {
    return (
        <div className={classes.aboutus_div}>
        <div className={classes.Aboutus}>
            <div className={classes.info_div}>
            <div className={classes.Aboutcontent}>
      <div className={classes.About}>
      <span className={classes.Circle}></span><h1>VALUES..</h1>
      </div>
      <div className={classes.Abouthcontainer}>
      <div className={`${classes.colsm12} ${classes.collg4}`}>
      <div className={classes.Aboutvaluesbox}>
        <div className={classes.valuesboximg}>
          <img src="/aboutBrain.png" alt="think"/>
        </div>
<h5 className={classes.Abouth5}>Think Big</h5>
<p className={classes.Aboutp}>Think 100x. Use technology for non-linear growth. Failure and experimentation are essential for growth </p>
        </div>
      </div>
      <div className={`${classes.colsm12} ${classes.collg4}`}>
      <div className={classes.Aboutvaluesbox}>
        <div className={classes.valuesboximg}>
          <img src="/aboutHandshake.png" alt="hand shake"/>
        </div>
<h5 className={classes.Abouth5}>Fair, Fast & Founder friendly</h5>
<p className={classes.Aboutp}>Be partner of choice, who is ethical, transparent and collaborative </p>
        </div>
      </div>
      <div className={`${classes.colsm12} ${classes.collg4}`}>
      <div className={classes.Aboutvaluesbox}>
        <div className={classes.valuesboximg}>
          <img src="/aboutCustomer.png" alt="Customer delight"/>
        </div>
<h5 className={classes.Abouth5}>Customer delight</h5>
<p className={classes.Aboutp}>"Customer love matters. Each of our brands needs to be in the top decile of customer experience"</p>
        </div>
      </div>
      <div className={`${classes.colsm12} ${classes.collg4}`}>
      <div className={classes.Aboutvaluesbox}>
        <div className={classes.valuesboximg}>
          <img src="/aboutCaring.png" alt="Caring Meritocracy"/>
        </div>
<h5 className={classes.Abouth5}>Caring Meritocracy</h5>
<p className={classes.Aboutp}>"Attract and grow the best talent. Create an inclusive culture where the best ideas win and you have the obligation to engage and dissent"</p>
        </div>
      </div>
      <div className={`${classes.colsm12} ${classes.collg4}`}>
      <div className={classes.Aboutvaluesbox}>
        <div className={classes.valuesboximg}>
          <img src="/aboutFrugality.png" alt="Frugality"/>
        </div>
<h5 className={classes.Abouth5}>Frugality</h5>
<p className={classes.Aboutp}>"We are frugal with capital and use innovation to grow our brands in a sustainable manner"</p>
        </div>
      </div>
      </div>
      
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default Aboutus
