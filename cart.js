
const TAX = 50;
let bagItemObjects=[];
onLoad();

function onLoad() {
loadBagItemObjects() ;
  storebagitem();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.rightcart');
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach(bagit => {
    totalMRP += bagit.original_price;
    totalDiscount += bagit.original_price - bagit.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + TAX;
  

  bagSummaryElement.innerHTML = `<div class="calculation">
    <div class="itemsno">Item's no.(${totalItem})</div>
    <div class="totalitems">Total price<span>₹${totalMRP}</span></div>
    <div class="discountcart">Discount Price<span>-${totalDiscount}</span></div>
    <div class="tax">Tax fee<span>₹50</span></div>
    <div class="border"></div>
    <div class="totalamount">Total Amount<span>₹${finalPayment}</span></div>
    <div class="placeorder">PLACE ORDER</div>
    </div>`

  ;
}

function loadBagItemObjects() {
  const allitems=[...itema,...itemb,...itemc,...itemd,...iteme,...itemf,...itemg,...itemh];
  bagItemObjects = bagit.map(itemId => {
    for (let i = 0; i < allitems.length; i++) {
      if (itemId == allitems[i].id) {
        return allitems[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function storebagitem() {
  let bagitemscontainer = document.querySelector('.leftcart');
  let innerHtml='';
  bagItemObjects.forEach(item=>{
  innerHtml+=   `<div class="eachcart">
  <div class="cartimage"><img src="${item.image}"></div>
  <div class="cartdetailed">
     <div class="cartcompanyname">${item.company}</div>
     <div class="cartproductname">${item.item_name}</div>
     <div class="cartprice">
     <span class="cartongoingprice">Rs.${item.current_price}</span>
     <span class="cartoriginalprice">Rs.${item.original_price}</span>
     <span class="cartdiscount">(${item.discount_percentage}off)</span> 
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
  });
  bagitemscontainer.innerHTML=innerHtml;
        }
  

function removeFromBag(itemId) {
  bagit = bagit.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagit', JSON.stringify(bagit));
  bagcountnum();
  loadBagItemObjects();
  storebagitem();
  displayBagSummary();
}

