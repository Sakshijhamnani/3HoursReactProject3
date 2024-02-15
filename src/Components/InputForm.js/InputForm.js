import React, { useState } from 'react'
import ShoesList from '../ShoesList/ShoesList'
// import ShoeList from '../ShoesList.js/shoeList'

const InputForm = () => {
    const [shoeName,setShoeName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [largeQuantity,setLargeQuantity]=useState('')
    const [mediumQuantity,setMediumQuantity]=useState('')
    const [smallQuantity,setSmallQuantity]=useState('')

    const [shoeList,setShoeList]=useState([])

    const shoeNameHandler=(event)=>{
       setShoeName(event.target.value)
    }
    const descriptionHandler=(event)=>{
        setDescription(event.target.value)
    }
    const priceHandler=(event)=>{
        setPrice(event.target.value)
    }
    const largeQuantityHandler=(event)=>{
        setLargeQuantity(event.target.value)
    }
    const mediumQuantityHandler=(event)=>{
        setMediumQuantity(event.target.value)
    }
    const smallQuantityHandler=(event)=>{
        setSmallQuantity(event.target.value)
    }


    const submitHandler=(event)=>{
      event.preventDefault();
      const newObj={
        shoeName,
        description,
        price,
        largeQuantity,
        mediumQuantity,
        smallQuantity
      }

      setShoeList((prevList)=>[...prevList,newObj])
      console.log(shoeList)

     
    }

  return (
    <div>
    <form onSubmit={submitHandler}>
        <label htmlFor="shoename">ShoeName</label><br/>
        <input type="text" id='shoename' onChange={shoeNameHandler}/><br/>
        <label htmlFor="description">description</label><br/>
        <input type="text" id='description' onChange={descriptionHandler}/><br/>
        <label htmlFor="price">Price</label><br/>
        <input type="number" id='price' onChange={priceHandler} /><br/>
        <p>Quantity Available</p>
        <label htmlFor="large" >L :</label>
        <input type="number" id='large' onChange={largeQuantityHandler}/>
        <label htmlFor="medium" >M :</label>
        <input type="number" id='medium' onChange={mediumQuantityHandler}/>
        <label htmlFor="small" >S :</label>
        <input type="number" id='small' onChange={smallQuantityHandler}/><br/>
        <button>Add Product</button>
    </form>
      <ShoesList shoeList={shoeList}/>
    </div>
  )
}

export default InputForm