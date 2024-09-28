bagitStr = localStorage.getItem('bagit');
bagit= bagitStr ? JSON.parse(bagitStr) : [];
bagcountnum();
component4();


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



function component4() {
	let womencontainers = document.querySelector('.womencontainers');
	if (!womencontainers) {
	  return;
	}
	let innerHtml5= '';
	itemd.forEach(item => {
	innerHtml5 +=`<div class="eachcontainer4">
            <img src="${item.image}">
            <div class="productrating4">${item.rating.stars} ⭐ | ${item.rating.count}</div>
             <div class="detailed4">
                 <div class="companyname4">${item.company}</div>
                 <div class="productname4">${item.item_name}</div>
                 <div class="price4">
                 <span class="ongoingprice4">Rs.${item.current_price}</span>
                 <span class="originalprice4">Rs.${item.original_price}</span>
                 <span class="discount4">(${item.discount_percentage}off)</span> 
                 </div>
                  <div class="addtocart4" onclick="addToBag(${item.id})">Add to Cart</div>
                 
             </div>
        </div>
`
	});
    womencontainers.innerHTML = innerHtml5;
  }










