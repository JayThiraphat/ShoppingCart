import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteicn from '../image/delete-icn.svg'
import { MyCartContext } from '../mangement/context'
const CartItem =({name,image_url,price,quantity,id})=>{
    const {removeItem,toggleQuantity,formatNumber} =  MyCartContext()
    return (
        <div className="item">
            <div className="product-image">
                 <img src={image_url} alt={name}/>
            </div>
            <div className="product-desc">
                <span>{name}</span>
                <span>ราคา {formatNumber(price)} บาท</span>
            </div>
            <div className="quantity">
                <button className='plus-btn' onClick={()=>toggleQuantity(id,"increment")}>
                    <img src={plus} alt=''/>
                </button>
                <input type="text" value={quantity} disabled/>
                <button className='minus-btn' onClick={()=>toggleQuantity(id,"decrement")}>
                    <img src={minus} alt=''/>
                </button>
            </div>
            <div className="total-price">
                {formatNumber(quantity*price)}
            </div>
            <div className="remove" onClick={()=>removeItem(id)}>
                <img src={deleteicn} alt=''/>
            </div>
            
        </div>
    )
}
export default CartItem