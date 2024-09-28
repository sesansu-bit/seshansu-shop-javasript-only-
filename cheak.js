`<div class="calculation">
    <div class="itemsno">ITEM'S NO.(${totalItem})</div>
    <div class="totalitems">Total price<span>₹${totalMRP}</span></div>
    <div class="discountcart">Discount Price<span>-${totalDiscount}</span></div>
    <div class="tax">Tax fee<span>₹50</span></div>
    <div class="border"></div>
    <div class="totalamount">Total Amount<span>₹${finalPayment}</span></div>
    <div class="placeorder">PLACE ORDER</div>
    </div>`


    `<div class="eachcart">
    <div class="cartimage"><img src="${item.image}"></div>
    <div class="cartdetailed">
       <div class="cartcompanyname">${item.company}</div>
       <div class="cartproductname">${item.item_name}</div>
       <div class="cartprice">
       <span class="cartongoingprice">Rs.${item.current_price}</span>
       <span class="cartoriginalprice">Rs.${item.original_price}</span>
       <span class="cartdiscount">(${item.discount_percentage}%off)</span> 
       </div>
       <div class="cartdate">
           <span class="days">${item.return_period} days</span>
           <span class="return">return available</span>
       </div>
       <div class="reach">
           <span class="delevery">Delivery by</span>
           <span class="date"> ${item.delivery_date}</span>
   </div>       
   </div>
   <div class="delete" onclick="removeFromBag(${item.id})"><i class="ri-close-line"></i></div> 
    </div>`