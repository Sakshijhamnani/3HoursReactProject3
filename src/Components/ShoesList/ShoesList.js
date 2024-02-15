import React from 'react'
import classes from './ShoesList.module.css'

const ShoesList = (props) => {
   console.log('Hey',props.shoeList)
 
  return (
    <div className={classes.maindiv}>
        
        {props.shoeList.map((shoe)=>(
            <div className={classes.list}>
            <span>{shoe.shoeName}</span>
            <span>₹{shoe.price}</span>
             <span>{shoe.description}</span>
             <span>
             <span><button>Large:{shoe.largeQuantity}</button></span>
             <span><button>Medium:{shoe.mediumQuantity}</button></span>
             <span><button>Small:{shoe.smallQuantity}</button></span>
             </span>
            </div>
        ))}
    </div>
  )
}

export default ShoesList