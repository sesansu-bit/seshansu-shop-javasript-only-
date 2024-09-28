bagitStr = localStorage.getItem('bagit');
bagit= bagitStr ? JSON.parse(bagitStr) : [];
bagcountnum();
component6();


function addToBag(itemid){
    bagit.push(itemid);
localStorage.setItem('bagit', JSON.stringify(bagit));
bagcountnum();
}


function bagcountnum(){
    let bagcount =document.querySelector(".bagcount");
    if(bagit.length>0){
        bagcount.style.visibility ='visible';
    bagcount.innerText =bagit.length;
    }
    else{
        bagcount.style.visibility = 'hidden';
    }
}


function component6() {
	let electroniccontainers = document.querySelector('.electroniccontainers');
	if (!electroniccontainers) {
	  return;
	}
	let innerHtml6 = '';
	itemf.forEach(item => {
	  innerHtml6 +=
`<div class="eachonecontainer6">
            <img src="${item.image}">
            <div class="productrating6">${item.rating.stars} ⭐ | ${item.rating.count}</div>
             <div class="detailed6">
                 <div class="companyname6">${item.company}</div>
                 <div class="productname6">${item.item_name}</div>
                 <div class="price6">
                 <span class="ongoingprice6">Rs.${item.current_price}</span>
                 <span class="originalprice6">Rs.${item.original_price}</span>
                 <span class="discount6">(${item.discount_percentage}off)</span> 
                 </div>
               <div class="addtocart6" onclick="addToBag(${item.id})">Add to Cart</div>
             </div>
        </div>
`
	});
    electroniccontainers.innerHTML = innerHtml6;
  }


