import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../context/Storecontext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
   const {cartitem,food_list,removefromcart,getTotalCartAmount,url}  = useContext(Storecontext);
   const navi = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cartitems-title text-xl font-bold fo">
            <p>Items</p>
            <p>Price</p>
            <p>Title</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
   if(cartitem[item._id]>0){
    return(
      <div>
 <div className="cartitems-title cartitemitem">
        <img src={url+"/image/"+item.image} alt="" />
        <p>{item.name}</p>
        <p>${item.price}</p>                
        <p>{cartitem[item._id]}</p>
        <p>${item.price*cartitem[item._id]} </p>
        <p onClick={()=>removefromcart(item._id)} className='cross'>x</p>
      </div>
      <hr />
     </div>

    )
   }
        })}
      </div>
      {/* bottom */}
      <div className="cartb">
        {/* sub total  */}
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


          <button onClick={()=>navi('/order')}>PROCEED TO CHECKOUT</button>
        </div>





        <div className="promo">
          <div>
            <p>If you have any promo code ,Enter it here </p>
            <div className='promo-input'>
              <input type="text" placeholder='promo code' />
              <button>submit
              </button>
            </div>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Cart
