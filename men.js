bagitStr = localStorage.getItem('bagit');
bagit= bagitStr ? JSON.parse(bagitStr) : [];
bagcountnum();
component3();


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


function component3(){
	let mencontainers = document.querySelector('.mencontainers');
	if (!mencontainers) {
	  return;
	}
	let innerHtml4 = '';
	itemc.forEach(item => {
	  innerHtml4 +=
`<div class="eachcontainer3">
            <img src="${item.image}">
            <div class="productrating3">${item.rating.stars} ⭐ | ${item.rating.count}</div>
             <div class="detailed3">
                 <div class="companyname3">${item.company}</div>
                 <div class="productname3">${item.item_name}</div>
                 <div class="price3">
                 <span class="ongoingprice3">Rs.${item.current_price}</span>
                 <span class="originalprice3">Rs.${item.original_price}</span>
                 <span class="discount3">(${item.discount_percentage}off)</span> 
                 </div>
                 <div class="addtocart3" onclick="addToBag(${item.id})">Add to Cart</div>
             </div>
        </div>
`
	});
    mencontainers.innerHTML = innerHtml4;
}



















