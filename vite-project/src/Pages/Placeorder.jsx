import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../context/Storecontext';
const Placeorder = () => {
  const {getTotalCartAmount}= useContext(Storecontext);
  return (
    <form className='placeorder'>
      <div className="placeleft">
      <p className="title">Delivery Information </p>
    <div className="multifeild">
      <input type="text" placeholder='firstname' />
      <input type="text" placeholder='lastname' />
    </div>
     
      <input type="text" placeholder='email address' /><input type="text" placeholder='street' />
      <div className="multifeild">
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State' />
    </div>
    <div className="multifeild">
      <input type="text" placeholder='zip code' />
      <input type="text" placeholder='Country' />
    </div>
    <input type="text"  placeholder='phone'/>

    </div>



      <div className="placeright">
      <div className="carttotal">
          <h2>Cart Totals</h2>

          {/* subtotal fee etcc */}
          <div>
            <div className="carttotal-detail"><p>Sub Total</p>
            <p>${getTotalCartAmount()}</p></div> <hr />
            <div className="carttotal-detail">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?0:2}</p>
            </div> <hr />
            <div className="carttotal-detail">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>


          <button >PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default Placeorder
