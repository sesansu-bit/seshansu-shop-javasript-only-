bagitStr = localStorage.getItem('bagit');
bagit= bagitStr ? JSON.parse(bagitStr) : [];
bagcountnum();
component8();


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




function component8() {
	let sportcontainers = document.querySelector('.sportcontainers');
	if (!sportcontainers) {
	  return;
	}
	let innerHtml8 = '';
	itemg.forEach(item => {
	  innerHtml8 +=
`<div class="eachonecontainer8">
            <img src="${item.image}">
            <div class="productrating8">${item.rating.stars} ⭐ | ${item.rating.count}</div>
             <div class="detailed8">
                 <div class="companyname8">${item.company}</div>
                 <div class="productname8">${item.item_name}</div>
                 <div class="price8">
                 <span class="ongoingprice8">Rs.${item.current_price}</span>
                 <span class="originalprice8">Rs.${item.original_price}</span>
                 <span class="discount8">(${item.discount_percentage}off)</span> 
                 </div>
                 <div class="addtocart8" onclick="addToBag(${item.id})">Add to Cart</div>
             </div>
        </div>
`
	});
    sportcontainers.innerHTML = innerHtml8;
  }







