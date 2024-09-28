bagitStr = localStorage.getItem('bagit');
bagit= bagitStr ? JSON.parse(bagitStr) : [];
bagcountnum();
component9();


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




function component9() {
	let housecontainers = document.querySelector('.housecontainers');
	if (!housecontainers) {
	  return;
	}
	let innerHtml9 = '';
	itemh.forEach(item => {
	  innerHtml9 +=
`<div class="eachonecontainer9">
            <img src="${item.image}">
            <div class="productrating9">${item.rating.stars} ⭐ | ${item.rating.count}</div>
             <div class="detailed9">
                 <div class="companyname9">${item.company}</div>
                 <div class="productname9">${item.item_name}</div>
                 <div class="price9">
                 <span class="ongoingprice9">Rs.${item.current_price}</span>
                 <span class="originalprice9">Rs.${item.original_price}</span>
                 <span class="discount9">(${item.discount_percentage}off)</span> 
                 </div>
                  <div class="addtocart9" onclick="addToBag(${item.id})">Add to Cart</div>
             </div>
        </div>
`
	});
    housecontainers.innerHTML = innerHtml9;
  }










